import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";
import {Card, CardActions, CardContent, Typography, Button} from '@material-ui/core';

export default class ArticlePreview extends Component {
  removeUnicode(string) {
    if (string.indexOf("&#8217;") >= 0) {
      return this.removeUnicode(string.replace("&#8217;", "'"));
    } else {
      return string.replace("<p>", "").replace("[&hellip;]</p>", "...");
    }
  }

  render() {
    const excerpt = this.removeUnicode(this.props.post.excerpt);

    if (this.props.post) {
      return (
        <div>
          <Card>
            <CardContent style ={{ height: '200px'}}>
              <Typography variant='h4' gutterBottom>
                {this.props.post.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} >
                {excerpt}
              </Typography>
            </CardContent>
            <br/>
            <CardActions>
              <HashLink to={"/blog/" + this.props.post.ID} style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary">Read More</Button>
              </HashLink>
            </CardActions>
          </Card>
          <br/>
        </div>
      );
    } else {
      return null;
    }
  }
}


                      