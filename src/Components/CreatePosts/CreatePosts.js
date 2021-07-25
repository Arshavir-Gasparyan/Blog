import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default class CreatePosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
    };
  }

  handleOnchangeTitle = (el) => {
    this.setState({
      title: el.target.value,
    });
  };

  handleOnchangeContent = (el) => {
    this.setState({
      content: el.target.value,
    });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    const { title, content } = this.state;
    let form = { title, content };
    localStorage.setItem("form", JSON.stringify(form));
  };

  render() {
    return (
      <Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <h2>Tell us your story</h2>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            onChange={this.handleOnchangeTitle}
            type="text"
            value={this.state.title}
            id="standard-basic"
            label="Title"
          />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <TextField id="standard-basic" label="Content" />
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
            <Link to="/">click</Link>
          </Button>
        </Grid>
      </Grid>
    );
  }
}
