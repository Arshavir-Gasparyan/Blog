import React from "react";
import styles from "./Header.Module.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import CreatePosts from "../CreatePosts/CreatePosts";
import Blog from "../Blog/Blog";

export default function Header(params) {
  return (
    <Router>
      <header className={styles.header}>
        <div className={styles.posts}>
          <Link to="/">
            <span>Blog</span>
          </Link>
          <Link to="CreatePage">
            <span>Create Post</span>
          </Link>
        </div>
        <div className={styles.logIn}>
          <Link to="LogIn">
            <span>LogIn</span>
          </Link>
        </div>
      </header>

      <Switch>
        <Route exact path="/">
          <Blog />
        </Route>
        <Route path="/CreatePage">
          <CreatePosts />
        </Route>
        <Route path="/LogIn">
          <h2>bbbbb</h2>
        </Route>
      </Switch>
    </Router>
  );
}
