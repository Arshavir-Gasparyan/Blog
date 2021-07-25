import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import TextField from "@material-ui/core/TextField";

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
      <div>
        <TextField
          onChange={this.handleOnchangeTitle}
          type="text"
          value={this.state.title}
          id="standard-basic"
          label="Standard"
        />
        <TextField id="standard-basic" label="Standard" />

        <button onClick={this.onSubmitHandler}>
          <Link to="/">click</Link>
        </button>
        <h2>{this.state.title}</h2>
      </div>
    );
  }
}
