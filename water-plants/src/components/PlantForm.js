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
        setPlants([...plants, newPlant]);
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
        </form>
    )
}

/***************
 EXPORTS
 ***************/
export default PlantForm;
