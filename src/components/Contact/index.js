import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
	const [errorMessage, setErrorMessage] = useState("");
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});
	const { name, email, message } = formState;

	function handleChange(e) {
		if (e.target.name === "email") {
			const isValid = validateEmail(e.target.value);
			console.log(isValid);

			if (!isValid) {
				setErrorMessage("Your email is invalid.");
			} else {
				if (!e.target.value.length) {
					setErrorMessage(`${e.target.name} is required.`);
				} else {
					setErrorMessage("");
				}
			}
		}
		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
		console.log("errorMessage", errorMessage);
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(formState);
	}

	return (
		<section>
			<h1 data-testid="h1tag">Contact Me</h1>
			<form id="contact-form" onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Name: </label>
					<br />
					<input
						type="text"
						defaultValue={name}
						onBlur={handleChange}
						name="name"
					/>
				</div>
				<div>
					<label htmlFor="email">Email address: </label><br />
					<input
						type="email"
						defaultValue={email}
						name="email"
						onBlur={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="message">Message:</label><br />
					<textarea
						name="message"
						defaultValue={message}
						onBlur={handleChange}
						rows="5"
					/>
				</div>
				{errorMessage && (
					<div>
						<p className="error-text">{errorMessage}</p>
					</div>
				)}
				<button data-testid="submitButton" type="submit">
					Submit
				</button>

				<br />
				<p>
					Or reach me at{" "}
					<a href="mailto:ambrose.wilkins@gmail.com">
						ambrose.wilkins@gmail.com
					</a>
				</p>
			</form>
		</section>
	);
}

export default ContactForm;
