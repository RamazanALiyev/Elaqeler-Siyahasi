import React from "react";
import BirthdaySwiper from "../components/Swiper/BirthdaySwiper";
import { Helmet } from "react-helmet";
const Birthday = () => {
	return (
		<div className="h-[calc(100vh-9rem)] flex items-center justify-center birthday">
			<Helmet>
                <meta charSet="utf-8" />
                <title>Ad günləri</title>
            </Helmet>
			<BirthdaySwiper />
		</div>
	);
};

export default Birthday;
