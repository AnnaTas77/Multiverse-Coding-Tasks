/** @jest-environment jsdom */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./components/Pagination";

const items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
  { id: 4, name: "Item 4" },
  { id: 5, name: "Item 5" },
];

test("renders the correct number of items on the page", () => {
  render(<Pagination items={items} pageSize={2} />);
  const pageItems = screen.getAllByRole("listitem");
  expect(pageItems).toHaveLength(2);
});

test("renders the correct items on each page", () => {
  render(<Pagination items={items} pageSize={2} />);
  const buttons = screen.getAllByRole("button");
  const page1Items = screen.getAllByRole("listitem")[0].textContent;
  fireEvent.click(buttons[1]);
  console.log(page1Items);
  const page2Items = screen.getAllByRole("listitem")[0].textContent;
  fireEvent.click(buttons[2]);
  console.log(page2Items);
  const page3Items = screen.getAllByRole("listitem")[0].textContent;
  console.log(page3Items);

  expect(page1Items).toEqual(items[0].name);
  expect(page2Items).toEqual(items[2].name);
  expect(page3Items).toEqual(items[4].name);
});
