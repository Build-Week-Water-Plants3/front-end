import React, {useState} from "react";
import { connect } from "react-redux";
import { PostRegister } from "../actions/index";

const RegisterForm = (props) => {
    const [formState, setFormState] = useState({
    "username": "",
	"password": "",
	"Number": ""
    });

    const changeHandler = e => {
        console.log(formState);
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }


    const submitHandler = e => {
        e.preventDefault();
        props.history.push('/login');
        props.PostRegister(formState);
        
        setFormState({

            "username": "",
            "password": "",
            "Number": ""

        });
    }

    return (
        <div className="d-flex justify-content-center ">
        <form onSubmit={submitHandler}>
            <h1>Register Here</h1>

            <input className="form-control" name="username" placeholder="username" 
            value={formState.username} onChange={changeHandler}/>

            <input className="form-control"name="password" placeholder="password" 
            value={formState.password} onChange={changeHandler}/>

            <input className="form-control"name="Number" placeholder="number" 
            value={formState.Number} onChange={changeHandler}/>

            <button className="btn btn-block btn-primary mt-3" type="submit" onClick={props.getFriend}>Submit</button>
        </form>
        </div>

    );
}

export default connect(null, { PostRegister: PostRegister })(RegisterForm);