import React, { useState } from 'react';
import { Fragment } from 'react';
import InputForm from '../InputForm/InputForm';
import Button from '../Button/Button';
import { loginUser } from '../../Services/Api';

const DEFAULT_FORM = {
    username: '',
    password: ''
}

const Login = ({ addUserProfile }) => {
    const [formField, setFormField] = useState(DEFAULT_FORM);
    const { username, password} = formField;

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            // Get access token and status
            const userProfile = await loginUser(username, password); 
            console.log(userProfile);

            if (userProfile.data.access !== undefined) {

                addUserProfile([userProfile.data.access, username]); 
                
            } else if (userProfile.response.status === 401) {
                
                alert('Incorrect Password or User');
                
            }            
        } catch  (err) {
            console.log(err);
        }
    }



    const handleChange = (event) => {
        const { value, name } = event.target;
        setFormField({ ...formField, [name]: value });
    }

        
    return (
        <Fragment>
            <form onSubmit={handleLogin}>
                <InputForm type="text" name="username" required onChange={handleChange} value={username} label="User Name"/>
                <InputForm type="password" name="password" required onChange={handleChange} value={password} label="Password" />
                <Button type='submit'>Login</Button>
            </form>
        </Fragment>
    );
}

export default Login;