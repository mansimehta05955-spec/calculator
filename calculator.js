 let inp = document.getElementById("inp");
 let acBtn = document.getElementById("ac");
 let equalBtn = document.getElementById("equal");

function oneclick(value){
    inp.value += value;
}
function twoclick(value){
    inp.value += value;
}
function threeclick(value){
    inp.value += value;
}
function plusclick(value){
    inp.value = inp.value + value;
}

function fourclick(value){
    inp.value += value;
}
function fiveclick(value){
    inp.value += value;
}
function sixclick(value){
    inp.value += value;
}
function sevenclick(value){
    inp.value += value;
}
function eightclick(value){
    inp.value += value;
}
function nineclick(value){
    inp.value += value;
}
function zeroclick(value){
    inp.value += value;
}
function dzeroclick(value){
    inp.value += value;
}
function minusclick(value){
    inp.value = inp.value + value;
}
function mulclick(value){
    inp.value = inp.value + value;
}
function divclick(value){
    inp.value = inp.value + value;
}
function pointclick(value){
    inp.value += value;
}

acBtn.onclick = function () {
    inp.value = "";
}

equalBtn.onclick = function () {
    inp.value = eval(inp.value);
}


