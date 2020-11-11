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
    };
  }

  render() {
    const Subject = this.state.subjects;
    return (
      <div>
        {Subject.map((item, index) => (
          <Grid container style={{ display: "flex" }} spacing={2}>
            <Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
              <Link to={"/" + item.linkTo + "/view"}>
                <Tile src={item.src} title={item.title} desc={item.desc} />
              </Link>
            </Grid>

            {/* <Grid item xs={6} lg={3}>
          <Link to="/chemistry">
            <Tile
              src="chemistry.jpg"
              title="Chemisty"
              Desc="Our latest and interactive..."
            />
          </Link>
        </Grid>
        <Grid item xs={6} lg={3}>
          <Link to="/biology">
            <Tile
              src="biology.jpg"
              title="Biology"
              Desc="Our latest and interactive..."
            />
          </Link>
        </Grid>
        <Grid item xs={6} lg={3}>
          <Link to="/maths">
            <Tile
              src="maths.jpg"
              title="Maths"
              Desc="Our latest and interactive..."
            />
          </Link>
        </Grid>
        <Grid item xs={6} lg={3}>
          <Link to="/computer">
            <Tile
              src="computer.jpg"
              title="Computer"
              Desc="Our latest and interactive..."
            />
          </Link>
        </Grid>
        <Grid item xs={6} lg={3}>
          <Link to="/yoga">
            <Tile
              src="yoga.jpg"
              title="Yoga"
              Desc="Our latest and interactive..."
            />
          </Link>
        </Grid> */}
          </Grid>
        ))}
      </div>
    );
  }
}

export default Home;
