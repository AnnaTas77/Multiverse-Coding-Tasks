/** @jest-environment jsdom */
import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import App from "./App";
import Creature from "./components/Creature";

test("App: Creature names should be displayed", () => {
  render(<App />);

  // expect the Unicorn to show
  expect(screen.getByText("Unicorn")).toBeTruthy();
  expect(screen.getByText("Centaur")).toBeTruthy();
});

test("Creature: Creature names should be displayed", () => {
  render(<Creature creature={{ name: "Pixy", isMagical: true }} />);

  const pixyDiv = screen.getByText("Pixy");
  // expect the Pixy to show
  expect(pixyDiv).toBeTruthy();

  expect(pixyDiv.classList.contains("magical")).toEqual(true);
});

test("Submit handler adds creatures to the list", () => {
  render(<App />);
  const input = screen.getByLabelText("name");
  const checkbox = screen.getByLabelText("magical");
  const form = screen.getByLabelText("form");

  const userTyped = "Minotaur";
  fireEvent.change(input, { target: { value: userTyped } });
  fireEvent.submit(form);

  // expect the name to show
  const creaturesList = document.getElementById("creatures");
  expect(within(creaturesList).getByText(userTyped)).toBeTruthy();
});
