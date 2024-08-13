/** @jest-environment jsdom */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UserStatus from "./components/UserStatus";

test("Logout button present when user is logged in", () => {
  const user = { username: "Alice", isLoggedIn: true };
  render(<UserStatus data={user} />);
  expect(screen.getByText("Logout")).toBeTruthy();
});

test("Username and logged in present when logged in", () => {
  const user = { username: "Alice", isLoggedIn: true };
  render(<UserStatus data={user} />);
  expect(screen.getByText("Alice is currently logged in")).toBeTruthy();
});

test("Clicking the button changes message", () => {
  const user = { username: "Alice", isLoggedIn: true };
  render(<UserStatus data={user} />);

  expect(screen.getByText("Logout")).toBeTruthy();

  fireEvent.click(screen.getByText("Logout"));
  expect(screen.queryByText("Logout")).toBeNull();
  expect(screen.getByText("Login")).toBeTruthy();

  fireEvent.click(screen.getByText("Login"));
  expect(screen.queryByText("Login")).toBeNull();
  expect(screen.getByText("Logout")).toBeTruthy();
});

test("Login button present when user is logged out", () => {
  const user = { username: "Bob", isLoggedIn: false };
  render(<UserStatus data={user} />);
  expect(screen.getByText("Login")).toBeTruthy();
});

test("Username and logged out present when logged out", () => {
  const user = { username: "Bob", isLoggedIn: false };
  render(<UserStatus data={user} />);
  expect(screen.getByText("Bob is not logged in")).toBeTruthy();
});
