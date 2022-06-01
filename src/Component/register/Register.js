import React, { useState, Fragment } from 'react';
import InputForm from '../InputForm/InputForm';
import Button from '../Button/Button';

const DEFAULT_FORM = {
    username: '',
    password: '',
    password2: '',
    email: '',
    firstName: '',
    lastName: ''
}

const Register = () => {
    const [formField, setFormField] = useState(DEFAULT_FORM);
    const { username, password, password2, email, firstName, lastName } = formField;

    const register = async (username, password, email, firstName, lastName) => {
        try {
            const payload = {
                username: username,
                password: password,
                password2: password,
                email: email,
                first_name: firstName,
                last_name: lastName
            };

            const response = await fetch("https://abra-course-server.herokuapp.com/register/", {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(payload)
            });
    
            const data = await response.json();
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (password !== password2) {
            alert("Passwords do not match");
            return;
        }

        register(username, password, email, firstName, lastName);
    }

    const handleChange = (event) => {
        const { value, name } = event.target;
        setFormField({ ...formField, [name]: value });
    }
        
    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <InputForm type="text" name="username" required onChange={handleChange} value={username} label="User Name"/>
                <InputForm type="password" name="password" required onChange={handleChange} value={password} label="Password"/>
                <InputForm type="password" name="password2" required onChange={handleChange} value={password2} label="Confirm Password"/>
                <InputForm type="email" name="email" required  onChange={handleChange} value={email} label="Email"/>
                <InputForm type="text" name="firstName" required  onChange={handleChange} value={firstName} label="First Name"/>
                <InputForm type="text" name="lastName" required onChange={handleChange} value={lastName} label="Last Name"/>
                <Button type='submit'>Register</Button>
            </form>
        </Fragment>
    );
}

export default Register;