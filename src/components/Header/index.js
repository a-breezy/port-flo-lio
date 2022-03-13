import React from "react";
import Nav from "../Nav";

function Header({ pages, setPage }) {
	return (
		<header>
			<h1>
				<a data-testid="link" href="/">
					Ambrose Wilkinson
					<br />
					MERN Fullstack Web Developer
				</a>
			</h1>
			<Nav pages={pages} setPage={setPage} />
		</header>
	);
}

export default Header;
