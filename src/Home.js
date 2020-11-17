import React, { Component } from "react";
import Tile from "./Components/Tiles/Tile";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subjects: [
        {
          title: "Physics",
          linkTo: "physics",
          desc:
            "Our latest and interactive books are available to serve you some better dimesions of knowledge.",
          src: "physics.jpg",
          video: "",
        },
        {
          title: "Chemistry",
          linkTo: "chemistry",
          desc:
            "Our latest and interactive books are available to serve you some better dimesions of knowledge.",
          src: "chemistry.jpg",
        },
        {
          title: "Biology",
          linkTo: "biology",
          desc:
            "Our latest and interactive books are available to serve you some better dimesions of knowledge.",
          src: "biology.jpg",
        },
        {
          title: "Maths",
          linkTo: "maths",
          desc:
            "Our latest and interactive books are available to serve you some better dimesions of knowledge.",
          src: "maths.jpg",
        },
        {
          title: "Computer ",
          linkTo: "computer",
          desc:
            "Our latest and interactive books are available to serve you some better dimesions of knowledge.",
          src: "computer.jpg",
        },
        {
          title: "Yoga",
          linkTo: "yoga",
          desc:
            "Our latest and interactive books are available to serve you some better dimesions of knowledge.",
          src: "yoga.jpg",
        },
      ],
      subjectView: false,
    };
  }
  handleView = () => {
    this.setState({
      subjectView: true,
    });
  };

  render() {
    const Subject = this.state.subjects;
    const subjectView = this.state.subjectView;
    return (
      <div>
        <div>
          {Subject.map((item, index) => (
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
                <Link to={"/" + item.linkTo}>
                  <Tile src={item.src} title={item.title} desc={item.desc} />
                </Link>
              </Grid>
              <Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
                <Tile src={item.src} title={item.title} desc={item.desc} />
              </Grid>
            </Grid>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
