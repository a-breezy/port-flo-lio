import React from "react";

// const categories = [
// 	{
// 		name: "web dev",
// 		description:
// 			"Portfolio of web development showcasing Javascript, HTML, CSS, and Database Management skills",
// 	},
// 	{
// 		name: "photography",
// 		description:
// 			"Portfolio of photograghy showcasing film photography composition and development skills",
// 	},
// 	{
// 		name: "blog",
// 		description:
// 			"Blog writings related to developement, what I'm learning and growing with",
// 	},
// ];

function Nav({ pages, setPage }) {
	return (
		<nav>
			<ul className="flex-row">
				{/* <li className="mx-2">
						<a data-testid="about" href="#about">
							About Me
						</a>
					</li>
					<li>
						<span>Contact</span>
					</li> */}
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
