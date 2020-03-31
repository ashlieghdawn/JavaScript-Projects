function addition_Function(){
    var addition=4+4;
    document.getElementById("Math").innerHTML="4+4= "+addition;
}

function subtraction_Function(){
    var subtraction=6-4;
    document.getElementById("Math-2").innerHTML="6-4= "+subtraction;
}

function multiplication(){
    var simple_Math=7*7;
    document.getElementById("Math-3").innerHTML="7*7= "+ simple_Math;
}

function division(){
    var simple_division=72/9;
    document.getElementById("Math-4").innerHTML="72/9= "+ simple_division;
}

function more_Math(){
    var simple_math2=(1+2)*10/2-5;
    document.getElementById("Math-5").innerHTML="1 plus 2 multiplied by 10 divided in half and then subtracted by 5 equals "+ simple_math2;
}

function modulus_Operator(){
    var simple_math3=36%5;
    document.getElementById("Math-6").innerHTML="When you divide 36 by 5 you have a remainder of: "+ simple_math3;
}

function negation_Operator(){
    var x=5;
    document.getElementById("Math-7").innerHTML="The negation operator of 5 is: "+ -x;
}

function increment(){
var X=5;
X++;
document.getElementById("Math-8").innerHTML="To increment 5 is: "+ X++;
}

function decrement(){
var Z=6;
Z--;
document.getElementById("Math-9").innerHTML="To decremeant 6 is: "+ Z--;
}

window.alert(Math.random()*50);

function mathround(){
    var round=Math.round(4.7);
    document.getElementById("Math-10").innerHTML="4.7 rounded is: "+ round;
}
