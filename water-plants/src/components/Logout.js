import React, {Component} from "react";
import { Redirect } from "react-router-dom";
import { Button } from "semantic-ui-react";

class Logout extends Component {
    state = {
        navigate: false
    };

    logout = () => {
        window.localStorage.clear("token");
        this.setState({ navigate: true});
    };

    render() {
        const {navigate} = this.state;

        if (navigate) {
            return <Redirect to="/login" push={true} />;
        }
        return <Button  variant="primary" onClick={this.logout}>Log out</Button>;
    }
}

export default Logout;


