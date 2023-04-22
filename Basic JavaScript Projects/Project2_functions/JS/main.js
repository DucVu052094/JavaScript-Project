var Dog = "this is a dog";
var Cat = " this is a cat";
var animal = Dog;
animal += Cat;

document.getElementById("elementID").innerHTML = Dog;

function concatenateFunc()
{
    var animal = Dog;
    animal += Cat;
    document.getElementById("elementAnimal").innerHTML = animal;
}
