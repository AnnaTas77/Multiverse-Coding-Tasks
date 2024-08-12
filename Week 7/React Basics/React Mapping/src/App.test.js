import React from "react";
import renderer from "react-test-renderer";
import App from "./App";
import Car from "./components/Car";

test("Car renders {brand} in h5 and {color} in p", () => {
  const { root: teslaInstance } = renderer.create(
    <Car data={{ brand: "Tesla", color: "Red" }} />
  );
  expect(teslaInstance.findByType("h5").children.join("")).toBe("Tesla");
  expect(teslaInstance.findByType("p").children.join("")).toBe("Red");

  const { root: toyotaInstance } = renderer.create(
    <Car data={{ brand: "Toyota", color: "White" }} />
  );
  expect(toyotaInstance.findByType("h5").children.join("")).toBe("Toyota");
  expect(toyotaInstance.findByType("p").children.join("")).toBe("White");
});

test("App component - renders 4 car components", () => {
  const component = renderer.create(<App />);
  const instance = component.root;
  // expect component to be rendered in App 4 times
  expect(instance.findAllByType(Car).length).toBe(4);
});
