import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Grid } from "@material-ui/core";

export default class CreatePosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      posts: [],
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
  componentDidMount() {
    const post = JSON.parse(localStorage.getItem("form"));
    console.log(post);
    this.setState({
      posts: post || [],
    });
  }
  onSubmitHandler = (e) => {
    e.preventDefault();
    const { title, content, posts } = this.state;
    let obj = {
      title,
      content,
    };
    posts.push(obj);
    console.log(obj);
    localStorage.setItem("form", JSON.stringify(posts));
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
          <TextField
            onChange={this.handleOnchangeContent}
            value={this.state.content}
            id="standard-basic"
            label="Content"
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
            <Link to="/">click</Link>
          </Button>
        </Grid>
      </Grid>
    );
  }
}
