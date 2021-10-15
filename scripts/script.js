let number1 = "0";
let operator = null;
let number2 = "0";
let resultOperation;
let arrayOperation = ['0'];
const screen = document.querySelector('.screen__result');

const numbers = (value) => {

    arrayOperation.push(value);

    if(operator == null) {
        if(number1 != "0")
            number1 += value;

        else
            number1 = value;
            
        screen.innerHTML = number1;
    }
    else if (operator != null) {

        if(number2 != "0")
            number2 += value;

        else
            number2 = value;

        number1 + operator + number2;
        screen.innerHTML = number1 + operator + number2;
    }
}

const operators = (value) => {
    operator = value;
    arrayOperation.push(value);

    if(operator == "")
        return false;

    if(number1 == "0")
        return operator = null;

    if(number1 == "0.")
        return operator = null;

    else{
        screen.innerHTML = number1 + operator;
        number2 = 0;
    }
};

const point = () => {

    if(operator == null) {
        if(number1.toString().indexOf(".") >= 0)
            return false

        if(number1 != 0){
            screen.innerHTML = number1 += ".";
            arrayOperation.push(".");
        }

        else
        screen.innerHTML = number1 = "0.";
    }
    
    if(operator != null) {
        if(number2.toString().indexOf(".") >= 0)
            return false

        if(number2 != 0)
            number2 += ".";

        else
            number2 = "0.";
        
        screen.innerHTML = number1 + operator + number2
    }
}

const result = () => {

    if(number2 != 0){

        if (operator == '+')
            resultOperation = parseFloat(number1) + parseFloat(number2);

        if (operator == '-')
            resultOperation = parseFloat(number1) - parseFloat(number2);

        if (operator == '*')
            resultOperation = parseFloat(number1) * parseFloat(number2);

        if (operator == '/')
            resultOperation = parseFloat(number1) / parseFloat(number2);

        screen.innerHTML = resultOperation;
        number1 = resultOperation;
        number2 = 0;
        arrayOperation = ['0'];
    }
}

const reset = () => {
    number1 = "0";
    operator = null;
    number2 = "0";
    screen.innerHTML = "0";
    arrayOperation = ['0'];
}

const del = () => {
    if(arrayOperation.length == 0)
        screen.innerHTML = "0";

    if(arrayOperation.length > 1) {

        if(arrayOperation.length == 2){
            arrayOperation.splice(0, 1);
            console.log(arrayOperation)
        }
        
        else {
            arrayOperation.pop();
            console.log(arrayOperation)
        }
    }
    
    screen.innerHTML = resultOperation + arrayOperation.join("");
}

document.querySelector('.delete').addEventListener('click', () => del());
document.querySelector('.reset').addEventListener('click', () => reset());
document.querySelector('.--function-point').addEventListener('click', () => point());
document.querySelector('.--function-equal').addEventListener('click', () => result());
