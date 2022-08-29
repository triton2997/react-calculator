import React from 'react';
import { useContext } from 'react';
import { CalculatorContext } from '../context/CalculatorContext';

const CalculatorResult = () => {
    const { calculatorResult, setCalculatorResult } = useContext(CalculatorContext);

    return (
        <p className='calc-result'>
            {calculatorResult}
        </p>
    )
}

export default CalculatorResult;