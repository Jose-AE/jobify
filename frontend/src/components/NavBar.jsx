import React from 'react';
import {Flex, Box, Heading, Button, Text, Spacer, HStack, useToast, Avatar, AvatarBadge} from '@chakra-ui/react';

export default function NavBar () {
    /*const toast = useToast();

    const showToast = () => {
        toast({
            title: 'Logged out',
            description: 'Successfully logged out',
            duration: 5000,
            isClosable: true,
            status: 'success',
            position: 'top',
            icon: <UnlockIcon />
        })
    } */

    return (
        <Flex as="nav" p="10px" mb="40px" alignItems="center">
            <Heading as="h1">Jobify</Heading>
            <Spacer />
        </Flex>
    );
}