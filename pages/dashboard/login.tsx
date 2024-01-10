/* eslint-disable react/no-unescaped-entities */
import React, {
	useContext,
	useEffect,
	useState,
	ChangeEvent,
	FormEvent,
} from "react";
import Link from "next/link";
import Image from "next/image";
import { useGoogleLogin } from "@react-oauth/google";
import dotenv from "dotenv";
import {
	Label,
	Input,
	Button,
	WindmillContext,
} from "@roketid/windmill-react-ui";
import { GoogleIcon } from "icons";
import { AuthContext } from "context/AuthContext";
import { useRouter } from "next/router";
import axios, { AxiosError } from "axios";
import { post } from "./../../utils/utilities";
import { toast } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";

dotenv.config();

interface LoginPageProps {
	path?: string;
}

interface LoginData {
	email: string;
	password: string;
}

const fetch = async (
	tokenData: any,
	flag: string,
	token: any
): Promise<boolean> => {
	console.log(process.env.BACKEND_ADDRESS);
	let data =
		flag === "google"
			? {
					token: tokenData,
			  }
			: tokenData;
	let bearerToken =
		flag === "google" ? tokenData.access_token ?? "" : token ?? "";
	const url =
		flag === "google"
			? process.env.BACKEND_ADDRESS + "/auth/login/"
			: process.env.BACKEND_ADDRESS + "/auth/login/manual";
	let config = {
		method: "post",
		maxBodyLength: Infinity,
		url: url,
		headers: {
			"Content-Type": "application/JSON",
			Authorization: `Bearer ${bearerToken}`,
		},
		data: JSON.stringify(data),
	};
	return new Promise<boolean>((resolve, reject) => {
		axios
			.request(config)
			.then((response) => {
				localStorage.setItem("token", response.data.token ?? null);
				console.log(response, response.data);
				resolve(true);
			})
			.catch((error) => {
				console.log(error);
				reject(false);
			});
	});
};

const LoginPage: React.FC<LoginPageProps> = (props) => {
	const [isLoading, setIsLoading] = useState(false);
	const [loginData, setLoginData] = useState<LoginData>({
		email: "",
		password: "",
	});
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const { user, login } = useContext(AuthContext);
	const { mode } = useContext(WindmillContext);
	const router = useRouter();
	function togglePasswordVisibility(data: any) {
		console.log("data", data);
		if (data === "password") {
			setIsPasswordVisible((prevState) => !prevState);
		}
	}
	const imgSource =
		mode === "dark"
			? "/assets/img/login-office-dark.jpeg"
			: "/assets/img/login-office.jpeg";

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setLoginData({ ...loginData, [name]: value });
	};
	const googleLogin = useGoogleLogin({
		onSuccess: async (tokenResponse: any) => {
			console.log(
				"tokenresponse=====",
				tokenResponse
				// JSON.parse(tokenResponse)
			);
			await fetch(JSON.parse(tokenResponse), "google", "");
			if (props) {
				console.log(props);
			}
			router.push("/");
			localStorage.setItem("token", JSON.stringify(tokenResponse));
		},
		onError: (err) => {
			console.log(err);
		},
	});
	useEffect(() => {
		// Check if the user is already authenticated or the token is valid
		if (user) {
			// Redirect to the dashboard or any other authorized page
			router.push("/dashboard");
		}
	}, [user]);

	// manual login
	const manualLogin = async (e: FormEvent) => {
		setIsLoading(true);
		e.preventDefault();

		try {
			let resp = await axios.post(
				`${process.env.BACKEND_ADDRESS}/login`,
				loginData
			);
			if (resp.data.status === "success" && resp.data.result) {
				setIsLoading(false);
				toast.success(resp.data.message);
				// login(resp.data.result); // Update AuthContext with user data

				localStorage.setItem("token", resp.data.result.access_token);
				localStorage.setItem("uuid", resp.data.result.user_id);

				router.push("/dashboard");
			}
			console.log("logins", resp);
		} catch (error: any) {
			setIsLoading(false);
			toast.error(error.response.data.detail);
			console.log("login", error);
		}
		setIsLoading(false);
	};

	return (
		<div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
			<div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
				<div className="flex flex-col overflow-y-auto md:flex-row">
					<div className="relative h-32 md:h-auto md:w-1/2">
						<Image
							aria-hidden="true"
							className="hidden object-cover w-full h-full"
							src={imgSource}
							alt="Office"
							layout="fill"
						/>
					</div>

					<main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
						<div className="w-full">
							<h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
								Welcome to DemoGPT
							</h1>
							<Label>
								{/* <span>Email</span> */}
								<Input
									className="mt-1"
									type="email"
									name="email"
									value={loginData.email}
									placeholder="Enter Your Email"
									onChange={handleChange}
								/>
							</Label>
							{/* <Label className="mt-4">
								<Input
									className="mt-1"
									type="password"
									name="password"
									value={loginData.password}
									onChange={handleChange}
									placeholder="Enter Your Password"
								/>
							</Label> */}
							<Label className="mt-4">
								<span>Password</span>

								<div className="relative  container mx-auto  mt-1">
									<Input
										type={isPasswordVisible ? "text" : "password"}
										placeholder="Password"
										className="w-full
        px-4
        py-2
        text-base
        border border-gray-300
        rounded
        outline-none
        focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
										name="password"
										onChange={handleChange}
										value={loginData.password}
									/>
									<button
										className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
										onClick={() => togglePasswordVisibility("password")}
									>
										{isPasswordVisible ? (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="w-5 h-5"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
												/>
											</svg>
										) : (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="w-5 h-5"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
												/>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
												/>
											</svg>
										)}
									</button>
								</div>
							</Label>

							<Button
								className={`${
									loginData.email && loginData.password
										? "mt-4"
										: "mt-4 cursor-not-allowed"
								}`}
								onClick={(e) => manualLogin(e)}
								block
								disabled={loginData.email && loginData.password ? false : true}
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
									"Sign In"
								)}
							</Button>

							<hr className="my-8" />
							<Button
								block
								layout="outline"
								onClick={() => googleLogin()}
							>
								<GoogleIcon
									className="w-4 h-4 mr-2"
									aria-hidden="true"
								/>
								Sign in with Google
							</Button>
							<p className="mt-4">
								<Link href="/dashboard/forgot-password">
									<a className="text-xs font-medium text-purple-600 dark:text-white hover:underline">
										Forgot password?
									</a>
								</Link>
							</p>
							<p className="mt-1 font-medium text-xs text-white">
								Don't have an account?
								<Link href="/dashboard/create-account">
									<a className=" ml-1 text-xs font-medium text-purple-600 dark:text-purple-400 hover:underline">
										Create account
									</a>
								</Link>
							</p>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
