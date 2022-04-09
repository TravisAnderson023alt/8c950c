import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  makeStyles,
  CardMedia,
} from "@material-ui/core";
import bgImg from "./assets/bg-img.png";
import { ReactComponent as BubbleSVG } from "./assets/bubble.svg";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100vw",
    display: "flex",
    alignItems: "center",
  },
  loginImgContainer: {
    position: "relative",
    backgroundColor: theme.palette.primary.main,
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  loginImg: {
    height: "100vh",
    width: "auto",
    opacity: 0.15,
  },
  loginImgText: {
    position: "absolute",
    color: "white",
    top: "50%",
    left: "50%",
    transform: "translate(-50%)",
    textAlign: "center",
    fontWeight: "100",
  },
  formWrapper: {
    width: "100%",
  },
  signupFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    position: "fixed",
    top: "0",
    right: "0",
    alignItems: "center",
    gap: theme.spacing(2),
    margin: theme.spacing(4),
  },
  signupButton: {
    width: "200px",
    backgroundColor: theme.background.default,
    color: theme.palette.primary.main,
    textDecoration: "none",
  },
  formFlex: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  formControl: {
    width: "70%",
    maxWidth: "600px",
    margin: theme.spacing(2),
  },
  loginButton: {
    width: "20%",
    marginTop: theme.spacing(3),
  },
}));

const Login = ({ user, login }) => {
  const history = useHistory();
  const classes = useStyles();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
  };

  useEffect(() => {
    if (user && user.id) history.push("/home");
  }, [user, history]);

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.loginImgContainer}>
        <CardMedia
          className={classes.loginImg}
          component="img"
          image={bgImg}
          title="Signup"
          alt="Signup"
        />
        <BubbleSVG
          className={classes.loginImgText}
          style={{ transform: "translate(-50%, -150%)" }}
        />
        <Typography variant="h5" className={classes.loginImgText}>
          Converse with anyone with any Language
        </Typography>
      </Box>
      <Box className={classes.formWrapper}>
        <Box className={classes.signupFlex}>
          <Typography color="secondary">Dont have an account?</Typography>
          <Link
            href="/register"
            to="/register"
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              size="large"
              className={classes.signupButton}
            >
              Create account
            </Button>
          </Link>
        </Box>
        <form onSubmit={handleLogin} className={classes.formFlex}>
          <Typography className={classes.formControl} variant="h3">
            Welcome back!
          </Typography>
          <FormControl margin="normal" required className={classes.formControl}>
            <TextField
              aria-label="username"
              label="Username"
              name="username"
              type="text"
            />
          </FormControl>
          <FormControl margin="normal" required className={classes.formControl}>
            <TextField
              label="Password"
              aria-label="password"
              type="password"
              name="password"
              InputProps={{
                endAdornment: <Button color="primary">Forgot?</Button>,
              }}
            />
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            size="large"
            color="primary"
            className={classes.loginButton}
          >
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
