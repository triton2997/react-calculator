import { useState } from 'react'
import CalculatorButton from './components/CalculatorButton'
import CalculatorResult from './components/CalculatorResult'
import './App.css'

function App() {

  return (
    <div className="App">
      <div className="calculator">
        <div className="calc-table">
          <table>
            <tbody>
              <tr>
                <td colSpan={4} className="calc-result-holder"><CalculatorResult /></td>
              </tr>
              <tr className='calc-row'>
                <td className='calc-button-holder'><CalculatorButton value="1"/></td>
                <td className='calc-button-holder'><CalculatorButton value="2"/></td>
                <td className='calc-button-holder'><CalculatorButton value="3"/></td>
                <td className='calc-button-holder'><CalculatorButton value="+"/></td>
              </tr>
              <tr>
                <td className='calc-button-holder'><CalculatorButton value="4"/></td>
                <td className='calc-button-holder'><CalculatorButton value="5"/></td>
                <td className='calc-button-holder'><CalculatorButton value="6"/></td>
                <td className='calc-button-holder'><CalculatorButton value="-"/></td>
              </tr>
              <tr>
                <td className='calc-button-holder'><CalculatorButton value="7"/></td>
                <td className='calc-button-holder'><CalculatorButton value="8"/></td>
                <td className='calc-button-holder'><CalculatorButton value="9"/></td>
                <td className='calc-button-holder'><CalculatorButton value="*"/></td>
              </tr>
              <tr>
                <td className='calc-button-holder'><CalculatorButton value="C"/></td>
                <td className='calc-button-holder'><CalculatorButton value="0"/></td>
                <td className='calc-button-holder'><CalculatorButton value="="/></td>
                <td className='calc-button-holder'><CalculatorButton value="/"/></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App
