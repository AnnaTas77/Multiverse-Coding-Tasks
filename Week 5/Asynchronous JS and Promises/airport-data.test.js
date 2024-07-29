const findAirportByName = require("./airport-data");

test("is a function", async () => {
  expect(typeof findAirportByName).toBe("function");
});

test("should return a promise", async () => {
  const returnValue = findAirportByName("LHR");
  expect(typeof returnValue).toBe("object");
  expect(typeof returnValue.then).toBe("function");
});

test("finds an airport by its iata", async () => {
  const data = await findAirportByName("LHR");
  expect(data).toEqual({
    icao: "EGLL",
    iata: "LHR",
    name: "London Heathrow Airport",
    city: "London",
    state: "England",
    country: "GB",
    elevation: 83,
    lat: 51.4706001282,
    lon: -0.4619410038,
    tz: "Europe/London",
  });
});

test("finds an airport by its iata", async () => {
  const dataJFK = await findAirportByName("JFK");
  expect(dataJFK).toEqual({
    icao: "KJFK",
    iata: "JFK",
    name: "John F Kennedy International Airport",
    city: "New York",
    state: "New-York",
    country: "US",
    elevation: 13,
    lat: 40.63980103,
    lon: -73.77890015,
    tz: "America/New_York",
  });
  const dataSFO = await findAirportByName("SFO");
  expect(dataSFO).toEqual({
    icao: "KSFO",
    iata: "SFO",
    name: "San Francisco International Airport",
    city: "San Francisco",
    state: "California",
    country: "US",
    elevation: 13,
    lat: 37.6189994812,
    lon: -122.375,
    tz: "America/Los_Angeles",
  });
  const dataCDG = await findAirportByName("CDG");
  expect(dataCDG).toEqual({
    icao: "LFPG",
    iata: "CDG",
    name: "Charles de Gaulle International Airport",
    city: "Paris",
    state: "Ile-de-France",
    country: "FR",
    elevation: 392,
    lat: 49.0127983093,
    lon: 2.5499999523,
    tz: "Europe/Paris",
  });
});
