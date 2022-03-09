import React from "react";
// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import Dev from "./components/Dev";

function App() {
	return (
		<div>
			<Nav></Nav>
			<main>
				<Dev></Dev>
				<About></About>
			</main>
		</div>
	);
}

export default App;
