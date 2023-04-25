function addFunc() //Creating a function that adds 5 and 5
{
    var result = 5+5;
    document.getElementById("addMath").innerHTML = "5+5=" + result;
}

function subtractFunc() //Creating a function that subtracts 10-6
{
    var result = 10-6;
    document.getElementById("subMath").innerHTML = "10-6=" + result;
}

function multiplyFunc() //Creating a function that multiplies 3 and 3
{
    var result = 3*3;
    document.getElementById("multiplyMath").innerHTML = "3*3=" + result;
}

function divideFunc() //Creating a function that divides 12 and 3
{
    var result = 12/3;
    document.getElementById("divideMath").innerHTML = "12/3=" + result;
}

function modFunc() //Creating a function that gets the remainder of 12 divides 5
{
    var result = 12%5;
    document.getElementById("modMath").innerHTML = "The remainder of 12/5=" + result;
}

function increment() //Creating an increment of 5 function
{
    var result = 5;
    result++;
    document.getElementById("increment").innerHTML = "The increment of 5 is " + result;
}

function decrement() //Creating a decrement of 5 function 
{
    var result = 5;
    result--;
    document.getElementById("decrement").innerHTML = "The decrement of 5 is " + result;
}

   window.alert("Here's a random number between 1 and 10:" + Math.random()*10); //Creating a window box that display a random number between 1 and 10
