function Ride_Function(){
    var Height, Can_ride;
    Height=document.getElementById("Height").value;
    Can_ride=(Height<52)?"You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML=Can_ride+" to ride.";
}

function Vote_Function(){
    var Age, Can_Vote;
    Height=document.getElementById("Age").value;
    Can_vote=(Age<18)?"You are not old enough to":"You can";
    document.getElementById("Vote").innerHTML=Can_vote+" vote!";
}

function Vehicle(Make, Model, Year, Color){
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}
var Jack=new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily=new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik=new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML="Erik drives a "+Erik.Vehicle_Color+"-colored "+Erik.Vehicle_Model+" manufactored in "+Erik.Vehicle_Year;
}

function Student(Age, Year){
    this.Student_Age=Age;
    this.Student_Year=Year;
}
var Vanessa=new Student(19, "Freshman");
var Ashliegh=new Student(20, "Sophomore");
function myFunction2(){
    document.getElementById("New_and_This").innerHTML="Vanessa is a "+Vanessa.Student_Age+" year old "+Vanessa.Student_Year;
}

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

  function nest_function(){
      document.getElementById("Nest_function").innerHTML=Count();
      function Count(){
          var starting_point=9;
          function plus_one(){starting_point+=1;}
          plus_one();
          return starting_point;
      }
  }