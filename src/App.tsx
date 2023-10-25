import React from 'react';
import {Routes, Route} from 'react-router-dom';
import SignUp from './MainPage/SignUp';
import LoginForm from './MainPage/LoginForm';
import WelcomePage from './MainPage/WelcomePage';

const App = () => {
 return (
    <Routes>
        <Route path='/' element={<LoginForm/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='welcome' element={<WelcomePage/>}/>
    </Routes>
 )
}
export default App