import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Grid } from "@material-ui/core";
import axios from 'axios';
import PostsList from "../blog/PostsList"

import theHero from "../assets/images/parallax/4.jpg"

const useStyles = theme => ({
  hero: {
    backgroundImage: `url(${theHero})`,
    height: "450px",
    display: 'flex',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },
});

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://public-api.wordpress.com/rest/v1/sites/smhzw.wordpress.com/posts"
      )
      .then(res => {
        console.log(res.data.posts);
        this.setState({ posts: res.data.posts });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div >
          <Box className={classes.hero}>
            <Box alignItems='center'>The Student's Wellness</Box>
          </Box>
        </div>
        <br/>
        <Grid container justify="flex-end">
          <Box fontStyle='italic' fontWeight='light' width='85%' >
            NB: Our blog shares articles from our network of fellow students. The views shared do not necessarily translate to the views of the Organisation. We can share your article(s) too, get in touch with us.
          </Box>
        </Grid>
        <hr/>
        <br/>
        <Container maxWidth='md' style={{ backgroundColor: '#f4f4f2' }}>
          
          
          {this.state.posts.map(post => <PostsList post={post} />)}        
        </Container>
      </div>
    );
  }
}

Blog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Blog);

