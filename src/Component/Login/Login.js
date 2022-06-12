import React, { useState } from 'react';
import { Fragment } from 'react';
import InputForm from '../InputForm/InputForm';
import Button from '../Button/Button';
import { loginUser } from '../../Services/Api';

const DEFAULT_FORM = {
    username: '',
    password: ''
}

const Login = ({ addAccessToken }) => {
    const [formField, setFormField] = useState(DEFAULT_FORM);
    const { username, password} = formField;

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const accessKey = await loginUser(username, password); 
            console.log(accessKey);

            if (accessKey.data.access !== undefined) {

                addAccessToken([accessKey.data.access, username]); 
                
            } else if (accessKey.response.status === 401) {
                
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