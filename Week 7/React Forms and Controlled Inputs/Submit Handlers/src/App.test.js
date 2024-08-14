/** @jest-environment jsdom */
import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import App from "./App";

test("Can add one name on submit", () => {
  render(<App />);
  const input = screen.getByLabelText("Name:");

  const userTyped = "Matthew";
  fireEvent.change(input, { target: { value: userTyped } });
  fireEvent.submit(form);

  // expect the name to show
  const nameList = document.getElementById("card");
  expect(within(nameList).getByText(userTyped)).toBeTruthy();
});

test("Can add one name on submit", () => {
  render(<App />);
  const input = screen.getByLabelText("Name:");

  const name1 = "Matthew";
  fireEvent.change(input, { target: { value: name1 } });
  fireEvent.submit(form);
  const name2 = "Jordan";
  fireEvent.change(input, { target: { value: name2 } });
  fireEvent.submit(form);

  // expect the name to show
  const nameList = document.getElementById("card");
  expect(within(nameList).getByText(name1)).toBeTruthy();
  expect(within(nameList).getByText(name2)).toBeTruthy();
});
