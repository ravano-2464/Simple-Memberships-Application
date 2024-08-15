import React, { useState, useEffect } from 'react';
import { Box, Heading, List, ListItem, Container } from '@chakra-ui/react';

const Articles = () => {
  const [articles, setArticles] = useState<string[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch('/api/membership/articles');
      const data = await response.json();
      setArticles(data);
    };

    fetchArticles();
  }, []);

  return (
    <Container maxW="container.lg" p={4}>
      <Heading as="h1" size="2xl" mb={6}>
        Articles
      </Heading>
      <Box>
        <List spacing={4}>
          {articles.map((article, index) => (
            <ListItem key={index} p={2} borderWidth={1} borderRadius="md" boxShadow="md">
              {article}
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Articles;