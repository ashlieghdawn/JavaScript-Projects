function My_First_Function(){
    var str="This text is green!";
    var result=str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML=result;
}

function My_Second_Function(){
    var str="Hello everyone--changed to purple!";
    var result=str.fontcolor("purple");
    document.getElementById("Purple_Text").innerHTML=result;
}

function My_Third_Function(){
    var sentence="I am learning";
    sentence +=" a lot from this course!";
    document.getElementById("Concatenate").innerHTML=sentence;
}