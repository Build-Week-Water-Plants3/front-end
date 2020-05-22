/***************
 LIBRARIES
 ***************/
import React, {useState, useEffect} from 'react';
import * as yup from 'yup';

/***************
 COMPONENTS/DATA
 ***************/
import dummyPlants from "../dummydata";

const PlantForm = (props) => {
    /***************
     HOOKS
     ***************/
    const [plants, setPlants] = useState(dummyPlants);
    const blankPlant = {
        id: plants.length + 1,
        nickname: "",
        species: "",
        h2oFrequency: "",
        image: ""
    }
    const [newPlant, setNewPlant] = useState(blankPlant);

    /***************
     EVENT HANDLERS
     ***************/
    const handleChange = (event) => {
        setNewPlant({...newPlant, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setPlants([...plants, {...newPlant}]);
        console.log(plants);
        setNewPlant(blankPlant);
    }

    /***************
     DISPLAY
     ***************/
    return (
        <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={handleSubmit}>
            <h1>Add a New Plant!</h1>
            <div>Nickname: <input type='text' name={'nickname'} value={newPlant.nickname} onChange={handleChange}/>
            </div>
            <div>Species: <input type='text' name={'species'} value={newPlant.species} onChange={handleChange}/></div>
            {/*note to self: change water frequency selection to dropdown menus*/}
            <div>How Often to Water: <input type='text' name={'h2oFrequency'} value={newPlant.h2oFrequency}
                                            onChange={handleChange}/></div>
            <div>Image (URL): <input type="url" name={'image'} value={newPlant.image} onChange={handleChange}/></div>
            <button style={{maxWidth: '30%'}} onClick={handleSubmit}>Submit</button>

            {/*    /***************
                  DEBUGGING (REMOVE LATER)
                   ****************/}
            <div style={{borderStyle: "solid"}}>
                <h1>Debug Box (Temporary):</h1>
                <h2>Controlled inputs:</h2>
                <ul>
                    <li>ID: {newPlant.id}</li>
                    <li>Nickname: {newPlant.nickname} </li>
                    <li>Species: {newPlant.species} </li>
                    <li>Water: {newPlant.h2oFrequency} </li>
                    <li>Image: <img src={newPlant.image}/></li>
                </ul>
                <div>
                    <h2>All Plants:</h2>
                    {plants.map((plant) =>
                        <ul>
                            <li>ID: {plant.id}</li>
                            <li>Nickname: {plant.nickname} </li>
                            <li>Species: {plant.species} </li>
                            <li>Water: {plant.h2oFrequency} </li>
                            <li>Image: <img src={plant.image}/></li>
                        </ul>
                    )}
                </div>
            </div>
        </form>
    )
}

/***************
 EXPORTS
 ***************/
export default PlantForm;
