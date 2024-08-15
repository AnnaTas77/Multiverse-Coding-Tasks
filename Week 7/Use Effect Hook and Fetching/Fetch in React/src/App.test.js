/** @jest-environment jsdom */
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

test("App renders", () => {
  render(<App />);
  expect(screen.getByText("Show Me the Pokemon!")).toBeTruthy();
});

test("First Pokemon text fetched and added to the button element", async () => {
  // mock fetch call
  global.fetch = async () => ({
    json: async () => ({
      results: [{ name: "bulbasaur" }, { name: "Charmander" }],
    }),
  });

  render(<App />);
  fireEvent.click(screen.getByText("Show Me the Pokemon!"));
  await waitFor(() => {
    expect(screen.getByText("bulbasaur")).toBeTruthy();
  });
});
