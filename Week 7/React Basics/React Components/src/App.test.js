import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";

import App from "./App";
import Title from "./components/Title";
import Content from "./components/Content";

describe("App tests", () => {
  test("App component - Renders Title components", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<App />);
    const appComponent = renderer.getRenderOutput();
    // Check that there is one Title component
    expect(appComponent.props.children[0]).toEqual(<Title />);
  });

  test("Contains hello world in h1", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<App />);
    const appComponent = renderer.getRenderOutput();
    // Check that there are two Content components
    expect(appComponent.props.children[1]).toEqual(<Content />);
    expect(appComponent.props.children[2]).toEqual(<Content />);
  });
});
