var X = 10;                     //global variable
function add_numbers_1()        //add function that use global variable
{
    document.write(5+X);
    document.write("<br>");
}

function add_numbers_2(){       //add function that use local variable
    var Y = 20;
    document.write(5+Y);
    document.write("<br>");
}

function add_numbers_3(){       //add function that use a variable outside its scope, will result in error
    document.write(6+Y);
    document.write("<br>");
}

add_numbers_1();               
add_numbers_2();

function get_Date(){            //function that returns a string based on the time of the day
    if (new Date().getHours() < 18)
    {
        document.getElementById("Greeting").innerHTML= "How are you today";
    }
}

function ifStatement(){  //function with an if statement
    var left= 10;
    var right= 20;
    if(left<right)
    {
        document.write("the left number is smaller!");
    }
}

ifStatement();

function Number_Function(){ //function with if else statement
    varNumber = document.getElementById("Number").value;
    if(varNumber < 5){
        result = "Your number is less than 5";
    }
    else{
        result = "Your number is equal or greater than 5";
    }
    document.getElementById("Number_Result").innerHTML = result;
}

function Time_function(){ //function with if elseif and else statement
    var Time = new Date().getHours();
    var Reply;
    if(Time<12 == Time > 0){
        Reply = "It is morning time";
    }
    else if(Time >= 12 == Time < 18){
        Reply = "It is afternoon time";
    }
    else{
        Reply = "It is evening time";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}