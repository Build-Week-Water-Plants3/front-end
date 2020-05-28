/***************
 LIBRARIES
 ***************/
import React, {useState, useEffect} from 'react';
import * as yup from 'yup';
import {axiosWithAuth} from "../util/axiosWithAuth";
import axios from 'axios'

/***************
 COMPONENTS/DATA
 ***************/
import dummyPlants from "../dummydata";

const PlantForm = (props) => {
    /***************
     VALIDATION
     ***************/
    const formSchema = yup.object().shape({
        "nickname": yup.string().required("Nickname is a required field."),
        "species_name": yup.string().required("Species name is a required field."),
        //h2oFrequencyTimes: yup.string().required("Must choose a number of times to water plant"),
        //h2oFrequencyPeriod: yup.string().required("Must choose a watering period"),
        "image": yup.string().url().required("must include a plant image URL")
    });

    /***************
     HOOKS
     ***************/
    const [plants, setPlants] = useState(dummyPlants);
    const blankPlant = {
        //id: plants.length + 1,
        nickname: "",
        H2Ofrequency: "a few times",
        image: "",
        //h2oFrequencyTimes: "1",
        //h2oFrequencyPeriod: "day",
        species_name: "",
        user_id: props.currentUser.id
    }
    const [newPlant, setNewPlant] = useState(blankPlant);

    //const [newPlantValidity, setNewPlantValidity] = useState(false);

    /*    useEffect(() => {
            formSchema.isValid(newPlant).then(valid => {
                setNewPlantValidity(valid);
            })
        }, [newPlant])*/


    /***************
     EVENT HANDLERS
     ***************/
    const handleChange = (event) => {
        setNewPlant({...newPlant, [event.target.name]: event.target.value})
        console.log(newPlant);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        /*if (newPlantValidity === true) {*/
        console.log(props.currentUser.id);
        console.log(newPlant);
        axiosWithAuth()
            .post(`/users/${props.currentUser.id}/plants`, /*JSON.stringify(*/newPlant/*)*/)
            .then(res => {
                console.log(newPlant);
                console.log(res);
            })
            .catch(err => {
                console.log(err.message);
            });
        setNewPlant({...blankPlant})
        /*} else {*/
        /*alert("You must validly complete all inputs before submitting");*/
    }


    /***************
     DISPLAY
     ***************/
    return (
        <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={handleSubmit}>
            <h1>Add a New Plant!</h1>
            <div>Nickname: <input type='text' name={'nickname'} value={newPlant.nickname} onChange={handleChange}/>
            </div>
            <div>Species: <input type='text' name={'species_name'} value={newPlant.species_name}
                                 onChange={handleChange}/></div>
            {/*  <div style={{display: 'flex', flexDirection: 'row'}}>Water the plant
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
            </div>*/}
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
                            <li>Nickname: {plant.nickname} </li>
                            <li>Species: {plant.species_name} </li>
                            <li>Water {plant.h2Ofrequency} times per {plant.h2oFrequencyPeriod}</li>
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
