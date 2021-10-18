let number1 = "0";
let operator = null;
let number2 = "0";
let resultOperation;
const screen = document.querySelector('.screen__result');

const numbers = value => {

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

const operators = value => {
    operator = value;

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
    }
}

const point = () => {

    if(operator == null) {
        if(number1.toString().indexOf(".") >= 0)
            return false

        if(number1 != 0){
            display(number1 += ".");
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
}

const backspace = () => {
    screen.textContent = screen.textContent.slice(0, -1)
    if(screen.textContent == '')
        display("0")
}

const transformToString = value => {
    return value.toString()
}

const display = value => {
    screen.textContent = value;
    console.log(value)
}

document.querySelector('.backspace').addEventListener('click', () => backspace());
document.querySelector('.reset').addEventListener('click', () => reset());
document.querySelector('.--function-point').addEventListener('click', () => point());
document.querySelector('.--function-equal').addEventListener('click', () => result());
