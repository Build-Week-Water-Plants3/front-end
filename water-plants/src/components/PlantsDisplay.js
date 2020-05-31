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
    }, [props.currentUser.id]);


    /***************
     DISPLAY
     ***************/
    return (
        <div className="container-fluid">
            <h2>Your Plants:</h2>

            {userPlants.map((plant) =>
                <div key={plant.id}>
                    <img class="img-fluid" src={plant.image} alt={`${plant.nickname}`}/>
                    <ul className="list-group">
                        <li class="list-group-item">Nickname: {plant.nickname} </li>
                        <li class="list-group-item">Species: {plant.species_name} </li>
                        <li class="list-group-item">How often to water: {plant.H2Ofrequency}</li>
                    </ul>
                </div>
            )}
        </div>
    );
}


/***************
 EXPORTS
 ***************/
export default PlantsDisplay;

