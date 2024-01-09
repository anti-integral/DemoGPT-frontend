import { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import Loader from "example/components/Loader/Loader";
import EditandDownload from "example/components/EditandDownload";
import { useRouter } from "next/router";

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
			const token = localStorage.getItem("token");
			if (!token) {
				// Handle the case when token is not available in localStorage
				setIsLoading(false);
				console.error("Token not found");
				return;
			}
			const response = await axios.post<any>(
				`${process.env.BACKEND_ADDRESS}/generate`,
				formData,
				{
					headers: {
						Authorization: `Bearer ${token}`, // Include the token in the Authorization header
					},
				}
			);
			if (response.data) {
				setIsLoading(false);

				localStorage.setItem("projectId", response.data.result.project_id);
				fetchData();
			}
		} catch (error: any) {
			setIsLoading(false);
			if (error.response.data.detail === "Access token not valid") {
				router.push("/dashboard/login");
			}
			console.error("Error fetching HTML:", error);
		}
	};
	const fetchData = async () => {
		if (!formData) return; // If formData is not available, return early

		setIsLoading(true);
		try {
			const token = localStorage.getItem("token");
			if (!token) {
				// Handle the case when token is not available in localStorage
				setIsLoading(false);
				console.error("Token not found");
				return;
			}
			const response = await axios.post<string>(
				`${process.env.BACKEND_ADDRESS}/renderoutput`,
				"",

				{
					headers: {
						Authorization: `Bearer ${token}`, // Include the token in the Authorization header
					},
				}
			);
			if (response.data) {
				// getProjectId();
				setIsLoading(false);

				const data = response.data; // Assuming the API response is text/html
				setHtmlContent(data);
			}
		} catch (error: any) {
			setIsLoading(false);
			if (error.response.data.detail === "Access token not valid") {
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
	}, [formData?.appIdea]); // Fetch data whenever formData changes
	console.log("response", response);
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
