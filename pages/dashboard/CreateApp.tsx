import { useEffect, useState, ChangeEvent, FormEvent, DragEvent } from "react";
import Layout from "example/containers/Layout";
import PageTitle from "example/components/Typography/PageTitle";
import { Button, Input, Label, Textarea } from "@roketid/windmill-react-ui";
// import ImageUpload from "example/components/ImageUpload";
import Link from "next/link";
import Image from "next/image";
import router from "next/router";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";
interface FormData {
	appIdea: string;
	appFeatures: string;
	appLook: string;
	image: string;
}
interface ImageUploadProps {
	setFormData: React.Dispatch<React.SetStateAction<FormData>>;
	formData: FormData;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ setFormData, formData }) => {
	const [dragOver, setDragOver] = useState<boolean>(false);
	// const [image, setImage] = useState<string | null>(null);

	const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setDragOver(true);
	};

	const handleDragLeave = () => {
		setDragOver(false);
	};

	const handleDrop = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setDragOver(false);

		const file = e.dataTransfer.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (event: ProgressEvent<FileReader>) => {
				if (event.target && event.target.result) {
					setFormData({ ...formData, image: event.target.result as string });
				}
			};
			reader.readAsDataURL(file);
		}
	};

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (event: ProgressEvent<FileReader>) => {
				if (event.target && event.target.result) {
					setFormData({ ...formData, image: event.target.result as string });
				}
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<div
			className={`border-2 border-dashed rounded-lg p-4 text-center mt-2 ${
				dragOver ? "border-blue-500" : "border-gray-300"
			}`}
			onDragOver={handleDragEnter}
			onDragEnter={handleDragEnter}
			onDragLeave={handleDragLeave}
			onDrop={handleDrop}
		>
			<div className="mb-4">
				{formData.image ? (
					<div className="mb-2">
						<Image
							width={400}
							height={300}
							src={formData.image}
							alt="Uploaded"
							className="max-w-full h-auto rounded-lg"
						/>
					</div>
				) : (
					<div className="text-white">Drag & Drop your image here or</div>
				)}
				<div className="text-center">
					<label
						htmlFor="image-upload"
						className="mt-2 block mx-auto py-2 px-4 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600"
						style={{ width: "200px" }}
					>
						Choose File
					</label>
					<input
						type="file"
						accept="image/*"
						onChange={handleFileChange}
						className="hidden"
						id="image-upload"
					/>
				</div>
			</div>
		</div>
	);
};

const CreateApp = (): JSX.Element => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [formData, setFormData] = useState<FormData>({
		appIdea: "",
		appFeatures: "",
		appLook: "",
		image: "",
	});
	const handleReset = (): void => {
		// Implement reset logic here
		setFormData({
			appIdea: "",
			appFeatures: "",
			appLook: "",
			image: "",
		});
	};
	const enhacheAI = async () => {
		const token = localStorage.getItem("token");

		const payload = {
			enhancePrompt: formData.appLook,
		};
		setIsLoading(true);
		try {
			let resp = await axios.post(
				`${process.env.BACKEND_ADDRESS}/enhance`,
				payload,
				{
					headers: {
						Authorization: `Bearer ${token}`, // Include the token in the Authorization header
					},
				}
			);
			if (resp.data) {
				setIsLoading(false);
				setFormData({ ...formData, appLook: resp.data.result.enhace_data });
			}
		} catch (error: any) {
			setIsLoading(false);
		}
		setIsLoading(false);
	};
	const handleInputChange = (e: any) => {
		const { name, value } = e.target;
		// Update the 'appIdea' in the 'formData' state or wherever it's stored
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};
	const handleNextPage = () => {
		router.push({
			pathname: "/dashboard/Preview",
			query: { data: JSON.stringify(formData) },
		});
	};

	useEffect(() => {
		console.log("Enter", formData);
	}, [formData]);
	return (
		<Layout>
			<PageTitle>Welcome to DemoGPT</PageTitle>
			<div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
				<Label className="mt-4">
					<span>Explain your application app idea *</span>
					<Textarea
						value={formData.appIdea}
						name="appIdea"
						onChange={handleInputChange}
						className="mt-3"
						rows={3}
						placeholder="Enter your application idea ."
					/>
				</Label>
				<Label className="mt-3">
					<span>
						List all specific app features desired for your app (comma
						seperated)
					</span>
					<Textarea
						value={formData.appFeatures}
						name="appFeatures"
						onChange={handleInputChange}
						className="mt-3"
						rows={3}
						placeholder="Write some specific app features"
					/>
				</Label>
				<div className="flex items-center justify-between">
					<Label className="mt-4">
						<span>Describe how your app look like</span>
					</Label>
					<div className="my-4">
						{formData.appLook && (
							<Button
								onClick={enhacheAI}
								className="bg-green-600"
							>
								{isLoading ? (
									<RotatingLines
										visible={true}
										width="20"
										strokeColor="white"
										strokeWidth="5"
										animationDuration="0.75"
										ariaLabel="rotating-lines-loading"
									/>
								) : (
									"Enhance with AI"
								)}
							</Button>
						)}
					</div>
				</div>
				<Textarea
					value={formData.appLook}
					name="appLook"
					onChange={handleInputChange}
					className="mt-1"
					rows={3}
					placeholder="Describe how your app look like"
				/>

				<div className="container mx-auto py-8">
					<span className="text-white">Image Upload</span>
					<ImageUpload
						setFormData={setFormData}
						formData={formData}
					/>
				</div>
				<div className="flex items-center mt-5 justify-between">
					<div></div>
					<div className="flex items-center justify-between gap-4">
						<button
							onClick={handleReset}
							className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border-b-2 border-gray-400 hover:border-grey-500 rounded "
						>
							Reset
						</button>
						{/* <Link
							href={"/dashboard/Preview"}
							passHref={true}
						> */}
						<button
							onClick={() => {
								formData.appFeatures && formData.appIdea
									? handleNextPage()
									: "";
							}}
							className={`bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded ${
								formData.appFeatures && formData.appIdea
									? ""
									: "cursor-not-allowed opacity-50"
							}`}
						>
							Submit
						</button>
						{/* </Link> */}
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default CreateApp;
