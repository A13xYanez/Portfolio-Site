import React, { useState } from 'react';
import transition from '../global/transitions/Transition';
import './Contact.css';

const Contact = () => {
    const [formValues, setFormValues] = useState({ name: '', email: '', message: ''});
    const [formErrors, setFormError] = useState({});

    const formValidation = (value) => {
        const errors = {};
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!value.name) {
            errors.name = "Your name is required.";
        }

        if (!value.email) {
            errors.email = "Your email is required.";
        } else if (!emailPattern.test(value.email)) {
            errors.email = "Please enter a valid email.";
        }

        if (!value.message) {
            errors.message = "A message is required.";
        }

        return errors;
    }

    const handleValidation = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const errors = formValidation(formValues);
        setFormError(errors);

        if (Object.keys(errors).length === 0) {
            const scriptURL = import.meta.env.VITE_DATABASE_URL;
            const form = document.querySelector('form');
            const formData = new FormData(form);
            
            fetch(scriptURL, { method: 'POST', body: formData})
            .then(response => {
                setFormValues({ name: '', email: '', message: ''});
            }).catch(error => console.error('Error!', error.message))
        }
    };

    return (
        <div className="contact-container">
            <div className="contact-form-container">
                <form onSubmit={(e) => handleSubmit(e)} autoComplete='off' className='contact-form'>
                    <h2>Contact Me</h2>
                    <div className={formErrors.name && formValues.name ? "form-invalid-with-content" 
                                    : formErrors.name ?  "form-invalid" 
                                    : formValues.name ? "content-in-form" 
                                    : "form"}>
                        <div className={"form-inputs"}>
                            <input type="text" id='name' name='name' onChange={handleValidation} value={formValues.name} />
                            <label htmlFor="name">Name*</label>
                        </div>
                        <small>{formErrors.name}</small>
                    </div>
                    <div className={formErrors.email && formValues.email ? "form-invalid-with-content" 
                                    : formErrors.email ?  "form-invalid" 
                                    : formValues.email ? "content-in-form" 
                                    : "form"}>
                        <div className="form-inputs">
                            <input type="text" id='email' name='email' onChange={handleValidation} value={formValues.email} />
                            <label htmlFor="email">Email*</label>
                        </div>
                        <small>{formErrors.email}</small>
                    </div>
                    <div className={formErrors.message && formValues.message ? "form-invalid-with-content" 
                                    : formErrors.message ?  "form-invalid" 
                                    : formValues.message ? "content-in-form" 
                                    : "form"}>
                        <div className="form-inputs">
                            <textarea cols="30" rows="5" id="message" name='message' onChange={handleValidation} value={formValues.message}></textarea>
                            <label htmlFor="message">Message*</label>
                        </div>
                        <small>{formErrors.message}</small>
                    </div>
                    <button>Send</button>
                </form>
            </div>
            <div className="robot-wrapper">
                <div className="block" />
                <spline-viewer url="https://prod.spline.design/dMQ0iVSVvokRJY7G/scene.splinecode"></spline-viewer>
            </div>
        </div>
    );
};

export default transition(Contact);