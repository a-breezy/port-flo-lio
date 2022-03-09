import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import photo from "../../assets/Dev/letsEat_homepage.png";

function Dev(props) {
	const currentCategory = {
		name: "web dev",
		description:
			"Portfolio of web development showcasing Javascript, HTML, CSS, and Database Management skills",
	};
	return (
		<section>
			<h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
			<p>{currentCategory.name}</p>
			<div>
				<img
					src={photo}
					alt="Let's Eat Homepage"
					className="img-thumbnail mx-1"
				/>
			</div>
		</section>
	);
}

export default Dev;
