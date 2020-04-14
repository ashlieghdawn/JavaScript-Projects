function Call_Loop(){
    var Digit="";
    var x=1;
    while(x<11){
        Digit+="<br>"+x;
        x++;
    }
    document.getElementById("Loop").innerHTML=Digit;
}

function stringlength(){
    var str="Not all those who wander are lost.";
    var n=str.length;
    document.getElementById("string_length").innerHTML=n;
}

var Instruments=["Guitar", "Piano","Flute","Bass"];
var Content="";
var y;
function for_Loop(){
    for(y=0;y<Instruments.length;y++){
        Content+=Instruments[y]+"<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML=Content;
}

function array_Function(){
    var Dog_Picture=[];
    Dog_Picture[0]="sleeping";
    Dog_Picture[1]="playing";
    Dog_Picture[2]="eating";
    Dog_Picture[3]="growling";
    document.getElementById("Array").innerHTML="In this picture, the dog is "+Dog_Picture[1]+".";
}

function constant_function(){
    const Musical_Instrument={type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color="blue";
    Musical_Instrument.price="$900";
    document.getElementById("Constant").innerHTML="The cost of the " + Musical_Instrument.color +
    " "+ Musical_Instrument.type + " was " + Musical_Instrument.price;
}

let x=54
document.write("<br>"+x);


let car={
    make:"Dodge ",
    model:"Viper ",
    year:"2021 ",
    color:"red ",
    description: function(){
        return "The car is a " + this.year + this.color + this.make + this.model
        }
};
document.getElementById("Car_Object").innerHTML=car.description();

var text="";
var i;
for (i=0;i<10;i++){
    if (i===3){break;}
    text += "The number is " +i +"<br>";
}
document.getElementById("breaks").innerHTML=text;

var text_2="";
var h;
for(h=0;h<10;h++){
    if (h===3){continue;}
    text += "The number is " + h + "<br>";
}
document.getElementById("continues").innerHTML=text;

