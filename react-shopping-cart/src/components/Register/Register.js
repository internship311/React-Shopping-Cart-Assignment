import React from 'react';
import WrapperText from '../WrapperText/WrapperText';
import Form from '../Form/Form';
import './Register.scss';

const Register = () => {
    const inputLabel = [
        {
            type: "text",
            placeholder: "First Name",
            inputId: "field-1"
        },
        {
            type: "text",
            placeholder: "Last Name",
            inputId: "field-2"
        },
        {
            type: "email",
            placeholder: "Email",
            inputId: "field-3"
        },
        {
            type: "password",
            placeholder: "Password",
            inputId: "field-4"
        },
        {
            type: "password",
            placeholder: "Confirm Password",
            inputId: "field-5"
        }
    ];

    return (
        <main className="register-container">
            <WrapperText className={"register-container__article"} title={"SignUp"} description={"We do not share your personal details"} />
            <Form inputLabel={inputLabel} button={"SignUp"} className={"register-container__form"} />
        </main>
    )
}

export default Register;