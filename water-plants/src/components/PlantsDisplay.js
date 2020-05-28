import React, {useEffect, useState} from 'react'
import dummyPlants from "../dummydata";
import {axiosWithAuth} from "../util/axiosWithAuth";


const PlantsDisplay = props => {
    const [userPlants, setUserPlants] = useState([]);

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

    return (
        <div style={{borderStyle: "solid", margin: '20px'}}>
            <h2>Your Plants:</h2>
            {userPlants.map((plant) =>
                <ul>
                    <li>Nickname: {plant.nickname} </li>
                    <li>Species: {plant.species_name} </li>
                    <li>{plant.h2Ofrequency}</li>
                    <li>Image: <img src={plant.image}/></li>
                </ul>
            )}
        </div>
    );
};

export default PlantsDisplay;

