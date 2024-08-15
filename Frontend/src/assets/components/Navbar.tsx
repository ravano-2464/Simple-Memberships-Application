import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Link } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box bg="white" px={10} py={15} boxShadow="md" position="fixed" top={0} width="100%" zIndex="1000">
      <Flex maxW="9000px" mx="auto" align="center" justify="start">
        <Flex as="nav" gap={15} align="center">
          <Link as={RouterLink} to="/" color="black" _hover={{ textDecoration: 'none', color: 'gray.600' }}>
            Home
          </Link>
          <Link as={RouterLink} to="/articles" color="black" _hover={{ textDecoration: 'none', color: 'gray.600' }}>
            Articles
          </Link>
          <Link as={RouterLink} to="/videos" color="black" _hover={{ textDecoration: 'none', color: 'gray.600' }}>
            Videos
          </Link>
          <Link as={RouterLink} to="/membership" color="black" _hover={{ textDecoration: 'none', color: 'gray.600' }}>
            Membership
          </Link>
          <Link as={RouterLink} to="/login" color="black" _hover={{ textDecoration: 'none', color: 'gray.600' }}>
            Login
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;