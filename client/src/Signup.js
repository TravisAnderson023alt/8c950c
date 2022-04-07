import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
  makeStyles,
  CardMedia,
  Card,
} from '@material-ui/core';
import bgImg from './assets/bg-img.png';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '50%',
    display: 'flex',
  },
  signupImgContainer: {
    position: "relative",
    backgroundColor: theme.palette.primary.main,
  },
  signupImg: {
    height: "100vh",
    width: 'auto',
    // blue filter
    opacity: 0.15,
  },
  signupImgText: {
    position: "absolute",
    color: "white",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%)',
    textAlign: 'center',
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
      setFormErrorMessage({ confirmPassword: 'Passwords must match' });
      return;
    }
    await register({ username, email, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.signupImgContainer}>
        <CardMedia className={classes.signupImg} component="img" image={bgImg} title="Signup" alt="Signup" />

        <Typography variant='h6' className={classes.signupImgText}>Converse with anyone with any Language</Typography>
      </Box>

      <Grid container justifyContent="center">
        <Box>
          <Grid container item>
            <Typography>Need to log in?</Typography>
            <Link href="/login" to="/login">
              <Button>Login</Button>
            </Link>
          </Grid>
          <form onSubmit={handleRegister}>
            <Grid>
              <Grid>
                <FormControl>
                  <TextField
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid>
                <FormControl>
                  <TextField
                    label="E-mail address"
                    aria-label="e-mail address"
                    type="email"
                    name="email"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid>
                <FormControl error={!!formErrorMessage.confirmPassword}>
                  <TextField
                    aria-label="password"
                    label="Password"
                    type="password"
                    inputProps={{ minLength: 6 }}
                    name="password"
                    required
                  />
                  <FormHelperText>
                    {formErrorMessage.confirmPassword}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid>
                <FormControl error={!!formErrorMessage.confirmPassword}>
                  <TextField
                    label="Confirm Password"
                    aria-label="confirm password"
                    type="password"
                    inputProps={{ minLength: 6 }}
                    name="confirmPassword"
                    required
                  />
                  <FormHelperText>
                    {formErrorMessage.confirmPassword}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Button type="submit" variant="contained" size="large">
                Create
              </Button>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Box>
  );
};

export default Signup;
