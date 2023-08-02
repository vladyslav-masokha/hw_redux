import React, {useState} from 'react';
import {
  Avatar,
  Box,
  Container,
  CssBaseline,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
  Button,
  createTheme,
  Alert,
  AlertTitle,
} from '@mui/material';
import {Link} from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Copyright from '../../components/Copyright/Copyright';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {useDispatch} from 'react-redux';
import {createUser} from '../../redux/slices/userSlice';

/**
 * @return {string} SignUpPage.
 */
function SignUpPage() {
  // variables
  const defaultTheme = createTheme();
  const dispatch = useDispatch();

  // states
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [errMessage, setErrMessage] = useState('');

  // functions
  const handleSubmit = (event) => event.preventDefault();

  const handleRegister = (email, pass) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pass)
        .then(({user}) => {
          console.log(user);
          // Signed up
          dispatch(createUser({
            id: user.uid,
            email: user.email,
          }));
        })
        .catch((error) => {
          setErrMessage(error.code);
        });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
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
          <Typography component="h1" variant="h5">
                      Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {errMessage !== '' ? (
                  <Alert severity="error">
                    <AlertTitle>Info</AlertTitle>
                    {errMessage} — <strong>check it out!</strong>
                  </Alert>
                ) : null}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='secureCode'
                  label='Secure code'
                  name='secureCode'
                  autoComplete='secureCode'
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(event) => setPass(event.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{mt: 3, mb: 2}}
              onClick={() => handleRegister(email, pass)}
            >
                          Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                {'Already have an account? '}
                <Link to='/hw_redux/login' className='othBtn'>Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{mt: 5}} />
      </Container>
    </ThemeProvider>
  );
}

export default SignUpPage;
