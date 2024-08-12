import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import App from "./App";

describe("App component", () => {
  test("Contains hello world in a h2", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<App />);
    const appComponent = renderer.getRenderOutput();

    // get element by node type (h2)
    expect(appComponent.type).toBe("h2");

    // assert that text includes Hello World
    expect(appComponent.props.children).toEqual("Hello World");
  });
});
