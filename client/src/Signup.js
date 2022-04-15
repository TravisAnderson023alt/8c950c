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
  Grid,
} from "@material-ui/core";
import { SideBanner } from "./components/LoginSignup/SideBanner";
import { CreateLoginToggle } from "./components/LoginSignup/CreateLoginToggle";
import { useStyles } from "./components/LoginSignup/useStyles";

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
    <Grid className={classes.wrapper}>
      <SideBanner />
      <Box className={classes.formWrapper}>
        <CreateLoginToggle
          description="Already have an account?"
          buttonText="Login"
        />
        <form onSubmit={handleRegister} className={classes.formFlex}>
          <Typography
            className={classes.formControl}
            style={{
              fontWeight: "600",
              fontSize: "26px",
              lineHeight: "40px",
              margin: 0,
            }}
            variant="h3"
          >
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
            className={classes.button}
          >
            Create
          </Button>
        </form>
      </Box>
    </Grid>
  );
};

export default Signup;
