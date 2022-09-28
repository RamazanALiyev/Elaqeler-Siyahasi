import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebar, closeSidebar }) => {
	return (
		<div
			className={
				!sidebar
					? `translate-x-full h-[calc(100vh-10vh)] w-full fixed top-[10vh] bottom-0 bg-slate-800 transition duration-150 ease-out z-10`
					: `translate-x-0 h-[calc(100vh-10vh)] w-full fixed top-[10vh] bottom-0 bg-slate-800 transition duration-150 ease-out z-10`
			}
		>
			<ul>
				<li onClick={closeSidebar}>
					<Link
						className="inline-block w-full h-20 flex justify-center items-center border-t border-b border-white text-white"
						to="/lists"
					>
						Siyahılar
					</Link>
				</li>
				<li onClick={closeSidebar}>
					<Link
						className="inline-block w-full h-20 flex justify-center items-center border-b border-white text-white"
						to="/createnewList"
					>
						Siyahılar listəsinə əlavə et
					</Link>
				</li>
				<li onClick={closeSidebar}>
					<Link
						className="inline-block w-full h-20 flex justify-center items-center border-b border-white text-white"
						to="/birthday"
					>
						Ad günləri
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
