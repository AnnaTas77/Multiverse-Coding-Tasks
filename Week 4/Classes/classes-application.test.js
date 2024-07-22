const { Triangle, Account } = require("./classes-application");

describe("A triangle", () => {
  const t = new Triangle(3, 8);
  it("has base", () => {
    expect(t.base).toEqual(3);
  });
  it("has height", () => {
    expect(t.height).toEqual(8);
  });
  it("has corners", () => {
    expect(t.corners).toEqual(3);
  });
});

describe("A triangle", () => {
  const t = new Triangle(3, 8);
  it("calculates area", () => {
    expect(t.area()).toEqual(12);
  });
});

describe("A triangle", () => {
  const t = new Triangle(3, 8);
  it("gets taller", () => {
    t.taller(2);
    expect(t.height).toEqual(10);
  });
});

//ACCOUNT

describe("Can create Account with correct values", () => {
  const acc = new Account("xyz", 10);

  it("has an account ID", () => {
    expect(acc.accountId).toEqual("xyz");
  });
  it("has a balance", () => {
    expect(acc.balance).toEqual(10);
  });
});

describe("Can deposit", () => {
  const acc = new Account("xyz", 10);

  it("accepts deposits in USD", () => {
    acc.deposit(2, "USD");
    expect(acc.balance).toEqual(12);
  });
  it("accepts deposits in GBP", () => {
    acc.deposit(5, "GBP");
    expect(acc.balance).toEqual(18);
  });
});

describe("Can get balance", () => {
  const acc = new Account("xyz", 18);

  it("displays balance in USD", () => {
    expect(acc.getBalance("USD").slice(0, 3)).toEqual("$18");
  });
  it("displays balance in GBP", () => {
    expect(acc.getBalance("GBP").slice(0, 3)).toEqual("£15");
  });
});
