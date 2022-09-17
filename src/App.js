import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Lists from "./Pages/Lists";
import PostList from './Pages/PostLists'
import Contact from "./Pages/Contact";
import Detailuserinfo from "./Pages/Detailuserinfo";
import Edituser from "./Pages/Edituser";
import Birthday from "./Pages/Birthday";
import { Toaster } from 'react-hot-toast';
function App() {
	return (
		<div className="App">
			<Navbar />
			<Toaster />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/lists" element={<Lists />} />
				<Route path="/createnewList" element={<PostList />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/birthday" element={<Birthday />} />
				<Route path="/lists/detail/:id" element={<Detailuserinfo />} />
				<Route path="/lists/edit/:id" element={<Edituser />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
