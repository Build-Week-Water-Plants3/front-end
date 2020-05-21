import React, {useState, useEffect} from 'react';
import * as yup from 'yup';

const Form = (props) => {


    return (
        <form action="">
            <input type="text">Name of Plant:</input>
        </form>
    )
}

export default Form;

/*   return db('plants')
    .join('users', 'plants.user_id', 'user.id')
    .join('species', 'plants.species_name', 'species.name' )
    .select('plants.id', 'plants.H2Ofrequency', 'plants.image', 'plants.species_name')
    .where({'plants.user_id': id})
*/
