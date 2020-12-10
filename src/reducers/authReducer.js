const auth = {
    username: '',
    dateOfBirth: new Date(),
    email: '',
};

export default function authReducer(state = auth, action) {
    return {
        username: action.username,
        dateOfBirth: action.dateOfBirth,
        email: action.email,
    }
}
