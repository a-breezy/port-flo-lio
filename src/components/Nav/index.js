import React from "react";

function Nav({ pages, setPage }) {
	return (
		<nav>
			<ul className="flex-row">
				{pages.map((page, i) => (
					<li className="mx-1" key={page.name}>
						<span onClick={() => setPage(page.comp)}>{page.name}</span>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Nav;
