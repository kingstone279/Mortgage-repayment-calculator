import '../src/BeforeResults.css'
export function BeforeResults() {
  return (
    <>
      <div className="result-side">
        <img
          src="../src/assets/images/illustration-empty.svg"
          alt="pending result"
        />
        <div id="text">
          <h1 className="plus-jakarta-sans-700">Results show here</h1>
          <p className="plus-jakarta-sans-500">
            Complete the form and click “calculate repayments” to see what your
            monthly repayments would be.
          </p>
        </div>
      </div>
    </>
  );
}
