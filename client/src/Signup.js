import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
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
    width: '100%',
    margin: theme.spacing(2),
    fontSize: '14px',
    [theme.breakpoints.down("sm")]: {
      width: '90%'
    },
  },
  signupButton: {
    width: "160px",
    height: '56px',
    marginTop: theme.spacing(5),
  },
}));

const Signup = ({ user, register }) => {
  const classes = useStyles();
  const history = useHistory();

  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const confirmPassword = formElements.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }
    await register({ username, email, password });
  };

  useEffect(() => {
    if (user && user.id) history.push("/home");
  }, [user, history]);

  return (
    <Box className={classes.wrapper}>
      <SideBanner />
      <Box className={classes.formWrapper}>
        <CreateLoginToggle description="Already have an account?" buttonText="Login" />
        <form onSubmit={handleRegister} className={classes.formFlex}>
          <Typography className={classes.formControl} style={{ fontWeight: '600', fontSize: '26px', lineHeight: '40px', margin: 0 }} variant="h3">
            Create an account.
          </Typography>
          <FormControl className={classes.formControl}>
            <TextField
              aria-label="username"
              label="Username"
              name="username"
              type="text"
              required
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField
              label="E-mail address"
              aria-label="e-mail address"
              type="email"
              name="email"
              required
            />
          </FormControl>

          <FormControl
            error={!!formErrorMessage.confirmPassword}
            className={classes.formControl}
          >
            <TextField
              aria-label="password"
              label="Password"
              type="password"
              inputProps={{ minLength: 6 }}
              name="password"
              required
            />
            <FormHelperText>{formErrorMessage.confirmPassword}</FormHelperText>
          </FormControl>

          <FormControl
            error={!!formErrorMessage.confirmPassword}
            className={classes.formControl}
          >
            <TextField
              label="Confirm Password"
              aria-label="confirm password"
              type="password"
              inputProps={{ minLength: 6 }}
              name="confirmPassword"
              required
            />
            <FormHelperText>{formErrorMessage.confirmPassword}</FormHelperText>
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            size="large"
            color="primary"
            className={classes.signupButton}
          >
            Create
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Signup;
