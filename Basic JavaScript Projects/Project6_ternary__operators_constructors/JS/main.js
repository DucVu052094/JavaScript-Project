function Ride_Function()    //Creating a ternary function that use ternary operation
{
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height<52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() //Creating a ternary function that use ternary operation
{
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age<18) ? "You are too young":"You are old enough"; //Check if age is over or under 18
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color){ //Creating a constructor function for Vehicle Class
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
//Creating new Vehicle objects
var Jack = new Vehicle("Dodge","Viper", 2020, "Red");
var Emily = new Vehicle("Jeep","Trail Hawk", 2019,"White and Black");
var Eric = new Vehicle("Ford", "Pinto", 1971,"Mustard");

function myFunction(){ //function that grabs a vehicle object variables and display them
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Eric drives a " + Eric.Vehicle_Color + "-colored " + Eric.Vehicle_Model +
    " manufactured in " + Eric.Vehicle_Year;
}

function myFunction2(){ //function that grabs a vehicle object variables and display them
    document.getElementById("New_and_This").innerHTML = "Jack has a " +
    Jack.Vehicle_Color + " " + Jack.Vehicle_Make + " made in " + Jack.Vehicle_Year;
}

function Nested_Function(){ //creating a function that has a nested function inside it
    document.getElementById("Nested_Function").innerHTML = DisplayFunction();
    function DisplayFunction(){
        document.write("This is a nested function");
    }
}

