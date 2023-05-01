function getReceipt(){ //function that calculate the price of pizza
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++ )
    {
        if (sizeArray[i].checked){  //concatenate the selected size to text1 variable
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    //if else list to determine the price of pizza ordered based on size
    if (selectedSize === "Personal Pizza"){
        sizeTotal = 6;
    }
    else if (selectedSize === "Small Pizza"){
        sizeTotal = 8;
    }
    else if (selectedSize === "Medium Pizza"){
        sizeTotal = 10;
    }
    else if (selectedSize === "Large Pizza"){
        sizeTotal = 14;
    }
    else if (selectedSize === "Extra Large Pizza"){
        sizeTotal = 16;
    }
    //runningTotal is Size+Vegetables+Toppings
    runningTotal = sizeTotal;  
    console.log(selectedSize+" = $" + sizeTotal + ".00");
    console.log("size text1: " +text1);
    console.log("subtotal: $ "+runningTotal+".00");
    getVegetables(runningTotal,text1); //passing totalprice and text1 to the next function
};

//this function adds vegetable price (1 each) to total price, and display vegetables checked 
//at the end

function getVegetables(runningTotal,text1){ 
    var selectedVegetable =[];
    var vegetableArray = document.getElementsByClassName("vegetables");
    var vegetableTotal = 0;
    for (var k =0; k< vegetableArray.length; k++){  //loop that checks which vegetables is checked from the form
        if(vegetableArray[k].checked)               //then it will concatenate that vegetables to the "text1" variable 
        {                                           //to display at the end 
            selectedVegetable.push(vegetableArray[k].value);
            console.log("selected vegetable item: ("+vegetableArray[k].value+")");
            text1 = text1+vegetableArray[k].value+"<br>"; //concatenate all selected vegetables to text1
            vegetableTotal++; //increased vegetableTotal by 1 for every checked vegetable
        }
    }
    runningTotal = (runningTotal + vegetableTotal);
    getTopping(runningTotal,text1);
}

function getTopping(runningTotal, text1){
    var toppingTotal = 0;       //total price of topping
    var selectedTopping =[];    //array to hold selected topping from the list, use to display from text1 at the end
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j =0; j<toppingArray.length; j++)
    {
        if(toppingArray[j].checked)
        {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>"; //concatenate all the selected toppings to text1
        }
    }
    //calculate topping price, customer get 1 free topping, so if 1 topping total is 0
    //otherwise total is total amount of topping - 1
    var toppingCount = selectedTopping.length;
    if(toppingCount>1){
        toppingTotal = (toppingCount -1);
    }
    else{
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal); //adding total price from size with total price from topping
    console.log("total selected topping items: "+toppingCount); 
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1; //display text1, which is a list of items checked
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+ //display total price from all items
        runningTotal+".00" +"</strong></h3>";
};