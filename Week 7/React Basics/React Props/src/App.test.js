import React from "react";
import renderer from "react-test-renderer";
import Greeting from "./components/Greeting";

test('Greeting renders "My name is {props.name}" in an h3', () => {
  const { root: frankInstance } = renderer.create(
    <Greeting name="Frank" mood="happy" />
  );
  // assert that h5 includes 'My name is Frank'
  expect(frankInstance.findByType("h5").children.join("")).toBe(
    "Hello my name is Frank"
  );

  const { root: heatherInstance } = renderer.create(
    <Greeting name="Heather" moood="excited" />
  );
  // assert that h5 includes 'My name is Sally'
  expect(heatherInstance.findByType("h5").children.join("")).toBe(
    "Hello my name is Heather"
  );
});

test('Greeting renders "Today I am feeling {props.mood}" in a p', () => {
  const { root: frankInstance } = renderer.create(
    <Greeting name="Frank" mood="happy" />
  );
  // assert that p includes 'My name is Frank'
  expect(frankInstance.findByType("p").children.join("")).toBe(
    "Today I am feeling happy"
  );

  const { root: heatherInstance } = renderer.create(
    <Greeting name="Heather" mood="excited" />
  );
  // assert that p includes 'My name is Sally'
  expect(heatherInstance.findByType("p").children.join("")).toBe(
    "Today I am feeling excited"
  );
});
