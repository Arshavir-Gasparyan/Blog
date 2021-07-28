import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Grid, Container } from "@material-ui/core";
import LogIn from "../../Pages/LogIn/Login";
import { style } from "@material-ui/system";

export default class CreatePosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      id: "",
      posts: [],
    };
  }

  handleOnchangeTitle = (el) => {
    this.setState({
      title: el.target.value,
      id: Math.random(),
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

    const { title, content, posts, id } = this.state;
    let obj = {
      title,
      content,
      id,
    };

    posts.push(obj);
    console.log(obj);
    localStorage.setItem("form", JSON.stringify(posts));
  };

  render() {
    return (
      <Container maxWidth="sm">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <h2>Create Your Post</h2>
        </Grid>
        <Grid>
          <TextField
            style={{ width: "100%", marginTop: "20px" }}
            onChange={this.handleOnchangeTitle}
            type="text"
            value={this.state.title}
            id="standard-basic"
            label="Title"
          />
        </Grid>
        <Grid>
          <TextField
            style={{ width: "100%", marginTop: "20px" }}
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
            style={{ backgroundColor: "black", marginTop: "20px" }}
            onClick={this.onSubmitHandler}
            variant="outlined"
            color="primary"
          >
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              click
            </Link>
          </Button>
        </Grid>
      </Container>
    );
  }
}
