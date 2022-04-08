import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  makeStyles,
  CardMedia
} from '@material-ui/core';
import bgImg from './assets/bg-img.png';
import { ReactComponent as BubbleSVG } from './assets/bubble.svg';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
  },
  signupImgContainer: {
    position: "relative",
    backgroundColor: theme.palette.primary.main,
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
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
    height: '100vh',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formControl: {
    width: '70%',
    maxWidth: '600px',
    margin: theme.spacing(2),
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
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.signupImgContainer}>
        <CardMedia className={classes.signupImg} component="img" image={bgImg} title="Signup" alt="Signup" />
        <BubbleSVG className={classes.signupImgText} style={{ transform: 'translate(-50%, -150%)' }} />
        <Typography variant='h6' className={classes.signupImgText}>Converse with anyone with any Language</Typography>
      </Box>
      <Box className={classes.formWrapper}>
        <Box className={classes.loginFlex}>
          <Typography>Already have an account?</Typography>
          <Link href="/register" to="/register" style={{ textDecoration: 'none' }}>
            <Button variant="contained" size="large" className={classes.loginButton}>Signup</Button>
          </Link>
        </Box>
        <form onSubmit={handleLogin}>
          <Typography className={classes.formControl} variant='h3'>Create an Account</Typography>
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
              label="password"
              aria-label="password"
              type="password"
              name="password"
            />
          </FormControl>
          <Button type="submit" variant="contained" size="large" color='primary' style={{ width: '20%' }}>
            Create
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
