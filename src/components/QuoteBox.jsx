import "./styles/QuoteBox.css"

const QuoteBox = ( {phrase, handleRandomQuote} ) => {
  return (
    <section className='quoteBox'>

    <article className='quoteBox__phrase'>
      <p>{phrase}</p>
    </article>

    <button className='quoteBox__btn' onClick={handleRandomQuote}>
      <img 
      src="/images/load.png"
       alt="" />
    </button>

  </section>
  )
}

export default QuoteBox