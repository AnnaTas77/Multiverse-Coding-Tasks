/** @jest-environment jsdom */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Animal from "./components/Animal";
import App from "./App";

test("Animal and info rendered in the UI", () => {
  const info = {
    name: "Giraffe",
    funFact:
      "Giraffes have extremely long necks, which help them to reach leaves and other food sources high up in trees.",
    emoji: "🦒",
  };
  render(<Animal data={info} />);
  expect(screen.getByText("Giraffe 🦒")).toBeTruthy();
  expect(
    screen.getByText(
      "Fun Fact: Giraffes have extremely long necks, which help them to reach leaves and other food sources high up in trees."
    )
  ).toBeTruthy();
});

test("Clicking the button increments animals", () => {
  render(<App />);

  expect(screen.getByText("Elephant 🐘")).toBeTruthy();

  fireEvent.click(screen.getByText("Next Animal"));
  expect(screen.queryByText("Elephant 🐘")).toBeNull();
  expect(screen.getByText("Giraffe 🦒")).toBeTruthy();

  fireEvent.click(screen.getByText("Next Animal"));
  expect(screen.queryByText("Giraffe 🦒")).toBeNull();
  expect(screen.getByText("Kangaroo 🦘")).toBeTruthy();

  fireEvent.click(screen.getByText("Next Animal"));
  expect(screen.queryByText("Kangaroo 🦘")).toBeNull();
  expect(screen.getByText("Penguin 🐧")).toBeTruthy();

  fireEvent.click(screen.getByText("Next Animal"));
  expect(screen.queryByText("Penguin 🐧")).toBeNull();
  expect(screen.getByText("Sloth 🦥")).toBeTruthy();

  fireEvent.click(screen.getByText("Next Animal"));
  expect(screen.queryByText("Sloth 🦥")).toBeNull();
  expect(screen.getByText("Elephant 🐘")).toBeTruthy();
});
