import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@material-ui/core";
import { Avatar, FormHelperText, Grid } from "@material-ui/core";
import { grid } from "@material-ui/system";

const useStyles = makeStyles({
  root: {
    width: 600,
    margin: 30,
  },
  media: {
    height: 40,
  },
});
export default function Posts(params) {
  const form = JSON.parse(localStorage.getItem("form"));
  // const avatar = form.title[0];
  const classes = useStyles();
  console.log();
  return (
    <div>
      {form.map((posts) => (
        <Card className={classes.root}>
          <Grid container direction="column">
            <CardActionArea>
              {
                <CardMedia
                  className={classes.media}
                  title="Contemplative Reptile"
                />
              }
              {
                <Avatar className={classes.orange}>
                  {posts.title ? posts.title[0].toUpperCase() : null}
                </Avatar>
              }
              {new Date().toLocaleTimeString()}
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {posts.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {posts.content}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Grid container direction="row-reverse">
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </Grid>
            </CardActions>
          </Grid>
        </Card>
      ))}
    </div>
  );
}
