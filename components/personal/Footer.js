import {
  Box,
  Container,
  Stack,
  Text,
  HStack,
  Link,
} from '@chakra-ui/react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function PersonalFooter() {
  return (
    <Box
      borderTopWidth={1}
      borderStyle={'solid'}
      borderColor={'gray.200'}
      bg="white"
    >
      <Container
        as={Stack}
        maxW={'7xl'}
        py={8}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ md: 'space-between' }}
        align={{ md: 'center' }}
      >
        <Text 
          fontSize="sm" 
          color="gray.600"
          fontWeight="400"
        >
          © 2026 Alan Hu. All rights reserved.
        </Text>
        <HStack spacing={4}>
          <Link
            href="https://linkedin.com/in/alan-hu"
            target="_blank"
            rel="noopener noreferrer"
            color="gray.600"
            _hover={{ color: "blue.600" }}
            transition="color 0.2s"
          >
            <FaLinkedin size="20px" />
          </Link>
          <Link
            href="mailto:alanhu29@seas.upenn.edu"
            color="gray.600"
            _hover={{ color: "blue.600" }}
            transition="color 0.2s"
          >
            <FaEnvelope size="20px" />
          </Link>
        </HStack>
      </Container>
    </Box>
  );
}
