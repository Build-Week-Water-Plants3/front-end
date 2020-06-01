// import axios from 'axios'
// import React, {useState, useEffect} from 'react';
// import {axiosWithAuth} from "../util/axiosWithAuth";
// import PlantsDisplay from './PlantsDisplay'
// import "../App.css";



// const UpdateButton = (props) => {
//     const [updatePlant, setUpdatePlant] = useState({nickname: '' ,species_name:'' , H2Ofrequency: '', image: ''});


  
//       const handleSubmit = (event) => {
//         event.preventDefault();
//   console.log(updatePlant)
       
//         axiosWithAuth()
//             .put(`/users/plants/8`, updatePlant)
//             .then(res => {
//                 setUpdatePlant(res.data);
//                 console.log(res);
//             })
//             .catch(err => {
//                 console.log(err.message);
//             });
    
//         /*} else {*/
//         /*alert("You must validly complete all inputs before submitting");*/
//     }
  
  
//     const handleChange = (event) => {
        
//         setUpdatePlant({ ...updatePlant, [event.target.name]: event.target.value });
//       };
  
//         return (


//             <form onSubmit={handleSubmit} className="formUpdate">
//                   <label htmlFor="Name">Plant Nickname:</label>
//                   <input className="name-input"
//                     id="nickname"
//                     type="text"
//                     name="nickname"
//                     placeholder="Please Enter a New Plant Nickname:"
//                     value={updatePlant.nickname}
//                     onChange={handleChange}
//                   />
//                     <label htmlFor="Name">Plant Species:</label>
//                   <input className="species-input"
//                     id="species"
//                     type="text"
//                     name="species_name"
//                     placeholder="Please Enter a New Plant Species:"
//                     value={updatePlant.species_name}
//                     onChange={handleChange}
//                   />
//                     <label htmlFor="Name">H2O Frequency:</label>
//                   <input className="h2o-input"
//                     id="h2o"
//                     type="text"
//                     name="H2Ofrequency"
//                     placeholder="Please Enter The Plant H2O Freq:"
//                     value={updatePlant.H2Ofrequency}
//                     onChange={handleChange}
//                   />
//                     <label htmlFor="Name">Plant Image:</label>
//                   <input className="image-input"
//                     id="image"
//                     type="text"
//                     name="image"
//                     placeholder="Please Enter the Plant IMG URL:"
//                     value={updatePlant.image}
//                     onChange={handleChange}
//                   />





//                   <button className='submit-button'
//                   type="submit">Update!</button>
         
//          </form> 
        
            
//           );
// }
  
//         export default UpdateButton
      
   