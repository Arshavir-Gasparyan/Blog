import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@material-ui/core";
import { Avatar, Grid } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";

// import DeleteIcon from "@material-ui/icons/Delete";

// const useStyles = makeStyles({
//   root: {
//     width: 600,
//     margin: 30,
//   },
//   media: {
//     height: 40,
//   },
// });
export default class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: JSON.parse(localStorage.getItem("users")),
      form: JSON.parse(localStorage.getItem("form")),
    };
  }

  // const classes = useStyles();
  // console.log(users);

  handleClick = (id) => {
    const newPosts = this.state.form.filter((post) => post.id !== id);
    this.setState({
      posts: newPosts,
    });
  };
  render() {
    return (
      <>
        {this.state.users.id !== 0 ? (
          <Grid container direction="column-reverse">
            {this.state.form.map((posts) => (
              <Card>
                <Grid container direction="column">
                  <CardActionArea>
                    {<CardMedia title="Contemplative Reptile" />}
                    {
                      <Avatar>
                        {posts.title ? posts.title[0].toUpperCase() : null}
                      </Avatar>
                    }

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {posts.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {posts.content}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <IconButton
                      aria-label="delete"
                      size="large"
                      onClick={() => this.handleClick(posts.id)}
                    >
                      <DeleteIcon fontSize="inherit" />
                    </IconButton>
                    <Grid container direction="row-reverse">
                      <Button size="small" color="primary">
                        Learn More
                      </Button>
                    </Grid>
                  </CardActions>
                </Grid>
              </Card>
            ))}
          </Grid>
        ) : null}
      </>
    );
  }
}
