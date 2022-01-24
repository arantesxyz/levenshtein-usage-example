const levenshtein = require("js-levenshtein");
const removeAccent = require("remove-accents");

function sanitizeInput(str) {
  return removeAccent.remove(str.replace(/\s/g, "").toUpperCase());
}

function run({ expected, userInput }) {
  const diffSize = levenshtein(expected, userInput);

  const diffPercentage = (diffSize * 100) / expected.length;
  const matchPercentage = 100 - diffPercentage;

  console.log("String 1 Size: ", expected.length);
  console.log("String 2 Size: ", userInput.length);

  console.log("Difference size: ", diffSize);
  console.log("Difference Percentage: ", diffPercentage);
  console.log("Match Percentage: ", matchPercentage);
}

run({
  expected: sanitizeInput("Joao costa da Silva"),
  userInput: sanitizeInput("João costa de Silva"),
});
