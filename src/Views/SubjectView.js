import React, { Component } from "react";
import ReactPlayer from "react-player";
import { withStyles } from "react";

import { Button, Divider, Typography } from "@material-ui/core";
import "../App.css";

export class SubjectView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Data: this.props,
    };
  }

  render() {
    return (
      <div>
        <div className="video__container">
          <div className="video">
            {/* <ReactPlayer
              url="https://youtu.be/cgB68TlynRo"
              controls
              playing
            ></ReactPlayer> */}
            subject view
          </div>
        </div>
        <div className="video__title">
          <Typography variant="h5" Component="h6">
            Title of the Video
          </Typography>
          <Button
            className="custom__button"
            style={{ backgroundColor: "orange" }}
            variant="contained"
            color="primary"
          >
            Buy Now
          </Button>
        </div>
        <Divider />
        <div className="video__desc">
          <Typography variant="subtitle1" component="h5">
            Description of the video.
          </Typography>
        </div>
      </div>
    );
  }
}

export default SubjectView;
