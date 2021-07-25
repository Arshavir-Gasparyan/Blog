import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Avatar, FormHelperText, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
export default function Posts(params) {
  const form = JSON.parse(localStorage.getItem("form"));
  //   const avatar = form.title[0];
  const classes = useStyles();
  console.log();
  return (
    <>
      {form.map((posts) => (
        <Card className={classes.root}>
          <CardActionArea>
            {/* <CardMedia className={classes.media} title="Contemplative Reptile" /> */}
            {/* <Avatar className={classes.orange}>
                   {form.title ? avatar : null}
                 </Avatar> */}
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
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}
