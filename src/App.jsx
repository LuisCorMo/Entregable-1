import { useState } from 'react'
import './App.css'
import dbQuotes from "./db/quote.json"
import { getRandom } from './utils/random'
import QuoteBox from './components/QuoteBox'

const bgImages = ["bg1", "bg2", "bg3", "bg4"]
function App() {
   const [quote, setQuote] = useState(getRandom(dbQuotes))
   const [bgImage, setBgImage] = useState(getRandom(bgImages))

   const handleRandomQuote = () => {
    setQuote(getRandom(dbQuotes))
    setBgImage(getRandom(bgImages))
   }

  return (
    <main className={`app ${bgImage}`}>

      <section className='app__container'>

        <h1>Universe Tips</h1>

       <QuoteBox handleRandomQuote={handleRandomQuote} phrase={quote.phrase} />

        <footer>
          <h3>Author: {quote.author}</h3>
        </footer>

      </section>
     
    </main>
  )
}

export default App
