
import React, {useEffect, useState} from 'react'
import {axiosWithAuth} from "../util/axiosWithAuth";
import UpdateButton from './UpdateButton'
import {Link} from 'react-router-dom'


const PlantsDisplay = props => {


    const [userPlants, setUserPlants] = useState([]);
    const [destroy, setDestroy] = useState([]);

 
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
    }, [userPlants]);


    const deletePlant = (id) => {
        
        axiosWithAuth().delete(`/users/plants/${id}`)
        .then(res=>{ 
            
        })
        .catch(err => {
            console.log(err.message);
        });
    }

    return (
        <div className="container-fluid">
            <h2 className="m-5">Your Plants:</h2>

            {userPlants.map((plant) =>  
                <div key={plant.id}  >
                    <img class="img-fluid" src={plant.image} alt={`${plant.nickname}`}/>
                    <ul className="list-group">
                        <li class="list-group-item">Nickname: {plant.nickname} </li>
                        <li class="list-group-item">Species: {plant.species_name} </li>
                        <li class="list-group-item">How often to water: {plant.H2Ofrequency}</li>
                        <button onClick={()=>{deletePlant(plant.id)}}>DELETE</button>
{/*                         
                        <Link to="/updateplants"><button >UPDATE</button></Link> */}

                            

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

