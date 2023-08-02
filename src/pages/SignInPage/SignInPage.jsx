import React, {useEffect, useState} from 'react';
import {
  Avatar,
  Box,
  Checkbox,
  Container,
  createTheme,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
  Button,
  Alert,
  AlertTitle,
} from '@mui/material';
import {Link} from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import Copyright from '../../components/Copyright/Copyright';

/**
 * @return {string} SignInPage.
 */
function SignInPage() {
  const defaultTheme = createTheme();

  // states
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [errMessage, setErrMessage] = useState('');

  useEffect(() => {
    console.log(email, pass);
  }, [[email, pass]]);

  // functions
  const handleSubmit = (event) => event.preventDefault();

  const handleLogin = (email, pass) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
        .then(({user}) => {
          // Signed in
          console.log(user);
          setErrMessage('');
        })
        .catch((error) => {
          setErrMessage(error.code);
        });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <Box
            component='form'
            onSubmit={handleSubmit}
            noValidate
            sx={{mt: 1}}
          >
            <Grid item xs={12}>
              {errMessage !== '' ? (
                <Alert severity="error">
                  <AlertTitle>Info</AlertTitle>
                  {errMessage} — <strong>check it out!</strong>
                </Alert>
                ) : null}
            </Grid>
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              onChange={(event) => setPass(event.target.value)}
            />
            <FormControlLabel
              control={
                <Checkbox value='remember' color='primary' />
              }
              label='Remember me'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{mt: 3, mb: 2}}
              onClick={() => handleLogin(email, pass)}
            >Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to='/hw_redux/recovery/'>Forgot password?</Link>
              </Grid>
              <Grid item>
                {'Don\'t have an account? '}
                <Link to='/hw_redux/register/' className='othBtn'>Sign Up</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{mt: 8, mb: 4}} />
      </Container>
    </ThemeProvider>
  );
}

export default SignInPage;
