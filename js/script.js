$(document).ready(function() {
    $("#convert").click(function() {
      let weight = $("#weight").val();
      let unit = $("#unit").val();
      let result = 0;
      if (unit === "lbs") {
        result = weight * 0.453592;
        $("#result").html(weight + " lbs = " + result.toFixed(2) + " kg");
      } else {
        result = weight * 2.20462;
        $("#result").html(weight + " kg = " + result.toFixed(2) + " lbs");
      }
    });
  });
