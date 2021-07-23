import React, { useState } from 'react';
import { Media } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'

const ParkAppDisplay = (props) => {
  console.log(props)

  return (
    <div className="parkList" width="50%">
      {props.park.map((item, idx) =>
        <Media className="listItem">
          <Media left href="#">
            <Media object src={item.images[0].url} alt="Generic placeholder image" width="25%"/>
          </Media>
          <Media body>
            <Media heading>
              {item.fullName}
            </Media>
            {item.description}
          </Media>
        </Media>
      )}
    </div>
  )
}

export default ParkAppDisplay;