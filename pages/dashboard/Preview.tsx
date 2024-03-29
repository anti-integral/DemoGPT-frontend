import { useEffect, useState } from "react";
import Head from "next/head";
import Loader from "example/components/Loader/Loader";
import EditandDownload from "example/components/EditandDownload";
import { useRouter } from "next/router";
import callApi from "../api/CallApi"; // Update the import path accordingly
import Image from "next/image";

interface FormData {
	appIdea: string;
	appFeatures: string;
}

const Preview = () => {
	const router = useRouter();
	const { data } = router.query;
	const [htmlContent, setHtmlContent] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [formData, setFormData] = useState<FormData | undefined>();
	const [response, setResponse] = useState<string>("");

	console.log("data", formData);

	const getProjectId = async () => {
		setIsLoading(true);
		try {
			const data = await callApi<any>("generate", "post", formData); // Specify the type for callApi

			if (data) {
				setIsLoading(false);
				console.log("data", data);
				setHtmlContent(data.code);

				localStorage.setItem("projectId", data.result.project_id);
				// fetchData();
			}
		} catch (error: any) {
			setIsLoading(false);
			if (
				error.response &&
				error.response.data.detail === "Access token not valid"
			) {
				router.push("/dashboard/login");
			}
			console.error("Error fetching HTML:", error);
		}
	};

	useEffect(() => {
		if (response) {
			setHtmlContent(response);
		}
	}, [response]);

	useEffect(() => {
		if (data) {
			const parsedData: FormData = JSON.parse(data as string);
			setFormData(parsedData);
		}
	}, [data]);

	useEffect(() => {
		if (formData) getProjectId();
	}, [formData?.appIdea]);

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

export default Preview;
