#!/bin/node
import React, { useState, useEffect } from "react";

function CurrencyList() {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    async function fetchPrice() {
      const response = await fetch(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );
      const data = await response.json();

      const bpiObject = data.bpi;
      const bpiArray = [];

      for (let key in bpiObject) {
        bpiArray.push(bpiObject[key]);
      }

      setPrices(bpiArray);
    }

    fetchPrice();
  }, []);

  return (
    <div>
      {prices.map((price, index) => {
        return (
          <p key={index}>
            1 BTC = {price.rate} {price.code}
          </p>
        );
      })}
    </div>
  );
}

export default CurrencyList;
