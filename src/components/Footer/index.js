import React from "react";
import "./index.scss";

function Footer() {
	return (
		<footer className="App-footer">
			<div className="container">
				<section className="copy-right flex-1">
					<p className="">Ambrose.Wilkinson &copy;{new Date().getFullYear()}</p>
				</section>
				<section className="social-media flex-2">
					<a href="https://github.com/a-breezy">
						<i className="fa-brands fa-github-square fa-2x"></i>
					</a>
					<a href="https://www.linkedin.com/in/ambrose-wilkinson/">
						<i className="fa-brands fa-linkedin fa-2x"></i>
					</a>
					<a href="https://twitter.com/a_breezy64">
						<i className="fa-brands fa-twitter fa-2x"></i>
					</a>
				</section>
			</div>
		</footer>
	);
}

export default Footer;
