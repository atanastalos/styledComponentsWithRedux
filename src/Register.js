import React from "react";
import useRegister from "./hooks/useRegister";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {Redirect} from "react-router-dom";

function Register() {
    const [
        setUsername,
        dateOfBirth,
        setDateOfBirth,
        setEmail,
        error,
        redirect,
        submitRegister,
    ] = useRegister();

    return (
        <>
            {redirect ? <Redirect to="/userdata" /> : null}
            <div>
                <h1>Sign up!</h1>
                <form
                    method="post"
                    onSubmit={event => submitRegister(event)}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            onChange={event => {
                                setUsername(event.target.value);
                            }}
                        />
                    </label>
                    <label>
                        Date of birth:
                        <DatePicker
                            selected={dateOfBirth}
                            onChange={date =>
                                setDateOfBirth(date)}/>
                    </label>
                    <label>
                        Email:
                        <input
                            type="text"
                            name="email"
                            onChange={event => {
                                setEmail(event.target.value);
                            }}
                        />
                    </label>
                    {error ? <p className="error-message">{error}</p> : null}
                    <button type="submit">Sign up</button>
                </form>
            </div>
        </>
    );
}

export default Register;
