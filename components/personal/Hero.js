import React from "react";
import { Box, Flex, Heading, Text, Button, VStack, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);

export default function Hero() {
  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden"
      bgGradient="linear(to-br, gray.50, blue.50, purple.50)"
      px={{ base: 6, md: 12, lg: 20 }}
      py={{ base: 12, md: 16 }}
    >
      {/* Animated background elements */}
      <MotionBox
        position="absolute"
        top="10%"
        left="10%"
        w="300px"
        h="300px"
        bg="blue.200"
        opacity="0.1"
        borderRadius="full"
        filter="blur(60px)"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <MotionBox
        position="absolute"
        bottom="10%"
        right="10%"
        w="400px"
        h="400px"
        bg="purple.200"
        opacity="0.1"
        borderRadius="full"
        filter="blur(60px)"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <VStack
        spacing={8}
        align="center"
        textAlign="center"
        zIndex={1}
        maxW="1200px"
        mx="auto"
      >
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="gray.600"
            fontWeight="600"
            letterSpacing="2px"
            textTransform="uppercase"
            mb={4}
          >
            Software Engineer & AI/ML Enthusiast
          </Text>
        </MotionBox>

        <MotionHeading
          as="h1"
          size="2xl"
          fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
          fontWeight="900"
          letterSpacing="-2px"
          lineHeight="1.1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Box
            as="span"
            bgGradient="linear(to-r, blue.600, purple.600)"
            bgClip="text"
          >
            Alan Hu
          </Box>
        </MotionHeading>

        <MotionText
          fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
          color="gray.700"
          fontWeight="500"
          maxW="800px"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          CS @ UPenn | Incoming Software Engineer Intern @ Meta (Summer 2026)
        </MotionText>

        <MotionText
          fontSize={{ base: "md", md: "lg" }}
          color="gray.600"
          maxW="700px"
          lineHeight="1.8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Passionate about AI/ML, software engineering, and low latency systems.
          Building innovative solutions that make a difference.
        </MotionText>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <HStack spacing={4} justify="center" flexWrap="wrap">
            <Button
              as="a"
              href="https://linkedin.com/in/alan-hu"
              target="_blank"
              leftIcon={<FaLinkedin />}
              size="lg"
              bg="blue.600"
              color="white"
              _hover={{ bg: "blue.700", transform: "translateY(-2px)" }}
              transition="all 0.3s"
              boxShadow="lg"
            >
              LinkedIn
            </Button>
            <Button
              as="a"
              href="mailto:alanhu29@seas.upenn.edu"
              leftIcon={<FaEnvelope />}
              size="lg"
              variant="outline"
              borderColor="gray.300"
              color="gray.700"
              _hover={{ bg: "gray.50", transform: "translateY(-2px)" }}
              transition="all 0.3s"
            >
              Contact
            </Button>
          </HStack>
        </MotionBox>

        {/* Scroll indicator */}
        <MotionBox
          position="absolute"
          bottom="40px"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        >
          <Box
            w="24px"
            h="40px"
            border="2px solid"
            borderColor="gray.400"
            borderRadius="12px"
            position="relative"
          >
            <MotionBox
              w="4px"
              h="8px"
              bg="gray.400"
              borderRadius="2px"
              position="absolute"
              top="8px"
              left="50%"
              transform="translateX(-50%)"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </Box>
        </MotionBox>
      </VStack>
    </Box>
  );
}
