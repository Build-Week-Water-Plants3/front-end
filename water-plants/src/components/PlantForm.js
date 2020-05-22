import React, {useState, useEffect} from 'react';
import * as yup from 'yup';
import dummyPlants from "../dummydata";

const PlantForm = (props) => {

    const [newPlant, setNewPlant] = useState({});

    const handleChange = (event) => {
        setNewPlant({...newPlant, [event.target.name]: event.target.value})
    }

    return (
        <form style={{display: 'flex', flexDirection: 'column'}}>
            <h1>Add a New Plant!</h1>
            <div>Nickname: <input type='text' name={'nickname'} value={newPlant.nickname} onChange={handleChange}/>
            </div>
            <div>Species: <input type='text' name={'species'} value={newPlant.species} onChange={handleChange}/></div>
            {/*note to self: change water frequency selection to drop down menus*/}
            <div>How Often to Water: <input type='text' name={'h2oFrequency'} value={newPlant.h2oFrequency}
                                            onChange={handleChange}/></div>
            <div>Image (URL): <input type="url" name={'image'} value={newPlant.image} onChange={handleChange}/></div>
        </form>
    )
}

export default PlantForm;
