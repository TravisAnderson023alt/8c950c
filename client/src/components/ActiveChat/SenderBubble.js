import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Grid } from "@material-ui/core";

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
    margin: theme.spacing(1),
  },
  bubble: {
    background: "#F4F6FA",
    borderRadius: "10px 10px 0 10px",
    overflow: 'hidden',
  },
}));

const SenderBubble = ({ time, text, image }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.date}>{time}</Typography>

      <Box className={classes.bubble}>
        <Grid spacing={1} container sx={{ padding: '0px', gap: '5px' }}>
          {image ? image.map((img, index) => (
            <Grid key={index} item sx={{ padding: '0px' }}>
              <img src={img} style={{ height: "200px" }} alt="" />
            </Grid>
          )) : null}
        </Grid>
        <Typography className={classes.text}>{text}</Typography>
      </Box>
    </Box>
  );
};

export default SenderBubble;
