import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import man from "../assets/man.png";
import woman from "../assets/woman.png";
const Detailuserinfo = () => {
	const pathname = useParams();
	const [user, setUser] = useState("");
	const [load, setLoad] = useState(true);
	useEffect(() => {
		axios
			.get(`https://633133d43ea4956cfb58ac8a.mockapi.io/users/${pathname.id}`)
			.then((resp) => {
				setUser(resp.data);
				setLoad(false);
			});
	}, [pathname.id]);
	let curFullYear = new Date().getFullYear();
	let curMonth = new Date().getMonth() + 1;
	let curDay = new Date().getDate();
	// console.log(curFullYear, curMonth, curDay);
	// console.log(
	// 	+user.birthDay?.slice(0, 4),
	// 	+user.birthDay?.slice(5, 7),
	// 	+user.birthDay?.slice(8, 10)
	// );
	let curAge = curFullYear - Number(user.birthDay?.slice(0, 4));
	if (
		curMonth < +user.birthDay?.slice(5, 7) ||
		(curMonth === +user.birthDay?.slice(5, 7) &&
			curDay < +user.birthDay?.slice(8, 10))
	) {
		curAge--;
	}
	return (
		<div className="h-[calc(100vh-9rem)] flex justify-between items-center px-24 bgImageAzerbaijanFlag">
			{load ? (
				<p className="w-4/6 h-[26rem] border-2 border-slate-900 flex justify-center items-center">
					Zəhmət olmasa gözləyin...
				</p>
			) : (
				<div className="flex">
					<div className="w-4/6 h-[26rem] border-2 border-slate-900 overflow-hidden">
						<p className="border-b border-slate-900 h-16 flex justify-center items-center bg-indigo-900 text-white tracking-wider">
							{user?.name} {user?.surName} haqqında məlumat
						</p>
						<p className="bg-white h-[8rem] py-2 px-4 text-xl leading-8">
							{user?.name} {user?.surName} {user?.dadName}{" "}
							{user?.gender === "Qadın" ? "qızı" : "oğlu"}{" "}
							{user?.birthDay.slice(8, 10)}
							{user?.birthDay.slice(5, 7) === "01" && " Yanvar "}
							{user?.birthDay.slice(5, 7) === "02" && " Fevral "}
							{user?.birthDay.slice(5, 7) === "03" && " Mart "}
							{user?.birthDay.slice(5, 7) === "04" && " Aprel "}
							{user?.birthDay.slice(5, 7) === "05" && " May "}
							{user?.birthDay.slice(5, 7) === "06" && " İyun "}
							{user?.birthDay.slice(5, 7) === "07" && " İyul "}
							{user?.birthDay.slice(5, 7) === "08" && " Avqust "}
							{user?.birthDay.slice(5, 7) === "09" && " Sentyabr "}
							{user?.birthDay.slice(5, 7) === "10" && " Oktyabr "}
							{user?.birthDay.slice(5, 7) === "11" && " Noyabr "}
							{user?.birthDay.slice(5, 7) === "12" && " Dekabr "}
							{user.birthDay?.slice(0, 4)} ildə {user.city} şəhərində anadan
							olmuşdur. Hal-hazırda {curAge} yaşı var. {user.education}{" "}
							təhsillidir.
						</p>
						<p className="border-b border-slate-900 h-32 py-2 px-4 bg-indigo-900 text-white tracking-wider flex flex-col">
							<span>Əlavə qeyd:</span>
							<span className="bg-white text-black mt-2 h-28 py-2 px-3">
								{user.detailInfo}
							</span>
						</p>
						<p className="border-b border-slate-900 h-24 py-2 px-4 bg-indigo-900 text-white tracking-wider flex items-center">
							<span className="block h-full w-36 rounded flex items-center text-center bg-slate-900 cursor-pointer">
								Əlaqə məlumatları:
							</span>
							<div className="ml-4 h-full w-full flex flex-col justify-between">
								<p className="py-1 px-2 rounded-lg text-sm bg-indigo-300 flex justify-between items-center cursor-pointer">
									<span className="text-black">Email:</span>{" "}
									<span className="bg-slate-900 py-1 px-2 rounded-lg text-white">
										{user?.email}
									</span>
								</p>
								<p className="py-1 px-2 rounded-lg text-sm bg-indigo-300 flex justify-between items-center cursor-pointer">
									<span className="text-black">Əlaqə nömrəsi:</span>{" "}
									<span className="bg-slate-900 py-1 px-2 rounded-lg text-white">
										{user?.phone}
									</span>
								</p>
							</div>
						</p>
					</div>
					<img
						className="w-2/6 object-cover"
						src={user.gender === "Kişi" ? man : woman}
						alt="pic"
					/>
				</div>
			)}
		</div>
	);
};

export default Detailuserinfo;
