"use client";

import { useEffect } from "react";
import dotenv from "dotenv";
import AOS from "aos";
import "aos/dist/aos.css";

import PageIllustration from "example/components/Landing/page-illustration";
import Header from "example/components/Landing/ui/header";

dotenv.config();
// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   display: "swap",
// });

// const architects_daughter = Architects_Daughter({
//   subsets: ["latin"],
//   variable: "--font-architects-daughter",
//   weight: "400",
//   display: "swap",
// });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function Layout({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		AOS.init({
			once: true,
			disable: "phone",
			duration: 600,
			easing: "ease-out-sine",
		});
	});

	useEffect(() => {
		console.log(process.env.GOOGLE_CLIENT_ID);
	});

	return (
		<>
			<div
				className="flex flex-col min-h-screen overflow-hidden"
				style={{ backgroundColor: "#151719" }}
			>
				<main className="grow">
					<PageIllustration />
					<Header />
					{children}
				</main>
			</div>
			{/* <Footer /> */}
		</>
	);
}
