import React from "react";
import styles from "./Header.Module.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import CreatePosts from "../CreatePosts/CreatePosts";
import Blog from "../Blog/Blog";
import LogIn from "../../Pages/LogIn/Login";

export default function Header(params) {
  return (
    <Router>
      <header className={styles.header}>
        <div className={styles.posts}>
          <Link style={{ color: "white", textDecoration: "none" }} to="/">
            <span>Blog</span>
          </Link>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="CreatePage"
          >
            <span>Create Post</span>
          </Link>
        </div>
        <div className={styles.logIn}>
          <Link style={{ color: "white", textDecoration: "none" }} to="LogIn">
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
          <LogIn />
        </Route>
      </Switch>
    </Router>
  );
}
