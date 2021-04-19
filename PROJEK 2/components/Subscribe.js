import React, { useRef, useState } from 'react';
import {
  Heading,
  InputGroup,
  Box,
  Input,
  InputRightElement,
  Button,
  Link,
  useToast
} from '@chakra-ui/core';

const Subscribe = () => {
  const [loading, setLoading] = useState(false);
  const inputEl = useRef(null);
  const toast = useToast();

  const subscribe = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    setLoading(false);
    const { error } = await res.json();

    if (error) {
      toast({
        title: 'An error occurred.',
        description: error,
        status: 'error',
        duration: 3000,
        isClosable: true
      });

      return;
    }
  };

  return (
    <Box m={8} w="100%" mx="auto" as="form">
      <Heading as="h5" size="xs" mb={1} color="gray.900" fontWeight="medium">
        Website ini dibuat oleh,
        <Link
          isExternal
          href="https://www.youtube.com/channel/UCHS_OIuEOFXlHdAsVZb-10A"
          textDecoration="none"
          borderBottom="2px solid #ff9cf9"
          transition="all 0.1s ease-in"
          _hover={{
            textDecoration: 'none',
            borderBottom: '2px solid #09DB1F'
          }}
        >
          Rendy dwi putra.
        </Link>
      </Heading>
    </Box>
  );
};

export default Subscribe;
