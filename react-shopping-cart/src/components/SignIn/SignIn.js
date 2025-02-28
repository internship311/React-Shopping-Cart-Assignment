import React from 'react';
import './SignIn.scss';
import Form from '../Form/Form';
import WrapperText from '../WrapperText/WrapperText';

const Signin = () => {
    const inputLabel = [
        {
            type: "email",
            placeholder: "Email",
            inputId: "field-1"
        },
        {
            type: "password",
            placeholder: "Password",
            inputId: "field-2"
        }
    ];

    return (
        <main className="login-container">
            <WrapperText className={"login-container__article"} title={"Login"} description={"Get Access to your Orders, Wishlist and Recommendations"} />
            <Form inputLabel={inputLabel} button={"Login"} className={"login-container__form"} />
        </main>
    )
}

export default Signin;