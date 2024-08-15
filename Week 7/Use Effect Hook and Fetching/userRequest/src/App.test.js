/** @jest-environment jsdom */
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

test("User name is rendered in the UI", () => {
  render(<App />);

  expect(screen.getByText("Joe", { exact: false })).toBeTruthy();
});

test("Clicking the button displays the JSON Placeholder name", async () => {
  // mock fetch call
  global.fetch = async () => ({
    json: async () => ({ name: "Leanne Graham" }),
  });

  render(<App />);

  expect(screen.getByText("Joe", { exact: false })).toBeTruthy();

  await fireEvent.click(screen.getByText("Get User"));
  await waitFor(() => {
    expect(screen.getByText("Leanne Graham", { exact: false })).toBeTruthy();
  });
});
