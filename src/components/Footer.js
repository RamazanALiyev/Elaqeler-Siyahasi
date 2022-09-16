import React from "react";
import logo from "../assets/logo.png";
import { useLocation } from "react-router-dom";

const Footer = () => {
	const router = useLocation();
	return (
		<div
			className={`${
				router.pathname.slice(0, 12) === "/lists/edit/"
					? "bg-yellow-900"
					: "bg-slate-900"
			} h-12 px-8 text-white flex justify-between items-center overflow-hidden `}
		>
			<img className="mt-2 object-cover w-[80px] h-full" src={logo} alt="pic" />
			<p>Bütün hüquqlar qorunur!</p>
		</div>
	);
};

export default Footer;
