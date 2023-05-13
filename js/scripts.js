$(document).ready(function(){
    $('.container').submit(function(e){
        e.preventDefault();
        let unitValue = $("input:radio[name = unit]:checked").val();
        let result = 0;
        let pound = 0.453592;
        let kilo = 2.20462;
        let gram =1000;
        let input = parseInt($("#weight").val());
        if(unitValue === "kg"){
            console.log(result = input*pound);
            $(".result").html(`<h3> ${result.toFixed(3)} kilograms </h3>`)
        }
        else if(unitValue === "lbs"){
            console.log(result = input*kilo);
            $(".result").html(`<h3> ${result.toFixed(3)} pounds </h3>`)
        }
        else if(unitValue === "g"){
            console.log(result = input*gram);
            $('.result').html(`<h3> ${result.toFixed(3)} grams </h3>`)
        }
        else if(unitValue === "gram"){
            console.log(result = input/gram);
            $('.result').html(`<h3> ${result.toFixed(3)} grams </h3>`)
        }
    });
});