import { useEffect, useState } from "react";
import Head from "next/head";
import Loader from "example/components/Loader/Loader";
import EditandDownload from "example/components/EditandDownload";
import { useRouter } from "next/router";
import callApi from "../api/CallApi"; // Update the import path accordingly
import Image from "next/image";

interface FormData {
	projectID: any;
}

const EditPage = () => {
	const router = useRouter();
	const { pId } = router.query;
	const [htmlContent, setHtmlContent] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [formData, setFormData] = useState<any>();
	const [response, setResponse] = useState<string>("");

	console.log("data", pId);

	const getProjectId = async () => {
		// Check if pId is available
		if (pId) {
			let payload: FormData = {
				projectID: pId as string, // Assuming pId is a string
			};
			setIsLoading(true);
			try {
				const data = await callApi<any>("redirect-edit", "post", payload);

				if (data) {
					setIsLoading(false);
					console.log("Data from generateProjectId API:", data);
					// Set other state variables or perform actions if needed
				}
				setHtmlContent(data.code);
				localStorage.setItem("projectId", data.result.project_id);
			} catch (error: any) {
				setIsLoading(false);

				if (
					error.response &&
					error.response.data &&
					error.response.data.detail === "Access token not valid"
				) {
					router.push("/dashboard/login");
				}
				console.error("Error fetching HTML:", error);
			}
		}
	};

	useEffect(() => {
		getProjectId();
	}, [pId]);

	useEffect(() => {
		if (response) {
			setHtmlContent(response);
		}
	}, [response]);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<div>
					<Head>
						<title>Render HTML</title>
					</Head>
					<EditandDownload
						response={response}
						setResponse={setResponse}
						setIsLoading={setIsLoading}
					/>
					<div dangerouslySetInnerHTML={{ __html: htmlContent }} />
				</div>
			)}
		</>
	);
};

export default EditPage;
