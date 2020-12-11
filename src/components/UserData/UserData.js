import {useSelector} from "react-redux";
import {Button, Center, Container, Title} from "../../GlobalStyle";
import {List, ListItem, ListItemTitle} from "./UserData.elements";
import {FormGroup} from "../Register/Register.elements";
import React from "react";

function UserData() {
    const userFromRedux = useSelector(state => state.auth);

    return (
        <Container>
            <Title>Your data:</Title>
            <List>
                <ListItem>
                    <ListItemTitle>Name:</ListItemTitle>
                    {userFromRedux.username}
                </ListItem>
                <ListItem>
                    <ListItemTitle>Date of birth:</ListItemTitle>
                        {(new Date(userFromRedux.dateOfBirth)).toDateString()}
                </ListItem>
                <ListItem>
                    <ListItemTitle>Email:</ListItemTitle>
                        {userFromRedux.email}
                </ListItem>
            </List>
            <FormGroup action="/">
                <Center>
                    <Button type="submit">Back</Button>
                </Center>
            </FormGroup>
        </Container>
    )
}

export default UserData;
