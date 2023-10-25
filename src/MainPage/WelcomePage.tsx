import * as React from 'react';
import Typography from '@mui/material/Typography';
import userProps from './LoginForm'
import { UseFormProps } from 'react-hook-form';


const WelcomePage : React.FC<UseFormProps> = () =>{
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {userProps.name}
    </Typography>
  );
}

export default WelcomePage