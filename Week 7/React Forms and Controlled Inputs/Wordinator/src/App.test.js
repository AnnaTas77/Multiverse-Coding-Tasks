/** @jest-environment jsdom */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("Color Buttons change color of words", () => {
  render(<App />);
  fireEvent.click(screen.getByText("red"));

  const styleRed = window.getComputedStyle(screen.getByRole("note"));
  expect(styleRed.color).toBe("red");

  fireEvent.click(screen.getByText("blue"));

  const styleBlue = window.getComputedStyle(screen.getByRole("note"));
  expect(styleBlue.color).toBe("blue");
});

test("Typing the input box changes words shown below", () => {
  render(<App />);
  const input = screen.getByLabelText("words");
  const userTyped = "my words";
  fireEvent.change(input, { target: { value: userTyped } });

  // expect the words to show below
  expect(screen.getByText(userTyped)).toBeTruthy();
});

test("Clicking uppercase button should uppercase words below", () => {
  render(<App />);
  // simulate typing in text box
  const input = screen.getByLabelText("words");
  const userTyped = "these words should be uppercase";
  fireEvent.change(input, { target: { value: userTyped } });

  // simulate clicking uppercase
  fireEvent.click(screen.getByText("UPPERCASE"));

  // expect the words to show uppercased
  expect(screen.getByText(userTyped.toUpperCase())).toBeTruthy();
});
