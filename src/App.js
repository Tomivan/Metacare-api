import React, { useState, useEffect} from 'react';
import Starwars from './assets/images/star-wars.png';
import './App.css';

function App() {
  const [state, setState] = useState(null);

  useEffect(() => {
      fetch('https://swapi.dev/api/people', {
          method: 'GET'
      })  
      .then(resp => resp.json())
      .then(
          response => {
            console.log(response)
              setState(response)
          }
      )   
  }, [])
  return (
    <div className="App">
      <img src={Starwars} alt="The official logo of the star wars movie" className="logo"/>
      <section className="section">
      <select>
        <option>-No Movie Selected-</option>
        {state && state.results.map(data =>(<option>{data.title} --{data.release_date}</option>))}
      </select>
      </section>
    </div>
  );
}

export default App;
