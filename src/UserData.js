import { useSelector } from "react-redux";

function UserData() {
    const userFromRedux = useSelector(state => state.auth);

    console.log(typeof userFromRedux.dateOfBirth);

    return (
    <div>
        <h1>Your data are:</h1>
        <ul>
            <li>Name: {userFromRedux.username}</li>
            <li>Date of birth: {(new Date(userFromRedux.dateOfBirth)).toDateString()}</li>
            <li>Email: {userFromRedux.email}</li>
        </ul>
        <form action="/">
            <input type="submit" value="Back" />
        </form>

    </div>
    )
}

export default UserData;
