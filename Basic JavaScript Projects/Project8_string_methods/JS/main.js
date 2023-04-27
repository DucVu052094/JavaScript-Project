function Combine(){                 //function that use the concatenate function and return a combined word
    var part1 = "This is the first part, ";
    var part2 = "and this is the 2nd part, ";
    var part3 = "of a full sentence.";
    var combined = part1.concat(part2, part3);
    document.getElementById("Concat").innerHTML = combined;
}

function Slice(){       //function t hat use the slice function and return the sliced word
    var fullword = "A Full Word";
    var section = fullword.slice(7,11);
    document.getElementById("Slice").innerHTML = section;
}

function toStringFunction(){ //function that returns a number as a string
    var numb = 56;
    document.getElementById("toString").innerHTML = numb.toString();
}

function precisionFunction(){ //function that returns a number with a specified length
    var numb = 33.33333333
    document.getElementById("precise").innerHTML = numb.toPrecision(5);
}