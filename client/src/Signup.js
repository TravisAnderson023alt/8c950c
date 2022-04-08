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
} from '@material-ui/core';
import bgImg from './assets/bg-img.png';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
  },
  signupImgContainer: {
    position: "relative",
    backgroundColor: theme.palette.primary.main,
  },
  signupImg: {
    height: "100vh",
    width: 'auto',
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
  formWrapper: {
    width: '100%',
  },
  loginFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'fixed',
    top: '0',
    right: '0',
    alignItems: 'center',
    gap: theme.spacing(2),
    marginRight: theme.spacing(4),
    marginTop: theme.spacing(4),

  },
  loginButton: {
    width: '150px',
    backgroundColor: theme.background.default,
    color: theme.palette.primary.main,
    textDecoration: 'none',
  },
  formFlex: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formControl: {
    width: '70%',
    maxWidth: '600px',
    margin: theme.spacing(2),
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
      <Box className={classes.formWrapper}>
        <Box className={classes.loginFlex}>
          <Typography>Already have an account?</Typography>
          <Link href="/login" to="/login" style={{ textDecoration: 'none' }}>
            <Button variant="contained" size="large" className={classes.loginButton}>Login</Button>
          </Link>
        </Box>
        <form onSubmit={handleRegister} className={classes.formFlex}>
          <Typography className={classes.formControl} variant='h3'>Create an Account</Typography>
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

          <FormControl error={!!formErrorMessage.confirmPassword} className={classes.formControl}>
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

          <FormControl error={!!formErrorMessage.confirmPassword} className={classes.formControl}>
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

          <Button type="submit" variant="contained" size="large" color='primary' style={{ width: '20%' }}>
            Create
          </Button>

        </form>
      </Box>
    </Box>
  );
};

export default Signup;
