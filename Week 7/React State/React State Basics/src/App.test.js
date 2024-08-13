/** @jest-environment jsdom */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./components/Button";

test("Score is rendered in the UI", () => {
  render(<Button />);
  expect(screen.getByText("Clicked 0 times")).toBeTruthy();
});

test("Clicking the button increments count", () => {
  render(<Button />);

  expect(screen.getByText("Clicked 0 times")).toBeTruthy();

  fireEvent.click(screen.getByText("Click Me"));
  expect(screen.queryByText("Clicked 0 times")).toBeNull();
  expect(screen.getByText("Clicked 1 times")).toBeTruthy();

  fireEvent.click(screen.getByText("Click Me"));
  expect(screen.queryByText("Clicked 1 times")).toBeNull();
  expect(screen.getByText("Clicked 2 times")).toBeTruthy();
});
