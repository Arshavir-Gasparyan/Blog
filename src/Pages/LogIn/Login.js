import React from "react";
import { TextField, Grid, Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";

export default class LogIn extends React.Component {
  static id = +localStorage.getItem("currentId") || 1;
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      users: localStorage.getItem("users")
        ? JSON.parse(localStorage.getItem("users"))
        : [],
      comments: [],
      currentUser: false,
      inputsValue: {
        name: "",
        pass: "",
      },
    };
  }

  createUserHandler = (name, pass) => {
    let newUsers = [...this.state.users];
    let currentUser;

    if (newUsers.every((user) => user.name !== name)) {
      let newUser = {
        id: LogIn.id++,
        name,
        pass,
      };
      currentUser = {
        name: newUser.name,
        id: newUser.id,
      };
      newUsers.push(newUser);
    } else {
      let user = newUsers.find((user) => user.name === name);
      currentUser = {
        name: user.name,
        id: user.id,
      };
    }

    localStorage.setItem("currentId", LogIn.id);
    localStorage.setItem("users", JSON.stringify(newUsers));

    this.setState({
      users: newUsers,
      currentUser,
    });
  };

  inputsHandler = (e, type) => {
    let temp = "";
    switch (type) {
      case "name":
        temp = e.target.value;
        break;
      case "pass":
        temp = e.target.value;
        break;
      default:
        return;
    }

    this.setState({
      inputsValue: {
        ...this.state.inputsValue,
        [type]: temp,
      },
    });
  };

  render() {
    const { name, pass } = this.state.inputsValue;

    return (
      <Container maxWidth="sm">
        <Grid
          style={{ fontSize: "30px" }}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          Registration
          <TextField
            style={{ width: "100%", marginTop: "20px" }}
            onChange={(e) => this.inputsHandler(e, "name")}
            placeholder="enter name"
            value={this.state.username}
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
            style={{ width: "100%", marginTop: "20px" }}
            onChange={(e) => this.inputsHandler(e, "pass")}
            placeholder="enter password"
            value={this.state.password}
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
            style={{
              marginTop: "20px",
              backgroundColor: "black",
              color: "white",
            }}
            onClick={() => this.createUserHandler(name, pass)}
            variant="outlined"
            color="primary"
          >
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="CreatePage"
            >
              LogIn
            </Link>
          </Button>
        </Grid>
      </Container>
    );
  }
}
