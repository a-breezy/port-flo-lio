/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

// cleanup memory after each test
afterEach(cleanup);

describe("Nav Component", () => {
	// make sure Nav renders
	it("renders", () => {
		render(<Nav />);
	});

	// snapshot of rendered Nav
	it("matches snapshot", () => {
		const { asFragment } = render(<Nav />);
		// compare fragment with expected
		expect(asFragment()).toMatchSnapshot();
	});
});

// test to see if camera emoji 📸 is visible in <h2>
describe("emoji is visible", () => {
	it("inserts emoji into h2", () => {
		// arrange
		const { getByLabelText } = render(<Nav />);
		// assert --> evaluate whether the emoji comes up
		// eslint-disable-next-line testing-library/prefer-screen-queries
		expect(getByLabelText("camera")).toHaveTextContent("📸");
	});
});

// test to make sure Nav links are visible
describe("links are visible", () => {
	it("inserts text into links", () => {
		// arrange
		const { getByTestId } = render(<Nav />);
		// assert
		expect(getByTestId("link")).toHaveTextContent("Here I am");
		expect(getByTestId("about")).toHaveTextContent("About Me");
	});
});
