import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import { callApi } from 'helpers/callApi';
import { Redirect } from 'react-router-dom';
import LogoWeb from 'image/LogoWeb.png';
import SignInGoogle from './googleSigin';
import { connect } from 'react-redux';
import * as actions from 'actions/cartAction';
import 'modules/authentication/style.scss';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        ShopSale
      </Link>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    // marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'rgb(0, 172, 193)',
  },
  cssLabel: {
    color: 'rgb(0, 172, 193)  !important',
    fontSize: 14,
  },

  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `rgb(0, 172, 193) !important`,
      color: 'rgb(0, 172, 193)  !important',
    },
  },

  cssFocused: {},

  notchedOutline: {
    borderWidth: '1px',
    color: '#e0e0e0!important',
    borderColor: '#e0e0e0 !important',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: 'rgb(0, 172, 193) !important',
  },
}));

function SignIn(props) {
  const classes = useStyles();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState('');
  const [loginDone, setLoginDone] = useState(false);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    !email
      ? setCheckEmail(true) && setErrorMessage('')
      : setCheckEmail(false) && setErrorMessage('');
    !password
      ? setCheckPassword(true) && setErrorMessage('')
      : setCheckPassword(false) && setErrorMessage('');
    if (email && password) {
      callApi('sign-in/?email=' + email + '&password=' + password).then(
        async (response) => {
          if (response.data.message) {
            setErrorMessage(response.data.message);
          } else {
            localStorage.setItem('userShopsale', JSON.stringify(response.data));
            setLoginDone(true);
          }
        },
      );
    }
  };

  // async function FetchCart() {
  //   await props.fetchCartUser();
  // }

  if (loginDone) {
    let user = JSON.parse(localStorage.getItem('userShopsale'));
    if (user) {
      if (user.roles[0] === 'admin') {
        localStorage.removeItem('userShopsale');
        return window.open('https://shopsaleadmin.netlify.app/#/');
      } else {
        return <Redirect to="/" />;
      }
    } else {
      return <Redirect to="/" />;
    }
  } else {
    return (
      <div className="sign__in__container">
        <Container
          component="main"
          maxWidth="xs"
          style={{ display: 'flex', padding: 20 }}
        >
          <div
            style={{ backgroundColor: '#fff', borderRadius: 8, padding: 10 }}
          >
            <div className="sign__in__item__detail">
              <Link href="/">
                <img src={LogoWeb} className="sign__in__item__detail__image" alt='shopsalevn' />
              </Link>
              <form className={classes.form} noValidate onSubmit={handleSubmit}>
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
                  onChange={(e) => setEmail(e.target.value)}
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                    inputMode: 'numeric',
                  }}
                />

                {checkEmail ? (
                  <Alert severity="error" size="small">
                    Missing Email!
                  </Alert>
                ) : (
                  ''
                )}
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  size="small"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                    inputMode: 'numeric',
                  }}
                />
                {checkPassword ? (
                  <Alert severity="error" size="small">
                    Missing Password!
                  </Alert>
                ) : (
                  ''
                )}
                {ErrorMessage ? (
                  <Alert severity="error" size="small">
                    {ErrorMessage}
                  </Alert>
                ) : (
                  ''
                )}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
                </Button>

                <div
                  style={{
                    textAlign: 'center',
                    marginBottom: 10,
                    fontSize: 13,
                    color: 'gray',
                  }}
                >
                  Hoặc Sử Dụng
                </div>

                <SignInGoogle />

                <Grid container>
                  <Grid item xs>
                    <Link
                      href="#"
                      variant="body2"
                      style={{
                        fontSize: 13,
                        color: 'rgb(0, 172, 193)',
                      }}
                    >
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      href="/sign-up"
                      variant="body2"
                      style={{
                        fontSize: 13,
                        color: 'rgb(0, 172, 193)',
                      }}
                    >
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Box mt={8}>
                  <Copyright />
                </Box>
              </form>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCartUser: () => {
      dispatch(actions.getCartUser());
    },
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
