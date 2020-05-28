import React from "react";
import {axiosWithAuth} from "../util/axiosWithAuth"

const Login = (props) => {

    const login = event => {
        event.preventDefault();
        axiosWithAuth()
            .post("/auth/login", props.currentUser)
            .then(res => {
                window.localStorage.setItem("token", res.data.jwt_token);
                console.log(res.data.jwt_token);
                props.setCurrentUser({...props.currentUser, id: res.data.id})
                console.log(res);
                props.history.push("/protected");
            })
            .catch(err => {
                console.log(err.message);
            });
    };

    return (
        <div className="d-flex justify-content-center ">
            <form onSubmit={login}>
                <input
                    className="form-control"
                    type="text"
                    name="username"
                    value={props.currentUser.username}
                    placeholder="Username"
                    onChange={(event) => {
                        event.persist();
                        props.handleUserChange(event)
                    }}
                />
                <input
                    className="form-control"
                    type="password"
                    name="password"
                    value={props.currentUser.password}
                    placeholder="Password"
                    onChange={(event) => {
                        event.persist();
                        props.handleUserChange(event)
                    }}
                />
                <button className="btn btn-primary btn-lg btn-block mt-3">Log in</button>
            </form>
        </div>
    );
}

export default Login;
