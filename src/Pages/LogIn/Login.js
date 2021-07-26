import React from "react";
import { TextField, Grid } from "@material-ui/core";
export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
          <TextField id="standard-basic" label="Username" />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <TextField id="standard-basic" label="Password" />
        </Grid>
      </div>
    );
  }
}
