import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "../../App.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    padding: 8,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const subject = props;
  const history = useHistory();

  const HandleClick = () => {
    history.push("/physics/view");
  };
  return (
    <Card className={classes.root}>
      <Link to={"/" + subject.link}>
        <CardActionArea className="zoom" onClick={HandleClick}>
          <div>
            <CardMedia
              className={classes.media}
              image={props.src}
              title="Subject Card"
            />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h5">
              {props.title}
            </Typography>
            <Typography variant="caption" color="textSecondary" component="p">
              {props.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
