/** @jest-environment jsdom */
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("Renders random Pokemon on page load", async () => {
  // mock fetch call
  global.fetch = async () => ({
    json: async () => ({
      results: [
        { name: "bulbasaur" },
        { name: "charmander" },
        { name: "pikachu" },
      ],
    }),
  });

  render(<App />);
  await waitFor(() => {
    expect(screen.getByText("bulbasaur")).toBeTruthy();
    expect(screen.getByText("charmander")).toBeTruthy();
    expect(screen.getByText("pikachu")).toBeTruthy();
  });
});
