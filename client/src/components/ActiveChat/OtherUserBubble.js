import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Avatar, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: 11,
    marginTop: 6,
  },
  usernameDate: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5,
  },
  bubble: {
    backgroundImage: "linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)",
    borderRadius: "0 10px 10px 10px",
    overflow: 'hidden',
  },
  text: {
    fontSize: 14,
    color: "#FFFFFF",
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: "bold",
    margin: theme.spacing(1),
  },
}));

const OtherUserBubble = ({ text, time, otherUser, image }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Avatar
        alt={otherUser.username}
        src={otherUser.photoUrl}
        className={classes.avatar}
      />
      <Box>
        <Typography className={classes.usernameDate}>
          {otherUser.username} {time}
        </Typography>
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
    </Box>
  );
};

export default OtherUserBubble;
