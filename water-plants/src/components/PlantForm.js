/***************
 LIBRARIES
 ***************/
import React, {useState, useEffect} from 'react';
import * as yup from 'yup';
import {axiosWithAuth} from "../util/axiosWithAuth";


const PlantForm = (props) => {
    /***************
     VALIDATION
     ***************/
    const formSchema = yup.object().shape({
        "nickname": yup.string().required("Nickname is a required field."),
        "species_name": yup.string().required("Species name is a required field."),
        "H2Ofrequency": yup.string().required("You must describe how often to water your plant"),
        "image": yup.string().url().required("must include a plant image URL")
    });

    /***************
     HOOKS
     ***************/
        //set a blank plant as the initial state....this is mainly so that the user_id can be set
    const blankPlant = {
        nickname: "",
        H2Ofrequency: "",
        image: "",
        species_name: "",
        user_id: props.currentUser.id
    }

    const [newPlant, setNewPlant] = useState(blankPlant);

    //create state to track whether the user's inputs to the forms are valid according to Yup; initially false b/c empty inputs = invalid
    const [newPlantValidity, setNewPlantValidity] = useState(false);
    //check validity every time the state of the inputs changes and set to true once Yup validation passes
    useEffect(() => {
        formSchema.isValid(newPlant).then(valid => {
            setNewPlantValidity(valid);
        })
    }, [newPlant, formSchema])


    /***************
     EVENT HANDLERS
     ***************/
        //handle changes to the form inputs
    const handleChange = (event) => {
        setNewPlant({...newPlant, [event.target.name]: event.target.value})
        console.log(newPlant);
    }

    //handle submission of the completed form
    const handleSubmit = (event) => {
        event.preventDefault();
        //if inputs pass Yup validation, post them to the server to be permanently added as a new plant
        if (newPlantValidity === true) {
            console.log(props.currentUser.id);
            console.log(newPlant);
            axiosWithAuth()
                .post(`/users/${props.currentUser.id}/plants`, newPlant)
                .then(res => {
                    console.log(newPlant);
                    console.log(res);
                })
                .catch(err => {
                    console.log(err.message);
                });
            setNewPlant({...blankPlant})
            //if inputs fail Yup validation, warn user need valid inputs
        } else {
            alert("You must validly complete all inputs before submitting");
        }
    }


    /***************
     DISPLAY
     ***************/
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <h1 className="m-5">Add a New Plant!</h1>
            <div class="form-group">Nickname: <input type='text' name={'nickname'} value={newPlant.nickname} onChange={handleChange}/>
            </div>
            <div class="form-group">Species: <input type='text' name={'species_name'} value={newPlant.species_name}
                                 onChange={handleChange}/></div>
            <div class="form-group">How Often To Water Your Plant: <input type='text' name={'H2Ofrequency'} value={newPlant.H2Ofrequency}
                                                       onChange={handleChange}/></div>
            <div class="form-group">Image (URL): <input type="url" name={'image'} value={newPlant.image} onChange={handleChange}/></div>
            <button class="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </form>
        </div>
    )
}

/***************
 EXPORTS
 ***************/
export default PlantForm;
