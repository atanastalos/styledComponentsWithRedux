import React from "react";
import useRegister from "../../hooks/useRegister";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {Redirect} from "react-router-dom";
import {Button, Container, Title} from "../../GlobalStyle";
import {FormGroup, Input, Label, Label2} from "./Register.elements";

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
            <Container>
                <Title>Sign up!</Title>
                <FormGroup
                    method="post"
                    onSubmit={event => submitRegister(event)}>
                    <Label htmlFor="label">
                        Name:
                        <Input
                            id="label"
                            type="text"
                            name="name"
                            onChange={event => {
                                setUsername(event.target.value);
                            }}
                        />
                    </Label>
                    <Label htmlFor="label">
                        Date of birth:
                        <DatePicker
                            dateFormat="yyyy/MM/dd"
                            selected={dateOfBirth}
                            onChange={date =>
                                setDateOfBirth(date)}/>
                    </Label>
                    <Label2 className="akarmi" htmlFor="label">
                        Email:
                        <Input
                            id="label"
                            type="text"
                            name="email"
                            onChange={event => {
                                setEmail(event.target.value);
                            }}
                        />
                    </Label2>
                    {error ? <p className="error-message">{error}</p> : null}
                    <Button type="submit">Sign up</Button>
                </FormGroup>
            </Container>
        </>
    );
}

export default Register;
