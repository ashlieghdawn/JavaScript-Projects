document.write(typeof "Crazy");

function my_function(){
    document.getElementById("test").innerHTML=0/0;
}

function my_function2(){
    document.getElementById("test-2").innerHTML=isNaN('This is a string');
}

document.write(3E340);

document.write(-4E310);

document.write(9>3);

document.write(3>9);

console.log(3+3);

document.write("16"+6);

console.log(3>9);

document.write(10+10==20);

document.write(4==8);

document.write(4===4);

document.write("This"===4);

document.write("4"===4);

document.write(10===4);

document.write(2<5&&5<10);

document.write(2<5&&5>10);

document.write(5>6||10>7);

document.write(5>7||10>14);

function not_Function(){
    document.getElementById("Not").innerHTML=!(10>5);
}

function not_Function2(){
    document.getElementById("Not-2").innerHTML=!(5>10);
}