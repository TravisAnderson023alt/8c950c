import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  Grid,
} from "@material-ui/core";
import { SideBanner } from "./components/LoginSignup/SideBanner";
import { CreateLoginToggle } from "./components/LoginSignup/CreateLoginToggle";
import { useStyles } from "./components/LoginSignup/useStyles";

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
    <Grid className={classes.wrapper}>
      <SideBanner />
      <Box className={classes.formWrapper}>
        <CreateLoginToggle
          description="Don't have an account?"
          buttonText="Create account"
        />
        <form onSubmit={handleLogin} className={classes.formFlex}>
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
            className={classes.button}
          >
            Login
          </Button>
        </form>
      </Box>
    </Grid>
  );
};

export default Login;
