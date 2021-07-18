import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import { signUpApi } from 'helpers/callApi';
import LogoWeb from 'image/brand.png';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        ShopSale
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(0),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [email, setEmail] = useState();
  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  // set state to check missing value
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkFName, setCheckFName] = useState(false);
  const [checkLName, setCheckLName] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [checkConfirmPassword, setCheckConfirmPassword] = useState(false);
  const [checkPasswordAndConfirmPassword, setCheckPasswordAndConfirmPassword] =
    useState(false);
  const [checkSignUpSuccess, setSignUpSuccess] = useState('');
  const [messageAlert, SetMessageAlert] = useState('');

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    !email ? setCheckEmail(true) : setCheckEmail(false);
    !fName ? setCheckFName(true) : setCheckFName(false);
    !lName ? setCheckLName(true) : setCheckLName(false);
    !password ? setCheckPassword(true) : setCheckPassword(false);
    !confirmPassword
      ? setCheckConfirmPassword(true)
      : setCheckConfirmPassword(false);

    if (email && password && fName && lName) {
      password !== confirmPassword
        ? setCheckPasswordAndConfirmPassword(true)
        : setCheckPasswordAndConfirmPassword(false);
      if (password === confirmPassword) {
        signUpApi(
          `sign-in/?email=${email}&password=${password}&firstName=${fName}&lastName=${lName}`,
        ).then((response) => {
          if (
            response.data.message ===
            'Email has been register or maybe not correct'
          ) {
            SetMessageAlert('error');
          } else {
            SetMessageAlert('success');
          }
          setSignUpSuccess(response.data.message);
        });
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <img src={LogoWeb} style={{ width: '100%', padding: 5 }} />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                size="small"
                value={fName}
                onChange={(e) => setFName(e.target.value)}
              />
              {checkFName ? <Alert severity="error">First Name!</Alert> : ''}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                size="small"
                value={lName}
                onChange={(e) => setLName(e.target.value)}
              />
              {checkLName ? <Alert severity="error">Last Name!</Alert> : ''}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                size="small"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {checkEmail ? (
                <Alert severity="error" size="small">
                  Missing Email!
                </Alert>
              ) : (
                ''
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                size="small"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {checkPassword ? (
                <Alert severity="error">Missing Password!</Alert>
              ) : (
                ''
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Confirm Password"
                type="password"
                id="ComfirmPassword"
                autoComplete="current-password"
                size="small"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {checkConfirmPassword ? (
                <Alert severity="error">Missing ConFirm Password!</Alert>
              ) : (
                ''
              )}
            </Grid>
            <Grid item xs={12}>
              {checkPasswordAndConfirmPassword ? (
                <Alert severity="error">Password Not Match!</Alert>
              ) : (
                ''
              )}
              {checkSignUpSuccess ? (
                <Alert severity={messageAlert}>{checkSignUpSuccess}</Alert>
              ) : (
                ''
              )}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/sign-in" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
