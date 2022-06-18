import React, { useState, Fragment } from 'react';
import InputForm from '../InputForm/InputForm';
import Button from '../Button/Button';
import { registerUser } from '../../Services/Api';
import { RegisterInput } from './RegisterInput';


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
                {RegisterInput.map((input) => {
                    return (
                        <InputForm
                            type={input.type}
                            name={input.name}
                            required={input.required}
                            pattern={input.name === "password2" ? password : input.pattern}
                            onChange={handleChange}
                            value={formField[input.name]}
                            label={input.label}
                            key={input.id}
                            errMessage={input.errMessage}
                        />
                    )
                })}
                <Button type='submit'>Register</Button>
            </form>
        </Fragment>
    );
}

export default Register;