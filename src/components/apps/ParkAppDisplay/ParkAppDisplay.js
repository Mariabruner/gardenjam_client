import React, { useState } from 'react';
import { Media } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'

const ParkAppDisplay = (props) => {
  console.log(props)


  return (
    <div className="parkList" width="50%">
      {props.park.map((item, idx) =>
        <Media className="listItem">
          <Media left href={item.url}>
            <Media object src={item.images[0].url} alt="Generic placeholder image" width="40%" id="parkPhoto"/>
          </Media>
          <Media body>
            <Media heading>
              {item.fullName} - {item.addresses[0].city}, {item.addresses[0].stateCode}
            </Media>
            <div>
            {item.description}
            <br></br>
            <h6>Weather Info:</h6>
            {item.weatherInfo}
            <br></br>
            <h6>Operating Hours:</h6>
            {item.operatingHours[0].description}
            </div>
          </Media>
        </Media>
      )}
    </div>
  )
}

export default ParkAppDisplay;