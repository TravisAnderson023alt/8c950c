import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  makeStyles,
} from "@material-ui/core";
import { SideBanner } from "./components/LoginSignup/SideBanner";
import { CreateLoginToggle } from "./components/LoginSignup/CreateLoginToggle";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100vw",
    height: "100vh",
    display: "flex",
  },
  formWrapper: {
    width: "380px",
    height: "fit-content",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
    }
  },
  formFlex: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: 'relative',
    width: '380px',
    height: 'fit-content',
    top: '170px',
    left: '97px',
    [theme.breakpoints.down("sm")]: {
      left: '0px',
      width: '100%',
    }
  },
  formControl: {
    width: "100%",
    margin: theme.spacing(2),
    fontSize: '14px',
    [theme.breakpoints.down("sm")]: {
      width: '90%'
    },
  },
  loginButton: {
    width: "160px",
    height: '56px',
    marginTop: theme.spacing(5),
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
      <SideBanner />
      <Box className={classes.formWrapper}>
        <CreateLoginToggle description="Don't have an account?" buttonText="Create account" />
        <form onSubmit={handleLogin} className={classes.formFlex}>
          <Typography className={classes.formControl} style={{ fontWeight: '600', fontSize: '26px', lineHeight: '40px', margin: 0 }} variant="h3">
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
