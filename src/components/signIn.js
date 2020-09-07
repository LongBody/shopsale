import React, { useState , useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import { callApi, signInWithGGApi } from '../utils//callApi'
import { Router, Redirect } from "react-router-dom";
import { createHashHistory } from 'history'
import LogoWeb from '../image/brand.png'
import SignInGoogle from '../components/googleSigin'


const history = createHashHistory()

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
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));





export default function SignIn() {
  const classes = useStyles();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [loginDone, setLoginDone] = useState(false);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    !email ? setCheckEmail(true) && setErrorMessage("") : setCheckEmail(false) && setErrorMessage("")
    !password ? setCheckPassword(true) && setErrorMessage("") : setCheckPassword(false) && setErrorMessage("")
    if (email && password) {
      callApi("sign-in/?email=" + email + "&password=" + password).then(async (response) => {
        console.log(response.data)
        if (response.data.message) {
          setErrorMessage(response.data.message)
        } else {
          localStorage.setItem("userShopsale", JSON.stringify(response.data));
          setLoginDone(true)
        }
      })
    }
  }

  if (loginDone) {
    let user = JSON.parse(localStorage.getItem("userShopsale"));
    if (user) {
      if (user.roles[0] === "admin") {
        // localStorage.removeItem("userShopsale");
        // return window.open( 'https://longbody.github.io/shopsaleadmin/#/')
        return (<Redirect to="/" />);
      }
      else {
        return (<Redirect to="/" />);
      }
    }
    else {
      return (<Redirect to="/" />);
    }

  }

  else {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <img src={LogoWeb} style={{ width: "100%", padding: 5 }} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
            </Typography>
          <form className={classes.form} noValidate
            onSubmit={handleSubmit}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              type="text"
              autoFocus
              size="small"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            {
              checkEmail ? <Alert severity="error" size="small">Missing Email!</Alert>
                : ""
            }
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="text"
              type="password"
              size="small"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            {
              checkPassword ? <Alert severity="error" size="small">Missing Password!</Alert>
                : ""
            }
            {
              ErrorMessage ? <Alert severity="error" size="small">{ErrorMessage}</Alert>
                : ""
            }
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
              </Button>

            <div style={{ textAlign: "center", marginBottom: 10, color: "gray" }}>
              Hoặc Sử Dụng
              </div>
              
             <SignInGoogle/>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                  </Link>
              </Grid>
              <Grid item>
                <Link href="/sign-up" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }


}



