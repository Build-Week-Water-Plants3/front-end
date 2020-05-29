import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {Button} from "semantic-ui-react";

const Logout = (props) => {
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


//old code which can be used again if we ever get the authentication working:
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
