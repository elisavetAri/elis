import { Grid, Box, Avatar, Link, Card, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import WelcomePage from './WelcomePage';
import e from 'express';

const LoginForm = () =>{
  const [data, setData] = useState<Array<User>>([]);
  const getData = () => {
    fetch('/bdswiss/signup').then(res => res.json())
  .then(data => setData(data))
}
useEffect(() => {
  getData()
},[])
console.log('d', data.map((User)=> User.first_name));
const [message, setMessage] = useState('');
const [value, setValue] = useState("");

// const handleChange = (event) => {
//   setMessage(event.target.value);

//   console.log('value is:', event.target.value);
// };
  
     const [formData, setFormData] = React.useState({
      first_name: "",
      last_name:"",
      email: "",
      password: "",
    });

    const validateEmailAndPassword= (event: React.FormEvent<HTMLFormElement>) => {
      // event.preventDefault();
      // const test = new FormData(event.currentTarget);
      // // const example = ({
      //   email: test.get('email'),
      //   password: test.get() 
      // })

     (data.map((user)=> user.email ) && data.map((user)=> user.password )?
      <WelcomePage></WelcomePage>: 'Please check your credentials' ) 
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
                onChange={e => setValue(e.target.value)}
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
                onChange={e => setValue(e.target.value)}
              />
              <Button
              onClick={()=> {validateEmailAndPassword}}
              >
              LOGIN
              </Button>
              {/* <Button>
                {
              (data.map((User)=> User.email) === email ) && (data.map((User)=> User.password) === password))? Navigate()}
                </Button>  {"Login"} */}
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