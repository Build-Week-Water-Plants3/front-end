import React from 'react'
import dummyPlants from "../dummydata";
import axios from 'axios';


const PlantsDisplay = props => {
    return (
        <div style={{borderStyle: "solid", margin: '20px'}}>
            <h2>Your Plants:</h2>
            {dummyPlants.map((plant) =>
                <ul>
                    <li>ID: {plant.id}</li>
                    <li>Nickname: {plant.nickname} </li>
                    <li>Species: {plant.species} </li>
                    <li>Water {plant.h2oFrequencyTimes} times per {plant.h2oFrequencyPeriod}</li>
                    <li>Image: <img src={plant.image}/></li>
                </ul>
            )}
        </div>
    );
};

export default PlantsDisplay;

