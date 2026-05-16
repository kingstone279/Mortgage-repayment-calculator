import './CalculatorSheet.css';
import calculatorIcon from "./assets/images/icon-calculator.svg"
export function CalculatorSheet(){
   return(
     <>
       <div id="calculation-side">
           <div className="header">
              <h1 className='plus-jakarta-sans-700'>Mortgage Calculator</h1>
              <h2 id='clear-all' className='plus-jakarta-sans-500'>Clear All</h2>
           </div>
          <div className="input-fields">
            <div className="input-field">
                <label htmlFor="mortgage-amount-input" className='plus-jakarta-sans-500'>Mortgage Amount</label>
                <input id="mortgage-amount-input" placeholder='$' />
            </div>
            <div className="input-field">
                <label htmlFor="mortgage-Term-input"  className='plus-jakarta-sans-500'>Mortgage Term</label>
                <input id="mortgage-Term-input"  placeholder='years' />
            </div>
            <div className="input-field">
                <label htmlFor="Interest-rate-input"  className='plus-jakarta-sans-500'>Interest Rate</label>
                <input id="Interest-rate-input"  placeholder='%'/>
            </div>
           <div className="input-field">

                <div className="radio-box">
                  <input id="Mortgage-Type" type="radio"/>
                  <label htmlFor="Mortgage-Type"  className='plus-jakarta-sans-500'>Repayment</label>
                </div>

                <div className="radio-box">
                  <input id="Interest-Only" type="radio"  />
                  <label htmlFor="Interest-Only" className='plus-jakarta-sans-500'>Interest Only</label>
                </div>
            </div>
          </div>
          <button className='plus-jakarta-sans-700'> <img src={calculatorIcon} id="icon-calculator" />Calculate Repayments</button>
       </div>
       <div className="result-side">
          <img src="../src/assets/images/illustration-empty.svg" alt="pending result" />
          <div id="text">
              <h1 className='plus-jakarta-sans-700'>Results show here</h1>
              <p className='plus-jakarta-sans-500'> Complete the form and click “calculate repayments” to see what your monthly repayments would be.</p>
          </div>
          
       </div>
     </>
   )
}