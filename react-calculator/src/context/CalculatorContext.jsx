import React, { useState } from 'react';

export const CalculatorContext = React.createContext();

export const CalculatorContextProvider = ({ children }) => {
    const [calculatorResult, setCalculatorResult] = useState("");

    return (
        <CalculatorContext.Provider value={{ calculatorResult, setCalculatorResult }}>
            {children}
        </CalculatorContext.Provider>
    );
}

