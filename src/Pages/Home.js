import React from "react";
import { Helmet } from "react-helmet";
const Home = () => {
	return (
		<div className="h-[calc(100vh-20vh)] bgImageAzerbaijanFlag">
			<Helmet>
				<meta charSet="utf-8" />
				<title>Əlaqələr listəsi</title>
			</Helmet>
			<div className="w-[95%] mx-auto">Home</div>
		</div>
	);
};

export default Home;
