import React, { useEffect } from "react";
import "./_birthdayswiper.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../features/Userslice";

export default function App() {
	const users = useSelector((state) => state.fetchUsers);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);
	let curMonth = new Date().getMonth() + 1;
	let curDay = new Date().getDate();
	if (curMonth < 10) {
		curMonth = 0 + "" + curMonth;
	}
	if (curDay < 10) {
		curDay = 0 + "" + curDay;
	}
	let formatChechData = curMonth + "-" + curDay;
	return (
		<>
			{users.loading && (
				<p className="bg-fuchsia-700 w-2/4 h-24 flex justify-center items-center tracking-wider text-white text-xl rounded-xl">
					Loading
				</p>
			)}
			{!users.loading && users.error ? (
				<div className="bg-fuchsia-700 w-2/4 h-24 flex justify-center items-center tracking-wider text-white text-xl rounded-xl">
					Error
				</div>
			) : null}
			{!users.loading && users.users.length === 0 ? (
				<p className="bg-fuchsia-700 w-2/4 h-24 flex justify-center items-center tracking-wider text-white text-xl rounded-xl">
					Siyahıda istifadəçi yoxdur!
				</p>
			) : null}
			{!users.loading && users.users.length ? (
				<Swiper
					grabCursor={true}
					effect={"creative"}
					creativeEffect={{
						prev: {
							shadow: true,
							origin: "left center",
							translate: ["-5%", 0, -200],
							rotate: [0, 100, 0],
						},
						next: {
							origin: "right center",
							translate: ["5%", 0, -200],
							rotate: [0, -100, 0],
						},
					}}
					modules={[EffectCreative]}
					className="mySwiper"
				>
					{users.users.map((user, index) => (
						<>
							{user?.birthDay.slice(5) === formatChechData && (
								<SwiperSlide className="rounded-2xl bg-slate-900 relative">
									<div className="w-full pt-20 h-full border rounded-2xl border-slate-700 px-4 balloon">
										<p className="text-center text-3xl">Ad günün mübarək</p>
										<p className="text-center mt-4 text-3xl bg-white text-slate-900 py-3 rounded-xl">
											{user.name} 🎂
										</p>
										<p className="text-center mt-4 text-xl bg-white text-slate-900 py-3 rounded-xl">
											Bugün tort yeyeceyik {user.name}? 😆
										</p>
									</div>
								</SwiperSlide>
							)}
							{user?.birthDay.slice(5) !== formatChechData && (
								<SwiperSlide className="rounded-2xl bg-slate-900 relative">
									<div className="w-full pt-20 h-full border rounded-2xl border-slate-700 px-4 balloon">
										<p className="text-center text-3xl">
											Bugün tort yemeyeciyik 😏
										</p>
										<p className="text-center mt-8 text-xl bg-white text-slate-900 py-3 rounded-xl">
											Çünki bugün heç kimin ad günü deyil 😃
										</p>
									</div>
								</SwiperSlide>
							)}
						</>
					))}
				</Swiper>
			) : null}
		</>
	);
}
