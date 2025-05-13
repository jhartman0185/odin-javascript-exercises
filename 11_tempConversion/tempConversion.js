function convertCToF(C) {

  let F = (C * (9/5) + 32);
  return F.toFixed(1);

} 

function convertFToC(F) {
  let C = (F - 32) * (5/9);
  return C.toFixed(1);
}

console.log(convertCToF(1));

console.log(convertFToC(33));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
