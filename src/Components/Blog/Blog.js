import React from "react";
import { Component } from "react";
import Posts from "../Posts/posts";
import style from "./Blog.Module.css";

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props);
  }

  render() {
    return <div className={style.posts}>{<Posts />}</div>;
  }
}
