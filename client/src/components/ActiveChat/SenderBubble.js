import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: "#91A3C0",
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: "bold",
  },
  bubble: {
    background: "#F4F6FA",
    padding: theme.spacing(1),
    borderRadius: "10px 10px 0 10px",
  },
}));

const SenderBubble = ({ time, text, image }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.date}>{time}</Typography>

      <Box className={classes.bubble}>
        {/* {image ? <img src={image} style={{ width: '50%' }} alt="" /> : null} */}
        {image ? image.map((img, index) => (
          <img key={index} src={img} style={{ width: "50%" }} alt="" />
        )) : null}
        <Typography className={classes.text}>{text}</Typography>
      </Box>
    </Box>
  );
};

export default SenderBubble;
