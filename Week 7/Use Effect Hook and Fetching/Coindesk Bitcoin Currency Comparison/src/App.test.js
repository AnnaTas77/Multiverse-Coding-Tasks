/** @jest-environment jsdom */
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App.js";
import CurrencyList from "./components/CurrencyList";

global.fetch = async () => ({
  ok: true,
  json: async () => ({
    time: {
      updated: "Apr 23, 2023 00:12:00 UTC",
      updatedISO: "2023-04-23T00:12:00+00:00",
      updateduk: "Apr 23, 2023 at 01:12 BST",
    },
    disclaimer:
      "This data was produced from the CoinDesk Bitcoin Price Index. Non-USD currency data converted using hourly conversion rate from openexchangerates.org",
    bpi: {
      USD: {
        code: "USD",
        rate: "55,000.0000",
        description: "United States Dollar",
        rate_float: 55000,
      },
      GBP: {
        code: "GBP",
        rate: "40,000.0000",
        description: "British Pound Sterling",
        rate_float: 40000,
      },
      EUR: {
        code: "EUR",
        rate: "50,000.0000",
        description: "Euro",
        rate_float: 50000,
      },
      // ...
    },
  }),
});

test("fetches price data on load", async () => {
  render(<App />);
  const priceElement = await screen.findByText("1 BTC = 55,000.0000 USD", {
    exact: false,
  });
  expect(priceElement).toBeTruthy();
});

test("renders the correct currency prices", async () => {
  render(<CurrencyList />);

  await waitFor(() => {
    const prices = screen.getAllByText(/1 BTC =/i);
    expect(prices).toHaveLength(3);
    expect(prices[0].textContent).toEqual("1 BTC = 55,000.0000 USD");
    expect(prices[1].textContent).toEqual("1 BTC = 40,000.0000 GBP");
    expect(prices[2].textContent).toEqual("1 BTC = 50,000.0000 EUR");
  });
});
