import React from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",

      registration: [],
    };
  }
  handleUsernameChange = (el) => {
    this.setState({
      username: el.target.value,
    });
  };

  handlePasswordChange = (el) => {
    this.setState({
      password: el.target.value,
    });
  };

  componentDidMount() {
    const register = JSON.parse(localStorage.getItem("reg"));
    // console.log(register);
    this.setState({
      registration: register || [],
    });
  }
  onSubmitHandler = (e) => {
    e.preventDefault();
    const { username, password, registration } = this.state;

    let obj = {
      username,
      password,
    };

    registration.push({ obj });
    localStorage.setItem("reg", JSON.stringify(registration));
  };

  render() {
    return (
      <div>
        <h2>Registration</h2>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            value={this.state.username}
            onChange={this.handleUsernameChange}
            type="text"
            id="standard-basic"
            label="Username"
          />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            value={this.state.password}
            onChange={this.handlePasswordChange}
            type="password"
            id="standard-basic"
            label="Password"
          />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            onClick={this.onSubmitHandler}
            variant="outlined"
            color="primary"
          >
            <Link to="CreatePage">logIn</Link>
          </Button>
        </Grid>
      </div>
    );
  }
}
