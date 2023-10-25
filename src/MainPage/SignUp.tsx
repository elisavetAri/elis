import { Grid, Box, Button, Container, CssBaseline, Link, Typography, Alert } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

const SignUp = () =>{  
  const [data, setData] =  useState<Array<User>>([]);
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigator = useNavigate()
  
  const { handleSubmit, register, formState: { errors } } = useForm();
  useEffect(() => {
    fetch('/bdswiss/signup').then(res => res.json()).then(data => setData(data))
  },[])

  
const postMethod  = () => {
    fetch('/bdswiss/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
              }),
    })
      .then((res) => res.json())
      .then((result) => setData(result.rows))
      .catch((err) => console.log('error'))
  }
  const success = () =>{
  alert('You are Successfully registered!! Return to Login')
  }

return(
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
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={postMethod} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="first_name"
                required
                fullWidth
                value={firstName}
                onChange={e => setFirstName(e?.target?.value)}
                id="first_name"
                label="First Name"
                autoFocus
              />  

            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="last_name"
                label="Last Name"
                name="last_name"
                autoComplete="family-name"
                value={lastName}
                onChange={e => setLastName(e?.target?.value)}
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
                value={email}
                onChange={e => setEmail(e?.target?.value)}
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
                value={password}
                onChange={e => setPassword(e?.target?.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={success}
          >           
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
)
}
export default SignUp