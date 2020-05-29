import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {Button} from "semantic-ui-react";

const Logout = (props) => {
    /* state = {
         navigate: false
     };

     logout = () => {
         window.localStorage.clear("token");
         this.setState({ navigate: true});
     };*/

    /*    render() {
            const {navigate} = this.state;*/
    /*
            if (navigate) {
                return <Redirect to="/" push={true} />;
            }*/

    return (
        <div>
            <Button variant="primary" onClick={() => {
                props.setCurrentUser({"username": "", "password": "", id: null})
            }}>
                Logout
            </Button>
        </div>
    )
}


export default Logout;

