import React from "react";

function Footer() {
	return (
		<footer>
			<div className="container App-footer">
				<div>
					<a href="https://github.com/a-breezy">
						<i className="fa-brands fa-github-square fa-2x"></i>
					</a>
					<a href="https://www.linkedin.com/in/ambrose-wilkinson/">
						<i className="fa-brands fa-linkedin fa-2x"></i>
					</a>
					<a href="https://twitter.com/a_breezy64">
						<i className="fa-brands fa-twitter fa-2x"></i>
					</a>
				</div>
				<div className="footer-bottom">
					<p className="text-xs-center">
						&copy;{new Date().getFullYear()} Ambrose.Wilkinson
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
