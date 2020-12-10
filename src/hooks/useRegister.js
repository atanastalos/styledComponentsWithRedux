import {useState} from 'react';
import {useDispatch} from "react-redux";
import {Register} from "../actions";

export default function useRegister() {
    const [username, setUsername] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [email, setEmail] = useState('');
    const [error, setError] = useState();
    const [redirect, setRedirect] = useState(false);
    const dispatch = useDispatch();

    function submitRegister(event) {
        event.preventDefault();
        let error = '';
        if (username === '' || !dateOfBirth || email === '') {
            error = 'Every field is required!';
        } else if (!email.includes('@')) {
            error = 'Invalid email!';
        }
        if (error === '') {
            setRedirect(true);
            dispatch(Register(username, dateOfBirth, email));
        } else {
            setError(error);
        }
    }

    return [
        setUsername,
        dateOfBirth,
        setDateOfBirth,
        setEmail,
        error,
        redirect,
        submitRegister,
    ];
}

