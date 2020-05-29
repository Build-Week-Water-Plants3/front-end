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
    const blankPlant = {
        nickname: "",
        H2Ofrequency: "",
        image: "",
        species_name: "",
        user_id: props.currentUser.id
    }
    const [newPlant, setNewPlant] = useState(blankPlant);

    const [newPlantValidity, setNewPlantValidity] = useState(false);

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
        console.log(newPlant);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
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
        } else {
            alert("You must validly complete all inputs before submitting");
        }
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
            <div>How Often To Water Your Plant: <input type='text' name={'H2Ofrequency'} value={newPlant.H2Ofrequency}
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
