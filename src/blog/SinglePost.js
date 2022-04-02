import React, { Component } from "react";
import axios from "axios";
import { Typography, Container } from "@material-ui/core";
import { InlineShareButtons } from 'sharethis-reactjs';

export default class SinglePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    };
  }

  removeUnicode(string) {
    if (string.indexOf("&#8217;") >= 0) {
      return this.removeUnicode(string.replace("&#8217;", "'"));
    } else {
      return string;
    }
  }

  componentDidMount() {
    axios
      .get(
        `https://public-api.wordpress.com/rest/v1/sites/smhzw.wordpress.com/posts/${this.props.match.params.id}`
      )
      .then(res => {
        this.setState({ post: res.data });
        const container = document.querySelector(".content");
        let scr = container.querySelectorAll("script");
        scr.forEach(node => {
          let parent = node.parentElement;
          let d = document.createElement("script");
          d.async = node.async;
          d.src = node.src;
          d.type = "text/javascript";
          parent.insertBefore(d, node);
          parent.removeChild(node);
          d.onload = console.log(d);
        });
      })
      .catch(error => console.log(error));
  }

  parseOutScripts(content) { };


  render() {
    if (this.state.post) {
      return (
        <div className="blog">
          <div className="article">
            <Container maxWidth='md'>
              <br />
              <Typography variant="h4" align="center" gutterBottom >{this.state.post.title}</Typography>
              <Typography align="justify" variant="body">
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: this.state.post.content }}
                />
              </Typography>


            </Container>
            <InlineShareButtons
              config={{
                alignment: 'center',
                color: 'social',
                enabled: true,
                font_size: 16,
                labels: 'cta',
                language: 'en',
                networks: [
                  'whatsapp',
                  'linkedin',
                  'facebook',
                  'twitter'
                ],
                padding: 12,
                radius: 4,
                show_total: true,
                size: 40,
              }}
            />
            <br />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}