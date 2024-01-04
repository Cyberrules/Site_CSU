
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserPlus } from '@fortawesome/free-solid-svg-icons';
import '../signupmodal/Signup.scss'

const SignUp = ({ handleSignUp, handleSwitchToLogin }) => {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const textSignUp = {
        inregistreazate: 'Înregistrează-te',
        placeholderusername: 'Introdu username-ul',
        placeholderfirstname: 'Introdu numele',
        placeholderlastname: 'Introdu prenumele',
        placeholderemail: 'Introdu adresa de email',
        placeholderpassword: 'Introdu parola',
    };

    return (
        <div className="modal-signup">
            <div className="modal-content-signup">
                <span className="close" onClick={() => handleSwitchToLogin()}>
                    &times;
                </span>
                <form onSubmit={(e) => { e.preventDefault(); handleSignUp(username, firstName, lastName, email, password); }}>
                    <div className="input-container">
                    <div className="username-container">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            placeholder={textSignUp.placeholderusername}
                        />
                    </div>
                    <div className="firstname-container">
                        <label htmlFor="firstname">Nume</label>
                        <input
                            type="text"
                            id="firstname"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                            placeholder={textSignUp.placeholderfirstname}
                        />
                    </div>
                    <div className="lastname-container">
                        <label htmlFor="lastname">Prenume</label>
                        <input
                            type="text"
                            id="lastname"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            placeholder={textSignUp.placeholderlastname}
                        />
                    </div>
                    <div className="email-container">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder={textSignUp.placeholderemail}
                        />
                    </div>
                    <div className="password-container">
                        <label htmlFor="password">Parolă</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder={textSignUp.placeholderpassword}
                        />
                    </div>
                    </div>
                    <div className='container-butoane-login'>
                        <button type="submit" className='butoane-logare'>
                            {textSignUp.inregistreazate} <FontAwesomeIcon icon={faUserPlus} />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
