/** @jest-environment jsdom */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Color from "./components/Color";
import App from "./App";

test("Color component renders with correct color", () => {
  render(<Color color="red" />);
  expect(screen.getByText("red")).toBeTruthy();

  render(<Color color="orange" />);
  expect(screen.getByText("orange")).toBeTruthy();
});

test("Color component is rendered in App", () => {
  render(<App />);

  expect(screen.getByText("red")).toBeTruthy();
  expect(screen.getByText("blue")).toBeTruthy();
  expect(screen.getByText("green")).toBeTruthy();
});

test("Clicking a color adds the `selected` className", () => {
  render(<App />);

  const redButton = screen.getByText("red");

  fireEvent.click(redButton);
  expect(redButton.classList.contains("selected")).toBeTruthy();

  const greenButton = screen.getByText("green");
  fireEvent.click(greenButton);
  expect(greenButton.classList.contains("selected")).toBeTruthy();
  expect(redButton.classList.contains("selected")).toBeFalsy();
});
