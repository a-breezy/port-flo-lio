import React from "react";
import resume from "../../assets/a.wilkins.resume.pdf";

function Resume() {
	return (
		<div>
			<h2>Resume</h2>
			<a href={resume} height="100%" width="100%">
				View Resume Here
			</a>
			<p>
				Having previous experience in the hospitality industry my resume is
				limited to the{" "}
				<a href="https://bootcamp.cvn.columbia.edu/coding/">
					Columbia Full Stack Web Development Bootcamp
				</a>{" "}
				and what is contained within the porfolio
				<a href="../Dev/index">here.</a>
			</p>
		</div>
	);
}

export default Resume;
