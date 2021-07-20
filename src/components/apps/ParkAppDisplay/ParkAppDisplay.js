import React from 'react';

const ParkAppDisplay = ({park})=> {
  return(
    <div>
      {park.images.url}
    </div>
  )
}

export default ParkAppDisplay;