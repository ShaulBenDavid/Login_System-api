import React, { useState } from 'react';
import { Fragment } from 'react';
import InputForm from '../InputForm/InputForm';
import Button from '../Button/Button';

const DEFAULT_FORM = {
    username: '',
    password: ''
}

const Login = ({ addAccessToken }) => {
    const [formField, setFormField] = useState(DEFAULT_FORM);
    const { username, password} = formField;

    const logIn = async (username, password) => {
        try {
            const payload = {
                username,
                password
            };

            const response = await fetch("https://abra-course-server.herokuapp.com/api/token/", {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(payload)
            });
    
            const data = await response.json();
            return ([data.access, username]);

        } catch (e) {
            console.log(e);
        }
    }



    const handleLogin = async (event) => {
        event.preventDefault();

        const accessKey = await logIn(username, password);
        console.log(accessKey);
        if (accessKey[0] !== undefined) {
            addAccessToken(accessKey);     
        } else {
            alert('Incorrect Password or User');           
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