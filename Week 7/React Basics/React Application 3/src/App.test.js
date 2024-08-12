import React from "react";
import renderer from "react-test-renderer";
import App from "./App";
import Animal from "./components/Animal";

test("Animal renders {name} in h1 and {species} in h2", () => {
  const { root: monkeyInstance } = renderer.create(
    <Animal animal={{ name: "Zeus", species: "monkey" }} />
  );
  // assert that h1 includes 'Zeus'
  expect(monkeyInstance.findByType("h1").children.join("")).toBe("Zeus");
  // assert that h2 includes 'monkey'
  expect(monkeyInstance.findByType("h2").children.join("")).toBe("monkey");

  const { root: mouseInstance } = renderer.create(
    <Animal animal={{ name: "Little Fieldmouse", species: "mouse" }} />
  );
  // assert that h1 includes 'Little Fieldmouse'
  expect(mouseInstance.findByType("h1").children.join("")).toBe(
    "Little Fieldmouse"
  );
  // assert that h2 includes 'mouse'
  expect(mouseInstance.findByType("h2").children.join("")).toBe("mouse");
});

test("App component - Renders Welcome and Body components", () => {
  const component = renderer.create(<App />);
  const instance = component.root;

  // expect component to be rendered in App 3 times
  expect(instance.findAllByType(Animal).length).toBe(3);
});
