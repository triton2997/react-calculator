import React from 'react';
import { useContext } from 'react';
import { CalculatorContext } from '../context/CalculatorContext';
import { isOperator } from '../utils/utilFunctions';

const CalculatorButton = ({ value }) => {
    const { calculatorResult, setCalculatorResult } = useContext(CalculatorContext);

    const onButtonClick = () => {
        if(value == 'C') {
            setCalculatorResult("")
        }
        else if (isOperator(value)) {
            if(calculatorResult == "" && value == '-')
                setCalculatorResult(calculatorResult + value);
            else if(isOperator(calculatorResult[calculatorResult.length-1])) {
                setCalculatorResult(calculatorResult.substr(0, calculatorResult.length - 1) + value);
            }
            else {
                setCalculatorResult(calculatorResult + value);
            }
        }
        else if (value == '=') {
            setCalculatorResult(eval(calculatorResult));
        }
        else {
            setCalculatorResult(calculatorResult + value);
        }
        console.log(`${value} clicked`);
    };

    return (
        <button className='calc-button' onClick={onButtonClick.bind()}>
            {value}
        </button>
    )
}

export default CalculatorButton;