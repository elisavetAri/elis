import { Grid, Box, Avatar, Link, Card, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import e from 'express';
import { useNavigate } from 'react-router-dom

const LoginForm = () =>{
  const [data, setData] = useState<Array<User>>([]);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useNavigate()

  const getData = () => {
    fetch('/bdswiss/signup').then(res => res.json())
  .then(data => setData(data))
}
useEffect(() => {
  getData()
},[])

    const validateEmailAndPassword = () : Boolean  => {
      return  (
        !!data.find(d => d.email === email && d.password === password)
    )
  }
       
    return(
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            img:'stock-exchange-2648118_640.svg',
             backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
             backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
      }}
        />
        
        <Grid item xs={12} sm={8} md={5} component={Card} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            </Avatar>
            <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={e => setEmail(e?.target?.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={e => setPassword(e?.target?.value)}
                />
              <Button
              onClick={()=>{validateEmailAndPassword() === true ? router('/welcome'): false}} >
              LOGIN
              </Button>
              <Link href={'/welcome'} variant="body1">
                </Link>
                <Grid container>
                <Grid item>
                  <Link href={'/signup'} variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
)
}
export default LoginForm