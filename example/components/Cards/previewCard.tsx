import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import star from "../../../public/images/star (2).png";
import star2 from "../../../public/images/starr.png";
import { SunIcon } from "icons";
import { WindmillContext } from "@roketid/windmill-react-ui";
import styles from "../../../styles/Home.module.css";
import router from "next/router";
import TruncatedString from "../SliceString/TruncatedString";
interface PreviewCardProps {
	imageUrl: any;
	title: string;
	description: string;
	projectId: string;
}

function PreviewCard({
	imageUrl,
	title,
	description,
	projectId,
}: PreviewCardProps) {
	const { mode, toggleMode } = useContext(WindmillContext);
	const [formData, setFormData] = useState({
		appIdea: "",
		appFeatures: "",
		appLook: "",
		image: "",
	});
	const goToEditPage = (id: any) => {
		router.push({
			pathname: "/dashboard/EditPage",
			query: { pId: id },
		});
	};
	useEffect(() => {
		setFormData({
			...formData,
			appIdea: title,
			appFeatures: description,
			appLook: "",
			image: "",
		});
	}, []);
	return (
		<div>
			<div className={styles.cardContainer}>
				<div className={styles.cardImg}>
					<div onClick={() => goToEditPage(Number(projectId))}>
						{" "}
						<Image
							src={imageUrl}
							alt="Card Image"
							width={500} // Adjust the width based on your design
							height={300} // Adjust the height based on your design
							layout="responsive"
							objectFit="cover"
							className="rounded-none" // Remove rounded corners
						/>
					</div>
					<div>
						<p
							className={
								mode === "dark" ? styles.cardTitleDark : styles.cardTitle
							}
						>
							{title}
						</p>
						<p className={styles.cardDesc}>
							{
								<TruncatedString
									text={description}
									maxLength={110}
								/>
							}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PreviewCard;
