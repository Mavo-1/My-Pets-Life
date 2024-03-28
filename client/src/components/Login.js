import React, { useState} from 'react';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

   const handleSubmit= async (e) => {
    e.preventDefault();

    try{
        const response= await axios.post('api/auth/login', { email, password});
        console.log(response.data);
    // handle successful login redirecs to dash
    } catch (error){
        console.error('Login failed:', error);
        // handle failed login(show error message)
    }
   } 

   return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type='submit'>Login</button>
        </form>
    </div>
   )
};

export default Login;