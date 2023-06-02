import "./styles/QuoteBox.css"

const QuoteBox = ( {phrase, handleRandomQuote} ) => {
  return (
    <section className='quoteBox'>

    <button className='quoteBox__btn' onClick={handleRandomQuote}>New Information</button>

    <article className='quoteBox__phrase'>
      <p>{phrase}</p>
    </article>

  </section>
  )
}

export default QuoteBox