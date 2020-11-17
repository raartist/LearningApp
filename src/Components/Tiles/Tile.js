import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "../../App.css";

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

  componentDidMount() {
    console.log("hii from tile");
  }

  render() {
    const { classes } = this.props;
    const subject = this.state.subject;

    return (
      <div>
        <Card className={classes.root}>
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
              <Typography variant="caption" color="textSecondary" component="p">
                {subject.desc}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }
}

export default withStyles(useStyles)(Tile);
