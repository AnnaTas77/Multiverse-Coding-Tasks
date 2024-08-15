/** @jest-environment jsdom */
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import App from "./App";

const dogDataOld = [
  "The Boy Scouts and Girl Scouts both offer merit badges in dog care.",
  'Dogs have three eyelids. The third lid, called a nictitating membrane or "haw," keeps the eye lubricated and protected.',
  "The Chihuahua was named for the state in northwestern Mexico where they were discovered.",
  "Most vets recommend that female dogs don’t get pregnant until the third estrus.",
  "More than half of all U.S. presidents have owned dogs.",
];

const dogData = [
  {
    id: "1",
    text: "Wikipedia has a recording of a dog growling, because why not?",
  },
  {
    id: "2",
    text: "The Boy Scouts and Girl Scouts both offer merit badges in dog care.",
  },
  {
    id: "3",
    text: "Dogs have three eyelids. The third lid, called a nictitating membrane or 'haw,' keeps the eye lubricated and protected.",
  },
];

test("Dog facts are fetched and rendered upon page load.", async () => {
  // mock fetch call
  global.fetch = async () => ({
    json: async () => dogData,
  });

  render(<App />);

  await waitFor(() => {
    expect(
      screen.getByText(
        "Dogs have three eyelids. The third lid, called a nictitating membrane or 'haw,' keeps the eye lubricated and protected."
      )
    ).toBeTruthy();
  });
});
