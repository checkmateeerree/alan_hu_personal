import React from "react";
import { Box, Flex, Heading, Text, VStack, HStack, Button, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const contactMethods = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "alanhu29@seas.upenn.edu",
    link: "mailto:alanhu29@seas.upenn.edu",
    color: "blue",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/alanhu292/",
    link: "https://www.linkedin.com/in/alan-hu-9088a5236/",
    color: "blue",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/checkmateeerree",
    link: "https://github.com/checkmateeerree",
    color: "gray",
  },
];

export default function Contact() {
  return (
    <Box
      py={{ base: 16, md: 24 }}
      px={{ base: 6, md: 12, lg: 20 }}
      bg="white"
      id="contact"
    >
      <Box maxW="800px" mx="auto">
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
              Get In Touch
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.600"
              lineHeight="1.8"
            >
              I'm always open to discussing new opportunities, interesting projects,
              or just having a conversation about technology and innovation.
            </Text>
          </MotionBox>

          <Flex
            direction={{ base: "column", md: "row" }}
            gap={6}
            justify="center"
            wrap="wrap"
          >
            {contactMethods.map((method, index) => (
              <MotionFlex
                key={method.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                direction="column"
                align="center"
                p={8}
                bg="gray.50"
                borderRadius="xl"
                border="1px solid"
                borderColor="gray.200"
                flex={{ base: "1 1 100%", md: "1 1 calc(33.333% - 16px)" }}
                minW={{ base: "100%", md: "200px" }}
                _hover={{
                  transform: "translateY(-8px)",
                  boxShadow: "xl",
                  borderColor: `${method.color}.300`,
                }}
                sx={{ transition: "all 0.3s" }}
                cursor="pointer"
                as="a"
                href={method.link}
                target={method.link.startsWith("http") ? "_blank" : undefined}
                rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <Icon
                  as={method.icon}
                  w={10}
                  h={10}
                  color={`${method.color}.600`}
                  mb={4}
                />
                <Heading as="h3" size="sm" mb={2} color="gray.900">
                  {method.label}
                </Heading>
                <Text
                  color="gray.600"
                  fontSize="sm"
                  textAlign="center"
                  wordBreak="break-word"
                >
                  {method.value}
                </Text>
              </MotionFlex>
            ))}
          </Flex>

          <MotionBox
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            textAlign="center"
            pt={8}
          >
            <Text color="gray.500" fontSize="sm">
              Open to Software Programmer and Software Engineer Intern roles
            </Text>
          </MotionBox>
        </VStack>
      </Box>
    </Box>
  );
}
