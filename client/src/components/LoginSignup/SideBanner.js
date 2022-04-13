import React from "react";
import { Box, Typography, makeStyles, CardMedia } from "@material-ui/core";
import bgImg from "../../assets/bg-img.png";
import { ReactComponent as BubbleSVG } from "../../assets/bubble.svg";

const useStyles = makeStyles((theme) => ({
  imgContainer: {
    position: "relative",
    backgroundColor: theme.palette.primary.main,
    display: "block",
    width: "fit-content",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  img: {
    height: "100vh",
    width: "auto",
    opacity: 0.15,
  },
  imgText: {
    position: "absolute",
    width: "269px",
    height: "80px",
    color: "white",
    top: "50%",
    left: "50%",
    transform: "translate(-50%)",
    textAlign: "center",
    fontWeight: "400",
    fontSize: "26px",
  },
}));

export const SideBanner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.imgContainer}>
      <CardMedia
        className={classes.img}
        component="img"
        image={bgImg}
        title="Signup"
        alt="Signup"
      />
      <BubbleSVG
        className={classes.imgText}
        style={{
          transform: "translate(-50%, -150%)",
          height: "66px",
          width: "67px",
        }}
      />
      <Typography variant="h5" className={classes.imgText}>
        Converse with anyone with any Language
      </Typography>
    </Box>
  );
};
