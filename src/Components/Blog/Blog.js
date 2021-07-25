import React from "react";
import CreatePosts from "../CreatePosts/CreatePosts";
import { Component } from "react";

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props);
  }

  render() {
    const form = JSON.parse(localStorage.getItem("form"));

    return <h1>{form.title}</h1>;
  }
}
