import { useSelector } from "react-redux";
import {Button, Container, Title} from "../../GlobalStyle";
import {List, ListItem} from "./UserData.elements";
import {FormGroup} from "../Register/Register.elements";

function UserData() {
    const userFromRedux = useSelector(state => state.auth);

    return (
    <Container>
        <Title>Your data are:</Title>
        <List>
            <ListItem>Name: {userFromRedux.username}</ListItem>
            <ListItem>Date of birth: {(new Date(userFromRedux.dateOfBirth)).toDateString()}</ListItem>
            <ListItem>Email: {userFromRedux.email}</ListItem>
        </List>
        <FormGroup action="/">
            <Button type="submit" value="Back" />
        </FormGroup>
    </Container>
    )
}

export default UserData;
