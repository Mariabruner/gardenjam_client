import React, {useState} from 'react';

const ParksApp = () => {
  const [result, setResult] = useState();
  const [query, setQuery] = useState('');
  
  return(
    <div className='main'>
      <div>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={fetcher}>Click for the Park Picture Search</button>
      </div>
    </div>
  )
  const fetcher = () => {
    fetch('https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=ecZanu5QLHmV2m4qfjdv2Qxyv3duOJ7mnwz2whSj')
      .then(res => {
        if(res.statis != 200){
          throw new Error('fetch error');
        } else return res.json();
      })
      .then(json => {
        if(json.results.length ===0){
          throw new Error('no results');
        } else {
          const parkNum = Math.floor(Math.random()*json.results.length);
          setResult(json.results[parkNum]);
          console.log(json.results[parkNum])
        }
      })
      .catch(err => console.log(err))
  }
}

export default ParksApp;