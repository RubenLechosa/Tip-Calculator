var WKSlider;
var SVSlider;
var PlanSelector;
var YearSelector;
var serverprice = 40; //Change Server Price
var bronzeWKprice = 19; //Change Bronze Workstation Price
var silverWKprice = 29; //Change Silver Workstation Price
var goldWKprice = 39; //Change Gold Workstation Price
var result = 0;

document.querySelector('#formulario').onchange = function () {

    WKSlider = parseInt(document.getElementById("workstations").value);
    SVSlider = parseInt(document.getElementById("servers").value);
    PlanSelector = parseInt(document.getElementById("selector").value);
    YearSelector = document.getElementById("year");
    
    //Slider Counter
    var wk = document.getElementById("wk").innerHTML = WKSlider;
    var sv = document.getElementById("sv").innerHTML = SVSlider;
    //END Slider Counter

    //to know which plan the user has selected
    if (document.getElementById('bronze').selected == true) {
        result = ((WKSlider * bronzeWKprice) + (SVSlider * serverprice) + PlanSelector);
    } else if (document.getElementById('silver').selected == true) {
        result = ((WKSlider * silverWKprice) + (SVSlider * serverprice) + PlanSelector);
    } else {
        result = ((WKSlider * goldWKprice) + (SVSlider * serverprice) + PlanSelector);
    }

    //If the users has selected yearly, the price is multiplied by 12
    if (YearSelector.checked == true) {
        result *= 12; //To Yearly Price (12Months)
    }

    var result = document.getElementById("result").innerHTML = ("£" + result); //To print the final price

}