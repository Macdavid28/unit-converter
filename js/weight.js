$(document).ready(() => {
  $("#inputValue,#outputValue,#selectUnit,chooseUnit").on(
    "input change",
    () => {
      convertWeight();
    }
  );

  const convertWeight = () => {
    const inputWeight = parseFloat($("#inputValue").val());
    const selectedUnit = $("#selectUnit").val();
    const chosenUnit = $("#chooseUnit").val();
    let convertedWeight = 0;
    //  If Units are the same
    if (
      (selectedUnit === "carat" && chosenUnit === "carat") ||
      (selectedUnit === "milligram" && chosenUnit === "milligram") ||
      (selectedUnit === "centigram" && chosenUnit === "centigram") ||
      (selectedUnit === "decigram" && chosenUnit === "decigram") ||
      (selectedUnit === "gram" && chosenUnit === "gram") ||
      (selectedUnit === "dekagram" && chosenUnit === "dekagram") ||
      (selectedUnit === "hectogram" && chosenUnit === "hectogram") ||
      (selectedUnit === "metric-tonne" && chosenUnit === "metric-tonne") ||
      (selectedUnit === "ounce" && chosenUnit === "ounce") ||
      (selectedUnit === "pound" && chosenUnit === "pound") ||
      (selectedUnit === "stone" && chosenUnit === "stone") ||
      (selectedUnit === "short-ton" && chosenUnit === "short-ton") ||
      (selectedUnit === "long-ton" && chosenUnit === "long-ton")
    ) {
      convertedWeight = inputWeight;
    }
    // Convert carat to milligram (1 carat = 200 mg)
    else if (selectedUnit === "carat" && chosenUnit === "milligram") {
      convertedWeight = inputWeight * 200;
    }
    // Convert carat to centigram (1 carat = 20 cg)
    else if (selectedUnit === "carat" && chosenUnit === "centigram") {
      convertedWeight = inputWeight * 20;
    }
    // Convert carat to decigram  (1 carat = 2 dg)
    else if (selectedUnit === "carat" && chosenUnit === "decigram") {
      convertedWeight = inputWeight * 2;
    }
    // Convert carat to gram (1 carat = 0.2 g)
    else if (selectedUnit === "carat" && chosenUnit === "gram") {
      convertedWeight = inputWeight * 0.2;
    }
    // Convert carat to dekagram (1 carat = 0.02 dg)
    else if (selectedUnit === "carat" && chosenUnit === "dekagram") {
      convertedWeight = inputWeight * 0.02;
    }
    // Convert carat to  hectogram
    else if (selectedUnit === " carat" && chosenUnit === "hectogram") {
      convertedWeight = inputWeight * 0.002;
    }
    $("#outputValue").val(convertedWeight);
  };
  convertWeight();
});
