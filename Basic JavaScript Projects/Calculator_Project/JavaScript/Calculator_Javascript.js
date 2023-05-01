//Creates an object to keep track of values
const Calculator = {
    Display_Value: '0', //display 0 on the screen at the beginning
    First_Operand: null,
    Wait_Second_Operand: false,
    operator: null,
};

//Modifies values each time a button is clicked on
function Input_Digit(digit){
    const {Display_Value, Wait_Second_Operand} = Calculator;
    if(Wait_Second_Operand === true){
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    }
    else{
        Calculator.Display_Value = Display_Value === '0'? digit : Display_Value + digit;
    }
}

function Input_Decimal(dot) {
    if(Calculator.Wait_Second_Operand === true) return;
    if(!Calculator.Display_Value.includes(dot)){
        Calculator.Display_Value += dot;
    }
}

//this section handles operators
function Handle_Operator(Next_Operator){
    const {First_Operand, Display_Value, operator} = Calculator;
    //when an operator key is pressed, convert the current number displayed
    //on the screen into a number and then store the result in calculator.first_operand
    //if it doesn't already exist
    const Value_of_Input = parseFloat(Display_Value);
    //check if an operator already exist and if Wait_Second_Operand is true,
    //then update the operator and exist the function
    if (operator && Calculator.Wait_Second_Operand){
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null){
        Calculator.First_Operand = Value_of_Input;
    }
    else if (operator){
        const Value_Now = First_Operand || 0;
        //If operator exist, property lookup is performed for the operator
        //in the Perform_Calculation object and the function that matches the
        //operator is executed
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        result = Number(result).toFixed (9);
        //this will remove any trailing 0's
        result = (result *1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation ={
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset(){
    Calculator.Display_Value ='0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

//This function updates the calculator screen with the contents of Display_Value
function Update_Display(){
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
const keys = document.querySelector('.calculator-keys');

//This section monitors button clicks
keys.addEventListener('click', (event) => {
    //the target variable is an object that represents the element that was clicked
    const {target} = event;
    //if target was not a button, exit the function
    if (!target.matches('button')){
        return;
    }
    if (target.classList.contains('operator')){
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if(target.classList.contains('decimal')){
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    //ensures that AC clears all inputs from the Calculator screen
    if(target.classList.contains('all-clear')){
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})