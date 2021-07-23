import React, { useState } from 'react';
import ParkAppDisplay from './ParkAppDisplay/ParkAppDisplay'

const ParksApp = () => {
  const [result, setResult] = useState('');
  const [query, setQuery] = useState('');


  const api = 'https://developer.nps.gov/api/v1/parks?parkCode={query}&api_key=ecZanu5QLHmV2m4qfjdv2Qxyv3duOJ7mnwz2whSj'

  const fetcher = () => {
    fetch(`https://developer.nps.gov/api/v1/parks?q=${query}&api_key=ecZanu5QLHmV2m4qfjdv2Qxyv3duOJ7mnwz2whSj`)
      .then(res => {
        if (res.status !== 200) {
          throw new Error('fetch error');
        } else return res.json();
      })
      .then(json => {
        if (json.data.length === 0) {
          throw new Error('no results');
        } else {
          setResult(json.data);
          console.log(json.data)
        }
      })
      .catch(err => console.log(err))
    //map through results and show data from the parks

  }
  console.log(result)
  return (
    <div >
      <div className='main'>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={fetcher}>Click for the Park Picture Search</button>
      </div>  
        {!result ? <h1>Enter Your Search</h1> : <ParkAppDisplay park={result} />}
      
    </div>

  )
}

export default ParksApp;