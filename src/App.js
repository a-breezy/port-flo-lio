import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import Dev from "./components/Dev";
// import Contact from "./components/Contact";

function App() {
	const pages = [
		{ name: "About", comp: <About /> },
		{ name: "Dev", comp: <Dev /> },
		// { name: "Photography", comp: <Photography />}
		// { name: "Blog", comp: <Blog />}
		// { name:"Contact", comp: <Contact />}
	];

	const [page, setPage] = useState(pages[0].comp);

	return (
		<div>
			<Nav pages={pages} setPage={setPage}></Nav>
			<main>
				{page}
				<button
					onClick={() => {
						setPage(pages[1].comp);
					}}
				>
					{pages[1].name}
				</button>
			</main>
		</div>
	);
}

export default App;
