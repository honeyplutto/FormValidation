import React, { useState, useEffect } from 'react'
import ErrorMessage from './ErrorMessage';
import Input from './Input';
import { schema } from './schema'
import './Form.css'

function Form() {

    const initialValues = {   
        username: '', 
        email: '', 
        password: '', 
        confPassword: ''
    };

    const [formValues, setFormValues] = useState(initialValues);
    const [validate, setValidate] = useState({});

    useEffect(() => {
        console.log(validate);
    }, [validate]);

    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validate = schema.validation(formValues)
        setValidate(validate); 
        isFormValid();
    };

    return (
        <form className='form_container' onSubmit={handleSubmit}>

            <h1>Login Form</h1>
    
            <Input 
                label='Username'
                type='text'
                name='username'
                placeholder='Username'
                value={formValues.username.value}
                handleChange={handleChange}
            />

            <ErrorMessage message={validate.username ? validate.username.message : ''}/>

            <Input 
                label='Email'
                type='text'
                name='email'
                placeholder='Email'
                value={formValues.email.value}
                handleChange={handleChange}
            />

            <ErrorMessage message={validate.email ? validate.email.message : ''}/>

            <Input 
                label='Password'
                type='password'
                name='password'
                placeholder='Password'
                value={formValues.password.value}
                handleChange={handleChange}
            />

            <ErrorMessage message={validate.password ? validate.password.message : ''}/>

            <Input 
                label='Confirm Password'
                type='password'
                name='confPassword'
                placeholder='Confirm Password'
                value={formValues.confPassword.value}
                handleChange={handleChange}
            />

            <ErrorMessage message={validate.confirmPassword ? validate.confirmPassword.message : ''}/>

            <button type="submit">Submit</button>
        </form>
    )
}

export default Form