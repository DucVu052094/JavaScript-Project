function whileloop(){       //function that has whileloop
    var x = 1;
    var returnString ="";
    while(x < 10){
        returnString += "<br>" + x;
        x++;
    }
    document.getElementById("whileloop").innerHTML = returnString;
}

function forloop(){     //function that has a forloop
    var returnString ="";
    for(x = 1; x<10; x++){
        returnString += "<br>" + x;
    }
    document.getElementById("forloop").innerHTML = returnString;
}

function gameList(){    //function that has an array list
    var gameList = [];
    gameList[1] = "Mario";
    gameList[2] = "Zelda";
    gameList[3] = "Tetris";
    document.getElementById("Array").innerHTML = "The chosen game is: " + gameList[2];
}

function constant_function(){       //function that uses constant variable
    const My_Puppy = {type:"husky", age:5, gender:"male"};
    My_Puppy.type = "doge";
    My_Puppy.weight ="100 pounds";
    document.getElementById("Constant").innerHTML = "My puppy is a: " + My_Puppy.type
    + " and it weights: " + My_Puppy.weight;
}

var number1 = 1; //using global var keyword
document.write(number1);
{
    let number1 = 2;        //using let keyword
    document.write("<br>"+number1);
}
document.write("<br>"+number1);