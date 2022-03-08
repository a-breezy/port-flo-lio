import React from "react";

const categories = [
	{
		name: "web dev",
		description:
			"Portfolio of web development showcasing Javascript, HTML, CSS, and Database Management skills",
	},
	{
		name: "photography",
		description:
			"Portfolio of photograghy showcasing film photography composition and development skills",
	},
	{
		name: "blog",
		description:
			"Blog writings related to developement, what I'm learning and growing with",
	},
];

function categorySelected(name) {
	console.log(`${name} clicked`);
}

function Nav() {
	return (
		<header>
			<h2>
				<a href="/">
					<span role="img" aria-label="camera">
						It'sa Me!
					</span>
					Here I am
				</a>
			</h2>
			<nav>
				<ul className="flex-row">
					<li className="mx-2">
						<a href="#about">About Me</a>
					</li>
					<li>
						<span>Contact</span>
					</li>
					{categories.map((category) => (
						<li className="mx-1" key={category.name}>
							<span onClick={() => categorySelected(category.name)}>
								{category.name}
							</span>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default Nav;
