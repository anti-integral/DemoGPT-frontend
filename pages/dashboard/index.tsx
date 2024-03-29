import React, { useState, useEffect, useContext } from "react";
import styles from "../../styles/Home.module.css";
import PreviewCard from "example/components/Cards/previewCard";
import Layout from "example/containers/Layout";
import thumb2 from "../../public/images/home2.png";
import { SearchIcon } from "icons";

import { Button, Input, WindmillContext } from "@roketid/windmill-react-ui";

import {
	Chart,
	ArcElement,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import Link from "next/link";
import SkeletonCard from "example/components/Cards/SkeletonCard";
import { useRouter } from "next/router";
import { Oval } from "react-loader-spinner";
import Image from "next/image";
import callApi from "pages/api/CallApi";
import axios from "axios";
// const prevObj: any[] = [];

function Dashboard() {
	Chart.register(
		ArcElement,
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		Title,
		Tooltip,
		Legend
	);

	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const { mode } = useContext(WindmillContext);
	const [cardData, setCardData] = useState([]);
	const getAllCardsDetails = async () => {
		setIsLoading(true);
		const token = localStorage.getItem("token");
		try {
			let resp = await axios.get(`${process.env.BACKEND_ADDRESS}/getuserdata`, {
				headers: {
					Authorization: `Bearer ${token}`, // Include the token in the Authorization header
				},
			});
			if (resp.data) {
				setIsLoading(false);
				console.log(resp.data);
				setCardData(resp.data.result.collect_data);
			}
		} catch (error: any) {
			if (error.response.data.detail === "Access token not valid") {
				setIsLoading(false);
				router.push("/dashboard/login");
			} else {
				setIsLoading(false);
				console.error(error.response.data.detail);
			}
		}
		setIsLoading(false);
	};

	useEffect(() => {
		// Check if the user is authenticated (has a token)
		const token = localStorage.getItem("token");
		if (!token) {
			// Redirect to the login page if no token is found
			router.push("/dashboard/login");
		} else {
			getAllCardsDetails();
		}
	}, []);
	return (
		<Layout>
			{isLoading ? (
				<div className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-black bg-opacity-30">
					<Oval
						visible={true}
						height="80"
						width="80"
						color="#fff"
						ariaLabel="oval-loading"
						wrapperStyle={{}}
						wrapperClass=""
					/>
				</div>
			) : (
				<div>
					<div className="flex items-center justify-between">
						<div>
							<h1 className="font-serif-medium text-2xl dark:text-gray-200 mt-6">
								Dashboard
							</h1>
						</div>
						<Link
							href="dashboard/CreateApp
					"
							passHref={true}
						>
							<Button
								block
								className="mt-4"
								style={{ width: "150px" }}
							>
								CREATE APP
							</Button>
						</Link>
					</div>
					<hr
						style={{
							width: "100%",
							margin: "10px 0",
							border: "1px solid #ccc",
						}}
					/>

					<div className="flex justify-between items-center">
						<div>
							<h2
								className={
									mode === "dark"
										? `${styles.headingMainDark}`
										: `${styles.headingMain}`
								}
							>
								Recent Projects
							</h2>
						</div>
						<div>
							{cardData && cardData.length > 0 && (
								<div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
									<div className="absolute inset-y-0 flex items-center pl-2">
										<SearchIcon
											className="w-4 h-4"
											aria-hidden="true"
										/>
									</div>
									<Input
										className="pl-8 text-gray-700"
										placeholder="Search for projects"
										aria-label="Search"
									/>
								</div>
							)}
						</div>
					</div>
					{/* <!-- Cards --> */}

					<div
						className={
							cardData && cardData.length > 0
								? "w-full flex justify-around items-center gap-[20px] flex-wrap"
								: "w-full "
						}
					>
						{cardData && cardData.length > 0 ? (
							cardData.map((data: any, index) => {
								return (
									<PreviewCard
										key={index}
										imageUrl={thumb2} // Replace with your actual image URL
										title={data.appIdea}
										description={data.appFeatures}
										projectId={data.projectId}
									></PreviewCard>
								);
							})
						) : (
							<SkeletonCard />
						)}
					</div>
				</div>
			)}
		</Layout>
	);
}

export default Dashboard;
