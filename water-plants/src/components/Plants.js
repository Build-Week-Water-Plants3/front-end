


import PlantForm from './PlantForm'

import React, { useState, useEffect } from "react";
import PlantSubmision from './PlantsDisplay'



const PlantSetter = (props) => {

  const [newPlant, setNewPlant] = useState(
    // dummyPlants)
    [
     {
       id: 1,
       nickname: "",
       species: "",
       h2oFrequency: "",
       image: ""
       }
 
   ]);






  
  const handleSubmit = (newestPlant) => {
    setNewPlant([...newPlant, newestPlant]);
  }
console.log(newPlant)
  return (
    <div className="Plant-Submision">
    <div>
      <PlantForm onSubmit={handleSubmit}/>
      <PlantSubmision newPlant={newPlant}/>

      
      
  
      
      
      <div className="post-border">

       
    </div>

</div>
    </div>
  );
  }


export default PlantSetter
