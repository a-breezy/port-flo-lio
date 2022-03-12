import React from "react";

function Project({ dev, i }) {
	return (
		<div key={i}>
			<h2>{dev.name}</h2>
			<p>{dev.description}</p>
			<a href={dev.ghUrl}>Check out the repo here</a>
			<div>
				<img src={dev.photo} alt={dev.alt} className="mx-2" />
			</div>
		</div>
	);
}

export default Project;
