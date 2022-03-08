import React from "react";
// render: simulates DOM in Node, cleanup: removes components from DOM to save machine memory
import { render, cleanup } from "@testing-library/react";
// import extend-expect library from jest-dom
import "@testing-library/jest-dom/extend-expect";
import About from "..";

// after each test, prevent leftover memory from giving false results
afterEach(cleanup);

describe("About component", () => {
	// verify that component reders properly
	it("renders", () => {
		render(<About />);
	});

	it("matches snapshot DOM node structure", () => {
		// asFragment returns snapshot of About component
		const { asFragment } = render(<About />);
		// test whether fragment matches snapshot
		expect(asFragment()).toMatchSnapshot();
	});
});
