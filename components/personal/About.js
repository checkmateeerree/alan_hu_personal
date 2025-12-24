import React from "react";
import { Box, Flex, Heading, Text, VStack, HStack, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaBrain, FaCode, FaRocket } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const interestCards = [
  {
    icon: FaBrain,
    title: "AI/ML",
    description: "Exploring cutting-edge machine learning and artificial intelligence technologies",
    color: "blue",
  },
  {
    icon: FaCode,
    title: "Software Engineering",
    description: "Building scalable, efficient, and maintainable software systems",
    color: "purple",
  },
  {
    icon: FaRocket,
    title: "Low Latency Systems",
    description: "Optimizing systems for performance and real-time responsiveness",
    color: "teal",
  },
];

export default function About() {
  return (
    <Box
      py={{ base: 16, md: 24 }}
      px={{ base: 6, md: 12, lg: 20 }}
      bg="white"
      id="about"
    >
      <Box maxW="1200px" mx="auto">
        <VStack spacing={12} align="stretch">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            textAlign="center"
          >
            <Heading
              as="h2"
              size="xl"
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="800"
              mb={4}
              bgGradient="linear(to-r, blue.600, purple.600)"
              bgClip="text"
            >
              About Me
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.600"
              maxW="800px"
              mx="auto"
              lineHeight="1.8"
            >
              I'm a Computer Science student at the University of Pennsylvania with a passion
              for building innovative solutions at the intersection of AI, software engineering,
              and high-performance systems. I thrive on solving complex problems and creating
              impactful technology.
            </Text>
          </MotionBox>

          <Flex
            direction={{ base: "column", md: "row" }}
            gap={6}
            justify="center"
            align="stretch"
          >
            {interestCards.map((card, index) => (
              <MotionFlex
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                flex={1}
                direction="column"
                p={8}
                bg="gray.50"
                borderRadius="xl"
                border="1px solid"
                borderColor="gray.200"
                _hover={{
                  transform: "translateY(-8px)",
                  boxShadow: "xl",
                  borderColor: `${card.color}.300`,
                }}
                sx={{ transition: "all 0.3s" }}
              >
                <Icon
                  as={card.icon}
                  w={10}
                  h={10}
                  color={`${card.color}.600`}
                  mb={4}
                />
                <Heading as="h3" size="md" mb={3} color="gray.900">
                  {card.title}
                </Heading>
                <Text color="gray.600" lineHeight="1.7">
                  {card.description}
                </Text>
              </MotionFlex>
            ))}
          </Flex>
        </VStack>
      </Box>
    </Box>
  );
}
