import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useLocation } from "react-router-dom";
import { GiHamburgerMenu, GiBoomerangCross } from "react-icons/gi";
const Navbar = ({ closeSidebar, openSidebar, sidebar}) => {
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
				<Link className="w-[25%] md:w-[5%] overflow-hidden" to="/">
					<img className="mt-1 w-[80px] object-cover" src={logo} alt="pic" />
				</Link>
				<nav
					className="hidden md:w-[40%] md:flex md:pl-3"
					aria-label="Breadcrumb"
				>
					<ol className="inline-flex flex-col items-center justify-center md:flex-row  space-x-1 md:space-x-3">
						<li className="inline-flex items-center">
							<Link
								to="/"
								className="inline-flex items-center text-sm text-white"
							>
								<svg
									className="w-4 h-4 mr-2"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
								</svg>
								Ana səhifə
							</Link>
						</li>
						{router.pathname === "/lists" ||
						router.pathname.includes("/lists/edit/") ||
						router.pathname.includes("/lists/detail/") ? (
							<li>
								<div className="flex items-center">
									<svg
										className="w-6 h-6 text-white"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
											clipRule="evenodd"
										></path>
									</svg>
									<Link to="/lists" className="ml-1 text-sm text-white">
										Siyahılar
									</Link>
								</div>
							</li>
						) : null}
						{router.pathname === "/createnewList" ? (
							<li>
								<div className="flex items-center">
									<svg
										className="w-6 h-6 text-white"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
											clipRule="evenodd"
										></path>
									</svg>
									<Link to="/createnewList" className="ml-1 text-sm text-white">
										Yeni əlaqənin yaradılması
									</Link>
								</div>
							</li>
						) : null}
						{router.pathname === "/birthday" ? (
							<li>
								<div className="flex items-center">
									<svg
										className="w-6 h-6 text-white"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
											clipRule="evenodd"
										></path>
									</svg>
									<Link to="/birthday" className="ml-1 text-sm text-white">
										Ad günləri
									</Link>
								</div>
							</li>
						) : null}
						{router.pathname.includes("/lists/edit/") ? (
							<li>
								<div className="flex items-center">
									<svg
										className="w-6 h-6 text-white"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
											clipRule="evenodd"
										></path>
									</svg>
									<span className="ml-1 text-sm text-white">
										Mövcud əlaqənin dəyişdirilməsi
									</span>
								</div>
							</li>
						) : null}
						{router.pathname.includes("/lists/detail/") ? (
							<li>
								<div className="flex items-center">
									<svg
										className="w-6 h-6 text-white"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
											clipRule="evenodd"
										></path>
									</svg>
									<span className="ml-1 text-sm  text-white">
										Mövcud əlaqənin haqqında məlumat
									</span>
								</div>
							</li>
						) : null}
					</ol>
				</nav>
				<ul className="hidden md:w-[45%] md:flex md:justify-center">
					<li className="cursor-pointer border-b border-transparent hover:border-b hover:border-indigo-600 transition duration-150 ease-out">
						<Link className="inline-block mx-5 px-4 py-2" to="/lists">
							Siyahılar
						</Link>
					</li>
					<li className="cursor-pointer border-b border-transparent hover:border-b hover:border-indigo-600 transition duration-150 ease-out">
						<Link className="inline-block mx-5 px-4 py-2" to="/createnewList">
							Siyahılar listəsinə əlavə et
						</Link>
					</li>
					<li className="cursor-pointer border-b border-transparent hover:border-b hover:border-indigo-600 transition duration-150 ease-out">
						<Link className="inline-block mx-5 px-4 py-2" to="/birthday">
							Ad günləri
						</Link>
					</li>
				</ul>
				{sidebar ? (
					<GiBoomerangCross
						onClick={closeSidebar}
						className="md:hidden text-2xl"
					/>
				) : (
					<GiHamburgerMenu
						onClick={openSidebar}
						className="md:hidden text-2xl"
					/>
				)}
			</div>
		</div>
	);
};
export default Navbar;
