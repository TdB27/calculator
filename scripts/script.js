let number1 = "0";
let operator = null;
let number2 = "0";
let resultOperation;
let arrayOperation = Array();
const screen = document.querySelector('.screen__result');

const numbers = (value) => {

    arrayOperation.push(value);

    if(operator == null) {
        if(number1 != "0")
            number1 += value;

        else
            number1 = value;
            
        display(number1)
    }
    else if (operator != null) {

        if(number2 != "0")
            number2 += value;

        else
            number2 = value;

        display(number1 + operator + number2);
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
        display(number1 + operator);
        number2 = 0;
    }
};

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

        
        const stringNumber = transformToString(resultOperation)
        display(stringNumber)
        number1 = resultOperation;
        operator = null;
        number2 = 0;
        arrayOperation = [stringNumber];
    }
}

const point = () => {

    if(operator == null) {
        if(number1.toString().indexOf(".") >= 0)
            return false

        if(number1 != 0){
            display(number1 += ".");
            arrayOperation.push(".");
        }

        else
        display(number1 = "0.")
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

const reset = () => {
    number1 = "0";
    operator = null;
    number2 = "0";
    display("0")
    arrayOperation = ['0'];
}

const del = () => {
    if(operator == null) {    
        if(arrayOperation.length <= 1) {
            arrayOperation.splice(0, 0, "0");
        }

        if(arrayOperation.length > 1 && arrayOperation[0] === "0"){
            const i = arrayOperation.splice(0, 0, number1)
            console.log(i)
        }

        if(number1.length > 1) {
            arrayOperation.pop();
            let juntar = arrayOperation.join("");
            //console.log(arrayOperation)
            display(juntar)
        }
    }
}

const transformToString = value => {
    return value.toString()
}

const display = value => {
    screen.innerHTML = value;
    console.log(value)
}

document.querySelector('.delete').addEventListener('click', () => del());
document.querySelector('.reset').addEventListener('click', () => reset());
document.querySelector('.--function-point').addEventListener('click', () => point());
document.querySelector('.--function-equal').addEventListener('click', () => result());
