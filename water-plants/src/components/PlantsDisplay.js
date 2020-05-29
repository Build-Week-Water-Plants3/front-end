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
                <div><img src={plant.image}/>
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

export default PlantsDisplay;

