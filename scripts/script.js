let number1 = "0";
let operator = null;
let number2 = "0";
const screen = document.querySelector('.screen__result');


const numbers = (value) => {
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
    if(operator == '')
        return false;

    else{
        screen.innerHTML = number1 + operator;
        number2 = 0;
    }
};

const point = () => {

    if(operator == null) {
        if(number1.toString().indexOf(".") >= 0)
            return false

        if(number1 != 0)
            screen.innerHTML = number1 += ".";

        else{
            screen.innerHTML = number1 = "0.";
        }
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
    let resultOperation;

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
    }
}

document.querySelector('.--function-point').addEventListener('click', () => point());
document.querySelector('.--function-equal').addEventListener('click', () => result());