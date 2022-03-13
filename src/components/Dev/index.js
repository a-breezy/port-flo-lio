import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";
import devPhotos from "../../assets/Dev";
import Project from "../Project";

function Dev(props) {
	const {
		letsEat,
		moodRng,
		saveTheSteer,
		friendlyThoughts,
		wordSquash,
		expertNoteTaker,
	} = devPhotos;
	const devlist = [
		{
			name: "Let's Eat",
			description:
				"A web app that takes in user location, connects to the yelp api, and returns a random restaurant within a close radius for the user to go to.",
			alt: "Let's Eat homepage",
			ghUrl: "https://github.com/a-breezy/LetsEat",
			deployedUrl: "https://a-breezy.github.io/LetsEat/",
			photo: letsEat,
		},
		{
			name: "MoodRng",
			description:
				"Mood tracker where users are able to input how they slept, what recent meals they had, their recent activities, and their mood. The output is a graph which allows the users to see how they feel over time and track what effected their mood.",
			alt: "MoodRng homepage",
			ghUrl: "https://github.com/a-breezy/MoodRng",
			deployedUrl: "https://moodrngwellnessapp.herokuapp.com/",
			photo: moodRng,
		},
		{
			name: "Save the Steer",
			description:
				"A progressive web app where users can add and subtract from their budget regardless of internet connectivity.",
			alt: "MoodRng homepage",
			ghUrl: "https://github.com/a-breezy/save-the-steer",
			deployedUrl: "https://quiet-river-39422.herokuapp.com/",
			photo: saveTheSteer,
		},
		{
			name: "Friendly Thoughts",
			description:
				"A social media app backend using MongoDB to preform CRUD operations to manage user, user thoughts, and reactions to thoughts.",
			alt: "Friendly Thoughts homepage",
			ghUrl: "https://github.com/a-breezy/friendly-thoughts",
			deployedUrl:
				"https://drive.google.com/file/d/16TMk1ylsomqypJ1trEfhofI053DPvML3/view",
			photo: friendlyThoughts,
		},
		{
			name: "Word Squash",
			description:
				"A wordpress-like blog where users create accounts and are able to comment on one another's posts.",
			alt: "Word Squash homepage",
			ghUrl: "https://github.com/a-breezy/wordsquash",
			deployedUrl: "https://stormy-ridge-45640.herokuapp.com/",
			photo: wordSquash,
		},
		{
			name: "Expert Note Taker",
			description:
				"A server that runs an app to save and delete notes created by the user.",
			alt: "Expert Note Taker homepage",
			ghUrl: "https://github.com/a-breezy/Expert-Note-Taker",
			deployedUrl: "",
			photo: expertNoteTaker,
		},
	];

	return (
		<section>
			<h2>Development Experience</h2>
			<br />
			{devlist.map((dev, i) => (
				<Project dev={dev} i={i} />
			))}
		</section>
	);
}

export default Dev;
