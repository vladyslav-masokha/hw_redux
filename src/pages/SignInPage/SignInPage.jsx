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
} from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom';
import Copyright from '../../components/Copyright/Copyright';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

/**
 * @return {string} SignInPage.
 */
function SignInPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const defaultTheme = createTheme();

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
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
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
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{mt: 3, mb: 2}}
            >Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to='/hw_redux/recovery/'>Forgot password?</Link>
              </Grid>
              <Grid item>
                {'Don\'t have an account? '}
                <Link to='/hw_redux/register/'>Sign Up</Link>
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
