import React, { useState } from 'react';
import { Box, Button, Center, FormControl, FormLabel, Input, Link, Heading, VStack } from '@chakra-ui/react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      console.log('Login successful');
    } else {
      console.error('Login failed');
    }
  };

  return (
    <Center height="100vh" bg="gray.50">
      <Box
        p={6}
        borderRadius="md"
        boxShadow="md"
        maxW="md"
        w="full"
      >
        <Heading as="h2" size="lg" mb={6} textAlign="center">
          Login
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button
              type="submit"
              colorScheme="blue"
              size="lg"
              mt={4}
              w="full"
            >
              Login
            </Button>
            <VStack spacing={2} mt={4}>
              <Link color="blue.500" href="/api/auth/google">
                Login with Google
              </Link>
              <Link color="blue.500" href="/api/auth/facebook">
                Login with Facebook
              </Link>
            </VStack>
          </VStack>
        </form>
      </Box>
    </Center>
  );
};

export default Login;