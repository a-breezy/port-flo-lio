import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import devPhotos from "../../assets/Dev";

function Dev(props) {
	const { letsEat, moodRng } = devPhotos;
	const devlist = [
		{
			name: "Let's Eat",
			description:
				"A web app that takes in user location, connects to the yelp api, and returns a random restaurant within a close radius for the user to go to.",
			photo: letsEat,
		},
		{
			name: "MoodRng",
			description:
				"Mood tracker where users are able to input how they slept, what recent meals they had, their recent activities, and their mood. The output is a graph which allows the users to see how they feel over time and track what effected their mood.",
			photo: moodRng,
		},
	];

	return (
		<section>
			<h1>Development Experience</h1>
			<br />
			{devlist.map((dev, i) => (
				<div key={i}>
					<h2>{capitalizeFirstLetter(dev.name)}</h2>
					<p>{dev.description}</p>
					<div>
						<img
							src={dev.photo}
							alt={dev.name}
							className="img-thumbnail mx-1"
						/>
					</div>
				</div>
			))}
		</section>
	);
}

export default Dev;
