const { Passenger, BankAccount } = require("./encapsulation");

test("Passenger class has public seatNumber property", () => {
  const p1 = new Passenger("John", "ABC123", "23E");
  expect(p1.seatNumber).toEqual("23E");
});

describe("Passenger class name property", () => {
  const p1 = new Passenger("John", "ABC123", "23E");

  it("is defined", () => {
    expect(p1.getName()).toEqual("John");
  });

  it("is private", () => {
    expect(p1.name).toEqual(undefined);
  });
});

describe("Passenger passportNum", () => {
  const p1 = new Passenger("John", "ABC123", "23E");

  it("is defined", () => {
    expect(p1.getPassportNum()).toEqual("ABC123");
  });

  it("is private", () => {
    expect(p1.passportNum).toEqual(undefined);
  });
});

/// BANK ACCOUNT

describe("Bank Account", () => {
  test("getBalance and setBalance are functions", () => {
    const account = new BankAccount(10000);
    expect(typeof account.getBalance).toEqual("function");
    expect(typeof account.setBalance).toEqual("function");
  });

  test("getBalance gets the value of balance", () => {
    const account = new BankAccount(10000);
    expect(account.getBalance()).toEqual(10000);
  });

  test("setBalance updates the value of balance", () => {
    const account = new BankAccount(10000);
    account.setBalance(20000);
    expect(account.getBalance()).toEqual(20000);
  });
});
