import React from "react";
import {axiosWithAuth} from "../util/axiosWithAuth"

class Login extends React.Component {
  state = {
    saved: {
      username: "",
      password: "",
    }
  };

  handleChange = e => {
    this.setState({
      saved: {
        ...this.state.saved,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("https://water-my-plants3.herokuapp.com/api/auth/login", this.state.saved)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/protected");
      })
      .catch(err => {
        console.log("Err is: ", err);
      });
  };

  render() {
    return (
      <div className="d-flex justify-content-center">
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.saved.username}
            placeholder="Username" 
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.saved.password}
            placeholder="Password" 
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;