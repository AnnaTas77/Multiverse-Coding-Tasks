/** Write an async function, findAirportByName. The function receives an IATA (International Air Transport Association) code string (LHR, LAX, DFW…) as an argument.
Uses readFile (imported above) to read the txt file from the filePath (globally defined above).
Calls JSON.parse() passing in the result of the above call. Use the documentation for JSON.parse() 🔍.
Finds the matching airport by its iata property.
Returns the airport object. */

const { readFile } = require("fs").promises;
const path = require("path");
const filePath = path.join(__dirname, "airportsData.txt");
// DO NOT EDIT ABOVE

// YOUR CODE
async function findAirportByName(iata) {
  iata = iata.toUpperCase();
  try {
    const contents = await readFile(filePath, { encoding: "utf8" });
    const parsedContents = JSON.parse(contents);

    for (let key in parsedContents) {
      const currentObj = parsedContents[key];
      if (currentObj.iata === iata) {
        return currentObj;
      }
    }
  } catch (err) {
    console.error(err.message);
  }
}

// for debugging
findAirportByName("LHR");

// DO NOT EDIT BELOW
module.exports = findAirportByName;
