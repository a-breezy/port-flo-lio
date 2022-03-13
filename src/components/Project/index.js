import React, { useState } from "react";

function Project({ dev, i }) {
	// if project has deployedUrl create it, otherwise leave blank
	// const [hasDeplyoedUrl, setHasDeployedUrl] = useState(true);

	// const toggleDeployedUrl = (project, i) => {

	// }

	return (
		<div key={i}>
			<h2>{dev.name}</h2>
			<div>
				<img src={dev.photo} alt={dev.alt} className="mx-2" />
			</div>
			<p>{dev.description}</p>
			<a href={dev.ghUrl}>Check out the repo here</a>
			<br />
			<a href={dev.deployedUrl}>Check out the deployed app here</a>
		</div>
	);
}

export default Project;
