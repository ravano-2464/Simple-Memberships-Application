import React from 'react';
import { Center, Box } from '@chakra-ui/react';
import LoginComponent from '../components/Login';

const Login = () => {
  return (
    <Center height="100vh" width="1500px" bg="gray.50">
      <Box p={6} boxShadow="md" borderRadius="md" textAlign={'center'}>
        <LoginComponent />
      </Box>
    </Center>
  );
};

export default Login;