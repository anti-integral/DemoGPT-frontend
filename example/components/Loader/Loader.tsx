import Image from "next/image";
import styles from "./Loader.module.css";
import robo from "../../../public/assets/img/robo.gif";
import ContinueText from "./ContinueText";

function Loader() {
	return (
		<div>
			{/* <div className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-black bg-opacity-30">
				<div className="bg-white border py-2 px-5 rounded-lg flex items-center flex-col">
					<div className={`${styles.LoaderDots} block relative w-20 h-5 mt-2`}>
						<div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
						<div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
						<div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
						<div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
					</div>
					<div className="text-gray-500 text-xs font-light mt-2 text-center">
						Please wait...
					</div>
				</div>
			</div> */}
			<div className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-white ">
				<div>
					<Image
						src={robo}
						height={200}
						width={200}
						objectFit="cover"
						alt=""
					/>
					<ContinueText />
				</div>
			</div>
		</div>
	);
}

export default Loader;
