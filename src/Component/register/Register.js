import React, { useState, Fragment } from 'react';
import InputForm from '../InputForm/InputForm';
import Button from '../Button/Button';
import { registerUser } from '../../Services/Api';

const DEFAULT_FORM = {
    username: '',
    password: '',
    password2: '',
    email: '',
    firstName: '',
    lastName: ''
}

const Register = ({ signType, setSignType}) => {
    const [formField, setFormField] = useState(DEFAULT_FORM);
    const { username, password, password2, email, firstName, lastName } = formField;

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (password !== password2) {
            alert("Passwords do not match");
            return;
        }

        try {
            const data = await registerUser(username, password, email, firstName, lastName);

            if (data.response.status === 400) {
                alert("Your register was failed try diffrent Email or User Name");
            } else if (data.response.status === 201) {
                alert("You just created an account Congratulations!");
                setSignType(!signType);
            }
        } catch (err) {
            console.log(err);
        }


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