const wallet = require("./objects");

describe("wallet", () => {
  it("has its original balance", () => {
    expect(wallet).toHaveProperty("balance", 9.52);
  });
});

describe("wallet.hasCash()", () => {
  it("is a function", () => {
    expect(typeof wallet.hasCash).toBe("function");
  });

  it("has no parameters", () => {
    expect(wallet.hasCash).toHaveLength(0);
  });

  it("uses the `this` keyword", () => {
    const otherWallet = { balance: 0 };

    // Calling the method on a separate object with a different balance tests
    // that the `this` keyword was used.
    const hasCash = wallet.hasCash.call(otherWallet);
    expect(hasCash).toBe(false);
  });

  it("returns `true` if there is cash", () => {
    const hasCash = wallet.hasCash();
    expect(hasCash).toBe(true);
  });

  it("returns `false` if there is no cash", () => {
    // Creating a separate object ensures that we don't mutate the original
    // object by reassigning its `balance` property.
    const otherWallet = { balance: 0 };
    const hasCash = wallet.hasCash.call(otherWallet);
    expect(hasCash).toBe(false);
  });
});

describe("wallet.pay()", () => {
  it("is a function", () => {
    expect(typeof wallet.pay).toBe("function");
  });

  it("has one parameter", () => {
    expect(wallet.pay).toHaveLength(1);
  });

  it("uses the `this` keyword", () => {
    const otherWallet = { balance: 7.68 };

    // Calling the method on a separate object with a different balance tests
    // that the `this` keyword was used.
    const isPaymentSuccessful = wallet.pay.call(otherWallet, 5.22);
    expect(isPaymentSuccessful).toBe(true);
    expect(otherWallet.balance).toBeCloseTo(2.46);
  });

  it("deducts the amount and returns `true` when possible", () => {
    // Creating a separate object ensures that we don't mutate the original
    // object by reassigning its `balance` property.
    const otherWallet = { balance: 10 };
    const isPaymentSuccessful = wallet.pay.call(otherWallet, 3);
    expect(isPaymentSuccessful).toBe(true);
    expect(otherWallet.balance).toBe(7);
  });

  it("does not deduct the amount and returns `false` when impossible", () => {
    // Creating a separate object ensures that we don't mutate the original
    // object by reassigning its `balance` property.
    const otherWallet = { balance: 10 };
    const isPaymentSuccessful = wallet.pay.call(otherWallet, 15);
    expect(isPaymentSuccessful).toBe(false);
    expect(otherWallet.balance).toBe(10);
  });
});
