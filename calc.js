'use strict';
let num1;
let num2;
let oper;



function calculate() {
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    oper = document.getElementById("operators").options[document.getElementById('operators').selectedIndex].value;
    var finalRes;


    if (oper == "*") {
        finalRes = num1 * num2;
    } else if (oper == "/") {
        finalRes = num1 / num2;
    } else if (oper == "+") {
        finalRes = num1 + num2;
    } else if (oper == "-") {
        finalRes = num1 - num2;
    }
    var res = document.getElementById("result");
    res.innerHTML = num1 + oper + num2 + "=" + finalRes;
    addPrevResults(num1 + oper + num2 + "=" + finalRes);
}

// clear calculator

function clear() {
    var number1 = document.getElementById("num1");
    number1.value = "";

    var number2 = document.getElementById("num2");
    number2.value = "";

    var resultCalc = document.getElementById("result");
    resultCalc.innerHTML = "";

    oper = "";
}

var clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", clear);

var calculations = [];

function addPrevResults(resultToAdd) {
    let firstRes = document.getElementById("result").innerHTML;
    
    if (calculations.length < 10) {
        calculations.push(firstRes);
    } else {
        calculations.shift();
        calculations.push(firstRes);
    }

    let prev = document.getElementById("prevResult");
    prev.innerHTML = calculations.join("&#13;&#10;");
}
var calcBtn = document.getElementById("calc");
calcBtn.addEventListener("click", calculate);
