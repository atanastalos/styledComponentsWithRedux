export const Register = (
    username,
    dateOfBirth,
    email
) => {
    return {
        type: 'REGISTER',
        username,
        dateOfBirth,
        email
    };
};
