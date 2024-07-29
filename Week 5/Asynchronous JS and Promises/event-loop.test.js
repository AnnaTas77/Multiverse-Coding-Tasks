const { delayedHello } = require("./event-loop");
jest.useFakeTimers();

test("Message logs after 1 second", () => {
  const logSpy = jest.spyOn(global.console, "log");
  jest.useFakeTimers();
  delayedHello();
  jest.advanceTimersByTime(1000);
  expect(logSpy).toHaveBeenCalledWith("Hello after 1 second");
  jest.useRealTimers();
});

test("Message log after 2 seconds", () => {
  const logSpy = jest.spyOn(global.console, "log");
  jest.useFakeTimers();
  delayedHello();
  jest.advanceTimersByTime(2000);
  expect(logSpy).toHaveBeenCalledWith("Hello after 2 seconds");
  jest.useRealTimers();
});
