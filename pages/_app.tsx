import "tailwindcss/tailwind.css";

import React, { useEffect } from "react";
import { Windmill } from "@roketid/windmill-react-ui";
import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthContextProvider } from "context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import router from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
	const googleClientId =
		"278022160322-ovuqcfjgpul25gdhsv3e37e74pn00tvb.apps.googleusercontent.com";

	// "395785444978-7b9v7l0ap2h3308528vu1ddnt3rqftjc.apps.googleusercontent.com";
	// suppress useLayoutEffect warnings when running outside a browser
	if (!process.browser) React.useLayoutEffect = React.useEffect;
	const checkTOken = () => {
		const token = localStorage.getItem("token");
		if (!token) {
			router.push("/dashboard/login");
		}
	};
	useEffect(() => {
		checkTOken();
	}, []);
	return (
		<>
			<GoogleOAuthProvider clientId={googleClientId}>
				<AuthContextProvider>
					<Windmill usePreferences={true}>
						<Component {...pageProps} />
					</Windmill>
				</AuthContextProvider>
			</GoogleOAuthProvider>
			<ToastContainer
				autoClose={2000}
				closeOnClick
				pauseOnHover
			/>
		</>
	);
}
export default MyApp;
