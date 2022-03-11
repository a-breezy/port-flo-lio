import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import devPhotos from "../../assets/Dev";

function Dev(props) {
	const { letsEat, moodRng, saveTheSteer, friendlyThoughts } = devPhotos;
	const devlist = [
		{
			name: "Let's Eat",
			description:
				"A web app that takes in user location, connects to the yelp api, and returns a random restaurant within a close radius for the user to go to.",
			alt: "Let's Eat homepage",
            ghUrl: "https://github.com/a-breezy/LetsEat",
			photo: letsEat,
		},
		{
			name: "MoodRng",
			description:
				"Mood tracker where users are able to input how they slept, what recent meals they had, their recent activities, and their mood. The output is a graph which allows the users to see how they feel over time and track what effected their mood.",
			alt: "MoodRng homepage",
            ghUrl: "https://github.com/a-breezy/MoodRng",
			photo: moodRng,
		},
        {
			name: "Save the Steer",
			description:
				"A progressive web app where users can add and subtract from their budget regardless of internet connectivity.",
			alt: "MoodRng homepage",
            ghUrl: "https://github.com/a-breezy/save-the-steer",
			photo: saveTheSteer,
		},
        {
			name: "Friendly Thoughts",
			description:
				"A social media app backend using MongoDB to preform CRUD operations to manage user, user thoughts, and reactions to thoughts.",
			alt: "Friendly Thoughts homepage",
            ghUrl: "https://github.com/a-breezy/friendly-thoughts",
			photo: friendlyThoughts,
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
                    <a href={dev.ghUrl} >Check out the repo here</a>
					<div>
						<img src={dev.photo} alt={dev.alt} className="mx-2" />
					</div>
				</div>
			))}
		</section>
	);
}

export default Dev;
