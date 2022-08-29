# React Calculator App
Simple calculator app created using React

A small app I have created to practice React!

Design:
1. The calculator itself is a table
2. The entire app is wrapped in a context which has a calculatorResult state variable. This is so that button components can update the result expression, and the result component can display the result expression
3. The first row is created using the CalculatorResult component
4. CalculatorResult simply displays the calculatorResult state variable which is a string
5. The buttons are CalculatorButton components. Each button is given its value, which it also displays in a button component
6. On clicking, the onClick handler updates the calculatorResult state variable according to what is the  button value and the result expression
7. Finally, the 'C' and '=' have special functions, wherein 'C' clears the calculatorResult variable, while '=' evaluates and replaces the expression with the result

I'm a newbie to CSS, so its not the most optimized version possible!
