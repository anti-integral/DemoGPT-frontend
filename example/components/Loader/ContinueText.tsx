import React from "react";
import { TypeAnimation } from "react-type-animation";

interface MyComponentProps {}

const ContinueText: React.FC<MyComponentProps> = () => {
	return (
		<div style={{ display: "flex" }}>
			<h1
				style={{
					fontSize: "2em",
					display: "inline-block",
					fontWeight: "500",
					fontFamily: "arial",
				}}
			>
				<span className="text-purple-600"></span>
				<TypeAnimation
					sequence={[
						// Same substring at the start will only be typed out once, initially
						"Planting the Seeds...",
						2000, // wait 1s before replacing "Mice" with "Hamsters"
						"Watering the Plants...",
						2000,
						"Sunshine and Care...",
						2000,
						"Watching for Sprouts...",
						2000,
						"Tending to the Garden...",
						2000,
						"Blooming Beauty",
						2000,
					]}
					wrapper="span"
					speed={30}
					// style={{ fontFamily: 'arial', fontWeight: "900",fontSize: '3em', display: 'inline-block' }}
					repeat={Infinity}
				/>
			</h1>
		</div>
	);
};

export default ContinueText;
