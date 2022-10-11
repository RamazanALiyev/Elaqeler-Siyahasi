import React from "react";
import logo from "../assets/logo.png";
import { useLocation, Link } from "react-router-dom";

const Footer = () => {
	const router = useLocation();
	return (
		<div
			className={`${
				router.pathname.slice(0, 12) === "/lists/edit/"
					? "bg-yellow-900"
					: "bg-slate-900"
			} text-white h-[10vh] flex items-center`}
		>
			<div className="flex justify-between items-center w-[95%] mx-auto">
				<Link className="w-[25%] md:w-[5%] h-full overflow-hidden" to="/">
					<img className="mt-1 w-[80px] object-cover h-full" src={logo} alt="pic" />
				</Link>
				<p><a href="https://ramazanaliyev.netlify.app/" className="mr-12">Ramazan Aliyev</a><span>Bütün hüquqlar qorunur!</span></p>
			</div>
		</div>
	);
};

export default Footer;
