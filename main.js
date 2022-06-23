var one;
var two;
var tree;
var four;
var six;
var serverprice = 40; //Change Server Price
var bronzeWKprice = 19; //Change Bronze Workstation Price
var silverWKprice = 29; //Change Silver Workstation Price
var goldWKprice = 39; //Change Gold Workstation Price

document.querySelector('#formulario').onchange = function () {

    one = parseInt(document.getElementById("workstations").value);
    two = parseInt(document.getElementById("servers").value);
    tree = parseInt(document.getElementById("selector").value);
    four = parseInt(document.getElementById("users").value);
    six = document.getElementById("year");
    var result = 0;

    var wk = document.getElementById("wk").innerHTML = one;
    var sv = document.getElementById("sv").innerHTML = two;
    var us = document.getElementById("us").innerHTML = four;


    if (document.getElementById('bronze').selected == true) {
        result = ((one * bronzeWKprice) + (two * serverprice) + tree + four);
    } else if (document.getElementById('silver').selected == true) {
        result = ((one * silverWKprice) + (two * serverprice) + tree + four);
    } else {
        result = ((one * goldWKprice) + (two * serverprice) + tree + four);
    }

    if (six.checked == true) {
        result *= 12; //To Yearly Price (12Months)
    }

    var result = document.getElementById("result").innerHTML = ("£" + result);

}