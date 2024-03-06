function weightConversion() {
  const inputWeight = document.getElementById("inputWeight").value;
  const fromUnit = document.getElementById("selectUnit").value;
  const toUnit = document.getElementById("chooseUnit").value;
  let convertedWeight = 0;

  if (fromUnit === toUnit) {
    convertedWeight = inputWeight;
  } else if (fromUnit === "carat" && toUnit === "milligram") {
    convertedWeight = inputWeight * 200;
  } else if (fromUnit === "carat" && toUnit === "centigram") {
    convertedWeight = inputWeight * 20;
  } else if (fromUnit === "carat" && toUnit === "decigram") {
    convertedWeight = inputWeight * 2;
  } else if (fromUnit === "carat" && toUnit === "gram") {
    convertedWeight = inputWeight * 0.2;
  } else if (fromUnit === "carat" && toUnit === "dekagram") {
    convertedWeight = inputWeight * 0.02;
  } else if (fromUnit === "carat" && toUnit === "hectogram") {
    convertedWeight = inputWeight * 0.002;
  } else if (fromUnit === "carat" && toUnit === "kilogram") {
    convertedWeight = inputWeight * 0.0002;
  } else if (fromUnit === "carat" && toUnit === "metric-tonne") {
    convertedWeight = inputWeight * 2e-7;
  } else if (fromUnit === "carat" && toUnit === "ounce") {
    convertedWeight = inputWeight * 0.007055;
  } else if (fromUnit === "carat" && toUnit === "pound") {
    convertedWeight = inputWeight * 0.000441;
  } else if (fromUnit === "carat" && toUnit === "stone") {
    convertedWeight = inputWeight * 3.1495e-5;
  } else if (fromUnit === "carat" && toUnit === "short-ton") {
    convertedWeight = inputWeight * 2.2046e-7;
  } else if (fromUnit === "carat" && toUnit === "long-ton") {
    convertedWeight = inputWeight * 1.9684e-7;
  }
  document.getElementById(
    "output"
  ).innerHTML = `${inputWeight} ${fromUnit} = ${convertedWeight} ${toUnit} `;
}
