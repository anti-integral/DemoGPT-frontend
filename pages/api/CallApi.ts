import axios, { AxiosResponse } from "axios";

import { useRouter } from "next/router";

const callApi = async <T>(
	endpoint: string,
	method: "get" | "post" | "put" | "delete" = "post",
	data: any = ""
): Promise<T> => {
	try {
		const token = localStorage.getItem("token");
		if (!token) {
			console.error("Token not found");
			throw new Error("Token not found");
		}

		const response: AxiosResponse<T> = await axios({
			method,
			url: `${process.env.BACKEND_ADDRESS}/${endpoint}`,
			data,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		return response.data;
	} catch (error: any) {
		if (
			error.response &&
			error.response.data.detail === "Access token not valid"
		) {
			const router = useRouter();

			router.push("/dashboard/login");
		}
		console.error("API call error:", error);
		throw error;
	}
};

export default callApi;
