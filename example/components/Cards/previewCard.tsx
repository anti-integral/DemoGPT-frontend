import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import star from "../../../public/images/star (2).png";
import star2 from "../../../public/images/starr.png";
import { SunIcon } from "icons";
import { WindmillContext } from "@roketid/windmill-react-ui";
import styles from "../../../styles/Home.module.css";
import router from "next/router";
interface PreviewCardProps {
	imageUrl: any;
	title: string;
	description: string;
}

function PreviewCard({ imageUrl, title, description }: PreviewCardProps) {
	const { mode, toggleMode } = useContext(WindmillContext);
	const [formData, setFormData] = useState({
		appIdea: "",
		appFeatures: "",
		appLook: "",
		image: "",
	});
	const goToEditPage = () => {
		router.push({
			pathname: "/dashboard/Preview",
			query: { data: JSON.stringify(formData) },
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
		<div onClick={goToEditPage}>
			<div className={styles.cardContainer}>
				<div className={styles.cardImg}>
					<div>
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
						<p className={styles.cardDesc}>{description}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PreviewCard;
