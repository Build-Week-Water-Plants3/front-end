/***************
 LIBRARIES
 ***************/
import React, {useState, useEffect} from 'react';
import * as yup from 'yup';
import axios from 'axios';
/***************
 COMPONENTS/DATA
 ***************/
import dummyPlants from "../dummydata";

const PlantForm = (props) => {

    /***************
     VALIDATION
     ***************/
    const formSchema = yup.object().shape({
        nickname: yup.string().required("Nickname is a required field."),
        species: yup.string().required("Species name is a required field."),
        h2oFrequencyTimes: yup.string().required("Must choose a number of times to water plant"),
        h2oFrequencyPeriod: yup.string().required("Must choose a watering period"),
        image: yup.string().url().required("must include a plant image URL")
    });

    /***************
     HOOKS
     ***************/
    const [plants, setPlants] = useState(dummyPlants);
    const blankPlant = {
        id: plants.length + 1,
        nickname: "",
        species: "",
        h2oFrequencyTimes: "1",
        h2oFrequencyPeriod: "day",
        image: ""
    }
    const [newPlant, setNewPlant] = useState(blankPlant);

    const [newPlantValidity, setNewPlantValidity] = useState(false);

    const [users, setUsers] = useState([])

    useEffect(() => {
        formSchema.isValid(newPlant).then(valid => {
            setNewPlantValidity(valid);
        })
    }, [newPlant])


    /***************
     EVENT HANDLERS
     ***************/
    const handleChange = (event) => {
        setNewPlant({...newPlant, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //later on this will need to be changed into an axios post, or else a separate useEffect hook will be added that will tie to such a post
    //     if (newPlantValidity === true) {
    //         setPlants([...plants, {...newPlant}]);
    //         setNewPlant({...blankPlant, id: blankPlant.id += 1})
    //     } else {
    //         alert("You must validly complete all inputs before submitting");
    //     }
    // }
// const handleSubmit = (event) => {
   
    props.onSubmit(plants);
    axios
    .post("https://reqres.in/api/users", plants)
    .then(response =>  setUsers([...users, response.data]))
    .catch(err => console.log(err));
  };



    /***************
     DISPLAY
     ***************/
    return (
        <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={handleSubmit}>
            <h1>Add a New Plant!</h1>
            <div>Nickname: <input type='text' name={'nickname'} value={newPlant.nickname} onChange={handleChange}/>
            </div>
            <div>Species: <input type='text' name={'species'} value={newPlant.species} onChange={handleChange}/></div>
            <div style={{display: 'flex', flexDirection: 'row'}}>Water the plant
                <select style={{marginLeft: '10px', marginRight: '10px'}} name="h2oFrequencyTimes"
                        onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                times per
                <select style={{marginLeft: '10px', marginRight: '10px'}} name="h2oFrequencyPeriod"
                        onChange={handleChange}>
                    <option value="day">day</option>
                    <option value="week">week</option>
                    <option value="month">month</option>
                </select>
            </div>
            <div>Image (URL): <input type="url" name={'image'} value={newPlant.image} onChange={handleChange}/></div>
            <button style={{maxWidth: '30%'}} onClick={handleSubmit}>Submit</button>

            {/*    /***************
                  DEBUGGING (REMOVE LATER)
                   ****************/}
            <div style={{borderStyle: "solid", margin: '20px'}}>
                <h1>Debug Box (Temporary):</h1>
                <h2>Controlled inputs:</h2>
                <ul>
                    <li>ID: {newPlant.id}</li>
                    <li>Nickname: {newPlant.nickname} </li>
                    <li>Species: {newPlant.species} </li>
                    <li>Water {newPlant.h2oFrequencyTimes} times per {newPlant.h2oFrequencyPeriod}</li>
                    <li>Image: <img src={newPlant.image}/></li>
                </ul>
                <div>
                    <h2>All Plants:</h2>
                    {plants.map((plant) =>
                        <ul>
                            <li>ID: {plant.id}</li>
                            <li>Nickname: {plant.nickname} </li>
                            <li>Species: {plant.species} </li>
                            <li>Water {plant.h2oFrequencyTimes} times per {plant.h2oFrequencyPeriod}</li>
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
