import * as React from 'react';
import { useContext } from 'react';
import { Avatar, Button, TextField, Box, Typography, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../App';

const theme = createTheme();

export default function SignIn() {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    fetch("/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.get('email'),
        password: data.get('password'),
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          console.log('error')
        } else {
          const user = {
            email: data.get('email'),
            role_name: res.role_name
          }
          localStorage.setItem("jwt", res.token);
          localStorage.setItem("user", JSON.stringify(user));
          dispatch({ type: "USER", payload: user });
          navigate('/')
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          boxShadow="0px 0px 200px 100px #CDCDC9" borderRadius='20px' p={5}
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
            <TextField
              size="small"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              size="small"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}