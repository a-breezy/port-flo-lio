import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Dev from "./components/Dev";
// import Photography from "./components/Photography";
// import Blog from "./components/Blog";
import Contact from "./components/Contact";
// import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
	const pages = [
		{ name: "About", comp: <About /> },
		{ name: "Dev", comp: <Dev /> },
		// { name: "Photography", comp: <Photography />}
		// { name: "Blog", comp: <Blog />}
		{ name: "Contact", comp: <Contact /> },
		// { name:"Resume", comp: <Resume />}
	];

	const [page, setPage] = useState(pages[0].comp);

	return (
		<div>
			<Header pages={pages} setPage={setPage} />
			<main>{page}</main>
			<Footer />
		</div>
	);
}

export default App;
