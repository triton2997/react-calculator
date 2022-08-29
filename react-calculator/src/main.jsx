import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { CalculatorContextProvider } from './context/CalculatorContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CalculatorContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CalculatorContextProvider>
)
