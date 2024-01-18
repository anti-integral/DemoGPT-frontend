import React, { useState } from "react";

interface TruncatedStringProps {
	text: string;
	maxLength: number;
}

const TruncatedString: React.FC<TruncatedStringProps> = ({
	text,
	maxLength,
}) => {
	const [isTruncated, setIsTruncated] = useState(true);

	const toggleTruncate = () => {
		setIsTruncated(!isTruncated);
	};

	const truncatedText = isTruncated ? text.slice(0, maxLength) + "..." : text;

	return (
		<div>
			<p>{truncatedText}</p>
			{text.length > maxLength && (
				<button onClick={toggleTruncate}>
					{isTruncated ? "Show More" : "Show Less"}
				</button>
			)}
		</div>
	);
};

export default TruncatedString;
