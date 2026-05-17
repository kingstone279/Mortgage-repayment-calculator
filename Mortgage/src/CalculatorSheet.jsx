import { useState, useRef } from "react";
import "./CalculatorSheet.css";
import calculatorIcon from "./assets/images/icon-calculator.svg";
import { AfterResults } from "./AfterResults";
import { BeforeResults } from "./BeforeResults";

export function CalculatorSheet() {
  const [selectedOption, setSelectedOption] = useState('')
  const [amount, setAmount] = useState('')
  const [loanTerm, setLoanTerm] = useState('')
  const [rate, setRate] =   useState('')
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [displayResults, setdisplayResults] = useState(false)

  const errorAmountRef = useRef(null)
  const errorTermRef = useRef(null)
  const errorRateRef = useRef(null)
  const errorRadioRef = useRef(null)
  
  const handleChange = (event) =>{
    setSelectedOption(event.target.value)
  }
  const handleAmountChange = (event) =>{
    setAmount(event.target.value)
  }
  const handleTermChange = (event) =>{
    setLoanTerm(event.target.value)
  }
  const handleRateChange = (event) =>{
    setRate(event.target.value)
  }
  
  function calculateRepayment() {
    const principal = Number(amount)
    const monthlyRate = Number(rate) / 100 / 12
    const payments = Number(loanTerm) * 12
    const monthlyPayment =
      principal * monthlyRate /
      (1 - Math.pow(1 + monthlyRate, -payments))

    return monthlyPayment.toFixed(2)
  }
  function calculateInterestOnly(){
   
  }
  function showResults() {
    let proceedToCalculation = true
    
    if (amount === '') {
      proceedToCalculation = false
      errorAmountRef.current.style.display = 'block'
    } else {
      errorAmountRef.current.style.display = 'none'
    }
    
    if (rate === '') {
      proceedToCalculation = false
      errorRateRef.current.style.display = 'block'
    } else {
      errorRateRef.current.style.display = 'none'
    }
    
    if (loanTerm === '') {
      proceedToCalculation = false
      errorTermRef.current.style.display = 'block'
    } else {
      errorTermRef.current.style.display = 'none'
    }
    
    if (selectedOption === '') {
      proceedToCalculation = false
      errorRadioRef.current.style.display = 'block'
    } else {
      errorRadioRef.current.style.display = 'none'
    }
    
    if (proceedToCalculation) {
      if (selectedOption === 'repayment') {
        setMonthlyPayment(calculateRepayment());                                                                                   
      }else{
        setMonthlyPayment(calculateInterestOnly())
      }
    }
    setdisplayResults(proceedToCalculation)
  }
  return (
    <>
      <div id="calculation-side">
        <div className="header">
          <h1 className="plus-jakarta-sans-700">Mortgage Calculator</h1>
          <h2 id="clear-all" className="plus-jakarta-sans-500">
            Clear All
          </h2>
        </div>
        <div className="input-fields">
          <div className="input-field">
            <label
              htmlFor="mortgage-amount-input"
              className="plus-jakarta-sans-500"
            >
              Mortgage Amount
            </label>
            <input
              id="mortgage-amount-input"
              className="plus-jakarta-sans-500"
              placeholder="$"
              value={amount}
              onChange={handleAmountChange}
            />
            <span ref={errorAmountRef} id="error-msg-amount" className="plus-jakarta-sans-500">This field is required</span>
          </div>
          <div className="input-field">
            <label
              htmlFor="mortgage-Term-input"
              className="plus-jakarta-sans-500"
            >
              Mortgage Term
            </label>
            <input
              id="mortgage-Term-input"
              className="plus-jakarta-sans-500"
              placeholder="years"
              value={loanTerm}
              onChange={handleTermChange}
            />
            <span ref={errorTermRef} id="error-msg-term" className="plus-jakarta-sans-500" >This field is required</span>
          </div>
          <div className="input-field">
            <label
              htmlFor="Interest-rate-input"
              className="plus-jakarta-sans-500"
            >
              Interest Rate
            </label>
            <input
              id="Interest-rate-input"
              className="plus-jakarta-sans-500"
              placeholder="%"
              value={rate}
              onChange={handleRateChange}
            />
            <span ref={errorRateRef} id="error-msg-rate" className="plus-jakarta-sans-500">This field is required</span>
          </div>
          <div className="input-field">
            <div className="radio-box">
              <input id="Mortgage-Type" type="radio" name='mortgage-type' value='repayment' checked={selectedOption === 'repayment'} onChange={handleChange}/>
              <label htmlFor="Mortgage-Type" className="plus-jakarta-sans-500">
                Repayment
              </label>
            </div>

            <div className="radio-box">
              <input id="Interest-Only" type="radio" name='mortgage-type' value='interestOnly' checked={selectedOption === 'interestOnly'} onChange={handleChange} />
              <label htmlFor="Interest-Only" className="plus-jakarta-sans-500">
                Interest Only
              </label>
            </div>
            <span ref={errorRadioRef} id="error-msg-radio" className="plus-jakarta-sans-500">This field is required</span>
          </div>
        </div>
        <button className="plus-jakarta-sans-700" onClick={showResults}>
          {" "}
          <img
            src={calculatorIcon}
            id="icon-calculator"
            
          />
          Calculate Repayments
        </button>
      </div>
      {displayResults ? <AfterResults monthlyPayment={monthlyPayment} /> : <BeforeResults/> }
      
      
    </>
  );
}
