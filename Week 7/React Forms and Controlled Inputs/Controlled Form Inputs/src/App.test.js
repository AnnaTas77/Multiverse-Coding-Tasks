/** @jest-environment jsdom */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("Typing the name input box changes name output", () => {
  render(<App />);
  const input = screen.getByLabelText("First name:");
  const userTyped = "Wendy";
  fireEvent.change(input, { target: { value: userTyped } });

  // expect the words to show below
  expect(screen.getByText("Your name is Wendy")).toBeTruthy();
});

test("Typing the age input box changes age output", () => {
  render(<App />);
  const input = screen.getByLabelText("Age:");
  const userTyped = "39";
  fireEvent.change(input, { target: { value: userTyped } });

  // expect the words to show below
  expect(screen.getByText("Your age is 39")).toBeTruthy();
});
