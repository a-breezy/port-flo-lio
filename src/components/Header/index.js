import React from "react";
import Nav from "../Nav";
import "./index.scss";

function Header({ pages, setPage }) {
	return (
		<header className="container">
			<div className="home-link">
				<h1>
					<a data-testid="link" href="/">
						AW
					</a>
				</h1>
				<h6>Ambrose Wilkinson</h6>
			</div>
			<div className="navbar">
				nav bar goes here
				<Nav pages={pages} setPage={setPage} />
			</div>
		</header>
	);
}

export default Header;
