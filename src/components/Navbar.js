import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useLocation } from "react-router-dom";

const Navbar = () => {
	const router = useLocation();
	return (
		<div
			className={`${
				router.pathname.slice(0, 12) === "/lists/edit/" ? "bg-yellow-900" : "bg-slate-900"
			} h-24 px-8 text-white flex justify-between items-center`}
		>
			<Link className="h-full overflow-hidden" to="/">
				<img
					className="mt-2 object-cover w-[180px] h-full"
					src={logo}
					alt="pic"
				/>
			</Link>
			<ul className="flex">
				<li className="cursor-pointer border-b border-transparent hover:border-b hover:border-indigo-600 transition duration-150 ease-out">
					<Link className="inline-block mx-5 px-4 py-2" to="/lists">Siyahılar</Link>
				</li>
				<li className="cursor-pointer border-b border-transparent hover:border-b hover:border-indigo-600 transition duration-150 ease-out">
					<Link className="inline-block mx-5 px-4 py-2" to="/createnewList">Siyahılar listəsinə əlavə et</Link>
				</li>
			</ul>
		</div>
	);
};
export default Navbar;
