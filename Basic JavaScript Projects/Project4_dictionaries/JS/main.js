function my_Dictionary(){   //Create a dictionary class
    var FoodMenu =
    {
        Donut:"$5",
        Hamburger:"$10",
        Salad:"$4",
        Steak:"$20"
    };
    delete FoodMenu.Salad; //remove a key/pair 
    document.getElementById("Dictionary").innerHTML = FoodMenu.Salad; //calls the removed key
}