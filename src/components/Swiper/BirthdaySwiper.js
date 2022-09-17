import React from "react";
import "./_birthdayswiper.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { EffectCreative } from "swiper";

export default function App() {
	return (
		<>
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
				<SwiperSlide className="rounded-2xl bg-slate-900 relative">
					<div className="w-full pt-20 h-full border rounded-2xl border-slate-700 px-4 balloon">
						<p className="text-center text-3xl">Ad günün mübarək</p>
						<p className="text-center mt-4 text-3xl bg-white text-slate-900 py-3 rounded-xl">Ramazan</p>
					</div>
				</SwiperSlide>
				<SwiperSlide className="rounded-2xl bg-slate-900 relative">
					<div className="w-full pt-20 h-full border rounded-2xl border-slate-700 px-4 balloon">
						<p className="text-center text-3xl">Ad günün mübarək</p>
						<p className="text-center mt-4 text-3xl bg-white text-slate-900 py-3 rounded-xl">Ramazan</p>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
