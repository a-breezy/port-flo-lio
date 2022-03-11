import React from "react";
import profile from "../../assets/About/polaroidProfile.JPG";
function About() {
	return (
		<section className="my-5">
			<h1 id="about">Who am I?</h1>
			<img
				src={profile}
				alt="profile of host"
				className="my-2"
				style={{ width: "70%" }}
				// onClick={() => toggleModal(image, i)}
				// key={image.name}
			/>
			<p>
				A junior MERN web developer that recently completed the Columbia
				Bootcamp through U2.
				<br /> Currently searching for an entry position to further guide my as
				I continue to learn about development and transition into a software
				engineering field.
			</p>
		</section>
	);
}

export default About;
