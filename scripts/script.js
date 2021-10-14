let number1 = "0";
let operator = undefined;
let number2 = "0";
const screen = document.querySelector('.screen__result');
const equal = document.querySelector('.--function-equal');

const numbers = (value) => {
    if(operator == undefined) {
        if(number1 != "0")
            number1 += value
        else
            number1 = value
            
        screen.innerHTML = number1
    }
    else if (operator != undefined) {
        if(number2 != "0")
            number2 += value
        else
            number2 = value

            number1 + operator + number2
            screen.innerHTML = number1 + operator + number2
        }
}

const operators = (value) => {
    operator = value
    if(operator == '')
        return
    else{
        screen.innerHTML = number1 + operator
        number2 = 0;
    }
};

const result = () => {
    let resultOperation;

    if(number2 != 0){
        if (operator == '+')
            resultOperation = parseFloat(number1) + parseFloat(number2)
        if (operator == '-')
            resultOperation = parseFloat(number1) - parseFloat(number2)
        if (operator == '*')
            resultOperation = parseFloat(number1) * parseFloat(number2)
        if (operator == '/')
            resultOperation = parseFloat(number1) / parseFloat(number2)

        screen.innerHTML = resultOperation
        number1 = resultOperation;
        number2 = 0;
    }
}

equal.addEventListener('click', () => {
    result()
});
