/***************
 LIBRARIES
 ***************/
import React, {useEffect, useState} from 'react'
import {axiosWithAuth} from "../util/axiosWithAuth";


const PlantsDisplay = props => {

    /***************
     HOOKS
     ***************/
        //state which tracks the user's plants (received from the server)
    const [userPlants, setUserPlants] = useState([]);

    //get the user's plants from the server and set them to state
    useEffect(() => {
        axiosWithAuth()
            .get(`/users/${props.currentUser.id}/plants`)
            .then(res => {
                setUserPlants(res.data);
                console.log(res);
            })
            .catch(err => {
                console.log(err.message);
            });
    }, []);


    /***************
     DISPLAY
     ***************/
    return (
        <div style={{borderStyle: "solid", margin: '20px'}}>
            <h2>Your Plants:</h2>
            {/*map over the user's plants and create a plant card for each one*/}
            {userPlants.map((plant) =>
                <div key={plant.id}>
                    <img src={plant.image}/>
                    <ul>
                        <li>Nickname: {plant.nickname} </li>
                        <li>Species: {plant.species_name} </li>
                        <li>How often to water: {plant.H2Ofrequency}</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

/***************
 EXPORTS
 ***************/
export default PlantsDisplay;

