import axios from 'axios';
import './App.css';
import { useState } from 'react';

function App() {
  const [simpsonQuote, setSimpsonQuote] = useState(
    {
      "quote": "By chilling my loins I increase the chances of impregnating my wife.",
      "character": "Apu Nahasapeemapetilon",
      "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
      "characterDirection": "Left"
    }
  )

  const getSimpsonQuote = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then((resp) => resp.data)
      .then((data) => setSimpsonQuote(data[0]))
      .then(console.log("simpsonQuote: ", simpsonQuote))
  };

  return (
    <div className="App">
      <div className='quoteDisplay'>
        <img src={simpsonQuote.image} alt={simpsonQuote.character} />
        <p>{simpsonQuote.character}</p>
        <p>{simpsonQuote.quote}</p>
      </div>
      <button
        type="button"
        onClick={getSimpsonQuote}>Get Your Quote</button>
    </div>
  );
}

export default App;
