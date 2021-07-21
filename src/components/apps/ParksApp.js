import React, {useEffect, useState} from 'react';
import ParkAppDisplay from './ParkAppDisplay/ParkAppDisplay'

const ParksApp = () => {
  const [result, setResult] = useState();
  const [query, setQuery] = useState('');
  
  const [state, setState] = useState([])
  
  const api = 'https://developer.nps.gov/api/v1/parks?parkCode={query}&api_key=ecZanu5QLHmV2m4qfjdv2Qxyv3duOJ7mnwz2whSj'
  
  
  /*useEffect(() =>{
    fetch(api)
    .then(res => res.json())
    .then(info => setState(info.data))
  }, [])

  console.log(state)

  Object.values(state.info).forEach(element => {
    console.log(element);
  });

  {fullName:parkCode}
}
*/
  

  const fetcher = () => {
    fetch(`https://developer.nps.gov/api/v1/parks?q=${query}&api_key=ecZanu5QLHmV2m4qfjdv2Qxyv3duOJ7mnwz2whSj`)
      .then(res => {
        if(res.status !== 200){
          throw new Error('fetch error');
        } else return res.json();
      })
      .then(json => {
        //const parkNum = Math.floor(Math.random()*json.data.length);
        //const parkName = json.data[parkNum].fullName;
        //console.log({query});
        const parkName = json.data[0].parkCode;
/*
        json.data.forEach(element => {
          if(element.parkCode.includes(parkName)){
            //setResult(json.data[element].images.url[0]);
            console.log(element.fullName);
          } else {console.log("NONO")}
        });

        */
        if(json.data.length === 0){
          throw new Error('no results');
        } else {
          setResult(json.data);
          console.log(json.data)
        }
      })
      .catch(err => console.log(err))
//map through results and show data from the parks

  }
  return(
    <div className='main'>
      <div>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={fetcher}>Click for the Park Picture Search</button>
        {!result ? null : <ParkAppDisplay park={result} />}
      </div>
    </div>
  )
}

export default ParksApp;