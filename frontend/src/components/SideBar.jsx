import React from 'react';
import {NavLink} from "react-router-dom";
import {List, ListItem, ListIcon} from  '@chakra-ui/react';
import {CalendarIcon, ChatIcon, AtSignIcon, ViewIcon} from '@chakra-ui/icons';

const IconThemes = {
    transition: "all 1s ease-out",
    ":hover": {
        color: "white",
        boxSize: "1.1em"
    }
};

export default function SideBar() {
    return(
        <List color="grey.400" fontSize="1.2em" spacing={4} p="30px" >
            <ListItem>
                <NavLink to="/">
                    <ListIcon as={CalendarIcon} color="grey.900" sx={IconThemes} />
                    Para ti
                </NavLink>
            </ListItem>
            <ListItem>
                <NavLink to="/create">
                    <ListIcon as={ChatIcon} color="black" sx={IconThemes} />
                    Ajusta tu perfil
                </NavLink>
            </ListItem>
            <ListItem>
                <NavLink to="/profile">
                    <ListIcon as={ViewIcon} color="black" sx={IconThemes} />
                    Mis datos
                </NavLink>
            </ListItem>
        </List>
    );
}