/** @jest-environment jsdom */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("Score is rendered in the UI", () => {
  render(<App />);

  expect(screen.getByText("Your score is 0")).toBeTruthy();
});

test("Clicking the button increments score", () => {
  render(<App />);

  expect(screen.getByText("Your score is 0")).toBeTruthy();

  fireEvent.click(screen.getByText("Click Me"));
  expect(screen.queryByText("Your score is 0")).toBeNull();
  expect(screen.getByText("Your score is 1")).toBeTruthy();

  fireEvent.click(screen.getByText("Click Me"));
  expect(screen.queryByText("Your score is 1")).toBeNull();
  expect(screen.getByText("Your score is 2")).toBeTruthy();
});
