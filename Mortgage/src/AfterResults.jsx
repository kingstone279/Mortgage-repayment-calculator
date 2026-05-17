import '../src/AfterResults.css'
export function AfterResults({ monthlyPayment }) {
  return (
    <>
       <div className="result-side">
          <h1 className="plus-jakarta-sans-700">Your Results</h1>
          <p className="plus-jakarta-sans-500" >Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
          <div className="results-box">
            <div className="box1">
                <h2 className="plus-jakarta-sans-500">Your monthly repayments</h2>
                <p className="plus-jakarta-sans-500" id='monthly-pay-figure'>$ {Number(monthlyPayment).toLocaleString()}</p>
            </div>
            <div className="box2">
               <h2 className="plus-jakarta-sans-500" id='total-Pay'>Total you'll repay over the term</h2>
               <p className="plus-jakarta-sans-500">50,0000</p>
            </div>
          </div>
      </div>
    </>
  );
}
