import React, { useState } from 'react';
import transition from '../global/transitions/Transition';
import { motion } from 'framer-motion';
import { FaRegCheckCircle } from "react-icons/fa";
import './Contact.css';

const Contact = () => {
    const [formValues, setFormValues] = useState({ name: '', email: '', message: ''});
    const [formErrors, setFormError] = useState({});
    const [sending, setSending] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleFlip = () => {
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
        }
    }

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
            setSending(true);
            const scriptURL = import.meta.env.VITE_DATABASE_URL;
            const form = document.querySelector('form');
            const formData = new FormData(form);
            
            fetch(scriptURL, { method: 'POST', body: formData})
            .then(response => {
                handleFlip();
                setFormValues({ name: '', email: '', message: ''});
            })
            .catch(error => console.error('Error!', error.message))
            .finally(() => setSending(false));
        }
    };

    let min = 10;
    let max = 30;
    let random = 0;
    const lines = [];
    for (let i = 0; i < 150; i++) {
        random = Math.floor(Math.random() * (max - min + 1)) + min;
        lines.push(
            <li style={{ "--i": random  }} key={i}></li>
        )
    };
    
    return (
        <div className="contain-contact">
            <div className="auroa-background">
                <ul>
                    {lines}
                </ul>
                <div className="auroa-blur"></div>
            </div>
            <div className='flip-card'
                style={{height: `${Object.keys(formErrors).length === 3 ? '439px' 
                                : Object.keys(formErrors).length === 2 ? '419px'
                                : Object.keys(formErrors).length === 1 ? '397px'
                                : Object.keys(formErrors).length === 0 && '375px'}`}}
            >
                <motion.div className="flip-card-inner"
                    initial={false}
                    animate={{rotateY: isFlipped ? 180 : 360}}
                    transition={{duration: 0.6, animationDirection: "normal"}}
                    onAnimationComplete={() => setIsAnimating(false)}
                >
                    <motion.form onSubmit={(e) => handleSubmit(e)} autoComplete='off' className='flip-card-front'
                        initial={{opacity: 1}}
                        animate={{opacity: isFlipped ? 0 : 1}}
                        transition={{delay: 0.4, duration: 0}}
                    >
                            <h2>Contact Me</h2>
                            <div className={formErrors.name && formValues.name ? "form-invalid-with-content" 
                                            : formErrors.name ?  "form-invalid" 
                                            : formValues.name ? "content-in-form" 
                                            : "form"}>
                                <div className={"form-inputs"}>
                                    <input type="text" id='name' name='name' onChange={handleValidation} value={formValues.name} readOnly={sending} />
                                    <label htmlFor="name">Name*</label>
                                </div>
                                <small>{formErrors.name}</small>
                            </div>
                            <div className={formErrors.email && formValues.email ? "form-invalid-with-content" 
                                            : formErrors.email ?  "form-invalid" 
                                            : formValues.email ? "content-in-form" 
                                            : "form"}>
                                <div className="form-inputs">
                                    <input type="text" id='email' name='email' onChange={handleValidation} value={formValues.email} readOnly={sending} />
                                    <label htmlFor="email">Email*</label>
                                </div>
                                <small>{formErrors.email}</small>
                            </div>
                            <div className={formErrors.message && formValues.message ? "form-invalid-with-content" 
                                            : formErrors.message ?  "form-invalid" 
                                            : formValues.message ? "content-in-form" 
                                            : "form"}>
                                <div className="form-inputs">
                                    <textarea cols="30" rows="5" id="message" name='message' onChange={handleValidation} value={formValues.message} readOnly={sending} />
                                    <label htmlFor="message">Message*</label>
                                </div>
                                <small>{formErrors.message}</small>
                            </div>
                            <button className={sending && "loading-button"} type='submit' disabled={sending}>
                                {sending ? (
                                    <>
                                        <span className="form-loader" />
                                    </>
                                ) : 'Send'}
                            </button>
                    </motion.form>
                    <motion.div className="flip-card-back"
                        initial={{opacity: 1}}
                        animate={{opacity: isFlipped ? 1 : 0}}
                        transition={{delay: 0.4, duration: 0}}
                    >
                        <FaRegCheckCircle className='message-confirmation-icon' />
                        <h2>Message Recieved!</h2>
                        <p>
                            Depending on the message, expect a response in the inbox of the email used to submit this form.
                            Please keep in mind a response may take up to one week maximum.
                        </p>
                        <div className="message-confirmation-divider" />
                        <button className='new-message-button' onClick={handleFlip}>New Message</button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default transition(Contact);