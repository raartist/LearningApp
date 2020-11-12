import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "../../App.css";
import { Link } from "react-router-dom";
import { Component } from "react";
import SubjectView from "../../Views/SubjectView";

const useStyles = (theme) => ({
  root: {
    maxWidth: 345,
    padding: 8,
  },
  media: {
    height: 140,
  },
});

export class Tile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subject: this.props,
      subjectView: true,
    };
  }

  render() {
    const { classes } = this.props;
    const subject = this.state.subject;

    return (
      <div>
        <Card className={classes.root}>
          <Link to={"/" + subject.link}>
            <CardActionArea className="zoom">
              <div>
                <CardMedia
                  className={classes.media}
                  image={subject.src}
                  title="Subject Card"
                />
              </div>
              <CardContent>
                <Typography gutterBottom variant="h6" component="h5">
                  {subject.title}
                </Typography>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  component="p"
                >
                  {subject.desc}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      </div>
    );
  }
}

export default withStyles(useStyles)(Tile);
