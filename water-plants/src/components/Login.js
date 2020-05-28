import React from "react";
import {axiosWithAuth} from "../util/axiosWithAuth"

class Login extends React.Component {
  state = {
      "username": "",
      "password": "",
  };

  handleChange = e => {
    console.log(this.state)
    this.setState({
        ...this.state,
        [e.target.name]: e.target.value
    });
  };

  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", this.state)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        console.log(res);
        this.props.history.push("/protected");
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  render() {
    return (
      <div className="d-flex justify-content-center ">
        <form onSubmit={this.login}>
          <input
            className="form-control"
            type="text"
            name="username"
            value={this.state.username}
            placeholder="Username" 
            onChange={this.handleChange}
          />
          <input
            className="form-control"
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Password" 
            onChange={this.handleChange}
          />
          <button className="btn btn-primary btn-lg btn-block mt-3">Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;