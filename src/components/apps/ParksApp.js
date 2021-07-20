import React, {useState} from 'react';
import ParkAppDisplay from './ParkAppDisplay/ParkAppDisplay'

const ParksApp = () => {
  const [result, setResult] = useState();
  const [query, setQuery] = useState('');
  
  const fetcher = () => {
    fetch('https://developer.nps.gov/api/v1/parks?api_key=ecZanu5QLHmV2m4qfjdv2Qxyv3duOJ7mnwz2whSj')
      .then(res => {
        if(res.status !== 200){
          throw new Error('fetch error');
        } else return res.json();
      })
      .then(json => { 

          const parkNum = Math.floor(Math.random()*json.results.length);
          setResult(json.results[parkNum]);
          console.log(json.results[parkNum])
        
      })
      .catch(err => console.log(err))
  }
  return(
    <div className='main'>
      <div>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={fetcher}>Click for the Park Picture Search</button>
        {!result || !result.images.url ? null : <ParkAppDisplay park={result} />}
      </div>
    </div>
  )
}

export default ParksApp;