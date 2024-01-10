import React, { useState } from "react";
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Textarea,
	Label,
	Input,
} from "@roketid/windmill-react-ui";
import { EditIcon } from "icons";
import axios from "axios";
import Link from "next/link";

interface EditandDownloadProps {
	response: any;
	setResponse: any;
	setIsLoading: any;
}

interface EditData {
	editPrompt: string;
}

const EditandDownload: React.FC<EditandDownloadProps> = ({
	response,
	setResponse,
	setIsLoading,
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [data, setData] = useState<EditData>({
		editPrompt: "",
	});

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setData({ ...data, [name]: value });
	};

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};
	const projectEdit = async () => {
		let pid = localStorage.getItem("projectId");
		setIsLoading(true);
		try {
			const token = localStorage.getItem("token");
			const resp = await axios.post<string>(
				`${process.env.BACKEND_ADDRESS}/edit`,
				{ projectID: pid, ...data },
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			if (resp.data) {
				setIsLoading(false);
				closeModal();
				edit();
			}
		} catch (err) {
			setIsLoading(false);
			console.error(err);
		}
		setIsLoading(false);
	};
	const edit = async () => {
		setIsLoading(true);
		try {
			const token = localStorage.getItem("token");
			const resp = await axios.post<string>(
				`${process.env.BACKEND_ADDRESS}/renderoutput`,
				"",

				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			if (resp.data) {
				setIsLoading(false);
				closeModal();
				setResponse(resp.data);
			}
		} catch (err) {
			setIsLoading(false);
			console.error(err);
		}
		setIsLoading(false);
	};

	return (
		<div className="w-full flex items-center justify-between my-2">
			<div></div>
			<div className="flex items-center justify-around gap-2 px-5">
				<div>
					<Link
						href={"/dashboard"}
						passHref={true}
					>
						<Button iconLeft={EditIcon}>
							<span>Dashboard</span>
						</Button>
					</Link>
				</div>
				<div>
					<Button
						iconLeft={EditIcon}
						onClick={openModal}
					>
						<span>Edit</span>
					</Button>
				</div>
			</div>
			<Modal
				isOpen={isModalOpen}
				onClose={closeModal}
			>
				<ModalHeader>Edit</ModalHeader>
				<ModalBody>
					<Label className="mt-4">
						<span>Explain your application app idea *</span>
						<Textarea
							value={data.editPrompt}
							name="editPrompt"
							onChange={handleInputChange}
							className="mt-3"
							rows={3}
							placeholder="Enter some long form content."
						/>
					</Label>
					{/* Other form fields... */}
				</ModalBody>
				<ModalFooter>
					<div className="hidden sm:block">
						<Button
							layout="outline"
							onClick={closeModal}
						>
							Cancel
						</Button>
					</div>
					<div className="hidden sm:block">
						<Button onClick={projectEdit}>Submit</Button>
					</div>
					{/* Other buttons... */}
				</ModalFooter>
			</Modal>
		</div>
	);
};

export default EditandDownload;
