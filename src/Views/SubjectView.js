import React, { Component } from "react";
import ReactPlayer from "react-player";
import { withStyles } from "react";

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
        <ReactPlayer
          url="https://youtu.be/cgB68TlynRo"
          controls
          playing
        ></ReactPlayer>
      </div>
    );
  }
}

export default SubjectView;
