$(document).ready(function(){
    $('.container').submit(function(e){
        e.preventDefault();
        let unitValue = $("input:radio[name = unit]:checked").val();
        let result = 0;
        let pound = 0.453592;
        let kilo = 2.20462;
        let gram =1000;
        let gramToPound = 453.6
        let input = parseInt($("#weight").val());
        if(unitValue === "kg"){
            console.log(result = input*pound);
            $('#converted').val(result.toFixed(2));
            // $(".result").html(`<h3> ${result.toFixed(2)} kilograms </h3>`)
        }
        else if(unitValue === "lbs"){
            console.log(result = input*kilo);
            $('#converted').val(result.toFixed(2));
            // $(".result").html(`<h3> ${result.toFixed(2)} pounds </h3>`)
        }
        else if(unitValue === "g"){
            console.log(result = input*gram);
            $('#converted').val(result.toFixed(2));
            // $('.result').html(`<h3> ${result.toFixed(2)} grams </h3>`)
        }
        else if(unitValue === "gram"){
            console.log(result = input/gram);
            $('#converted').val(result.toFixed(3));
            // $('.result').html(`<h3> ${result.toFixed(2)} kilograms </h3>`)
        }
        else if(unitValue === "lbs-to-g"){
            console.log(result = input*gramToPound);
            $('#converted').val(result.toFixed(8));
            // $('.result').html(`<h3> ${result.toFixed(8)} grams </h3>`)
        }
        else if(unitValue === "g-to-lbs"){
            console.log(result = input/gramToPound);
           $('#converted').val(result.toFixed(8));
            // $('.result').html(`<h3> ${result.toFixed(8)} pounds </h3>`)
        }
    });
});