var x=10;
function Add_numbers_1(){
    document.write(20+x+"<br>");
}
function Add_numbers_2(){
    document.write(x+100+"<br>");
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3(){
    var x=10;
    console.log(20+x);
}
function Add_numbers_4(){
    var x=10;
    console.log(x+100);
}
Add_numbers_3();
Add_numbers_4();

function get_Date(){
    if (new Date().getHours()<17){
        document.getElementById("Greeting").innerHTML="How are you today?";
    }
}

if(23>10){
    document.write("The left number is greater than the number on the right")
}

function Age_Function(){
    Age=document.getElementById("Age").value;
    if(Age>=16){
        Drive="You are old enough to drive!";
    }
    else{
        Drive="You are not old enough to drive!";
    }
    document.getElementById("How_old_are_you?").innerHTML=Drive;
}

function Time_function(){
    var Time=new Date().getHours();
    var Reply;
    if (Time<12==Time>0){
        Reply="It is morning time.";
    }
    else if(Time>12==Time<18){
        Reply="It is the afternoon.";
    }
    else{
        Reply="It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML=Reply;
}