
import React from 'react'


const PlantSubmision = props => {
  return (
    <div className="new-plant">
      {props.newPlant.map(plant => (
        <div className="plants"   >
          <h2>{plant.nickname}</h2>
          <p>{plant.species}</p>
          <p>{plant.h2oFrequency}</p>
          <p>{plant.image}</p>
       
     
          
        </div>
      ))}
    </div>
  );
};

export default PlantSubmision