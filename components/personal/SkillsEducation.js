import React from "react";
import { Box, Flex, Heading, Text, VStack, HStack, Badge, Divider, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaTrophy, FaCertificate } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const skills = [
  { name: "Python", level: "Expert" },
  { name: "JavaScript", level: "Advanced" },
  { name: "Java", level: "Advanced" },
  { name: "C++", level: "Advanced" },
  { name: "C#", level: "Advanced" },
  { name: "OCaml", level: "Intermediate" },
  { name: "SQL", level: "Advanced" },
  { name: "React/Next.js", level: "Advanced" },
  { name: "Node.js", level: "Advanced" },
  { name: "TensorFlow", level: "Advanced" },
  { name: "AI/ML", level: "Advanced" },
  { name: "LLM", level: "Advanced" },
  { name: "AWS", level: "Intermediate" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "DynamoDB", level: "Intermediate" },
  { name: "PostgreSQL", level: "Intermediate" },
  { name: "Git", level: "Advanced" },
  { name: "Docker", level: "Intermediate" },
  { name: "Kafka", level: "Intermediate" },
  { name: "Apache Spark", level: "Intermediate" },
  { name: "Microservices", level: "Intermediate" },
  { name: ".NET Framework", level: "Advanced" },
  { name: "RabbitMQ", level: "Intermediate" },
  { name: "Arduino/Raspberry Pi", level: "Advanced" },
  { name: "HTML/CSS", level: "Advanced" },
  { name: "Cybersecurity", level: "Intermediate" },
  { name: "Competitive Programming", level: "Advanced" },
  { name: "Robotics", level: "Advanced" },
  { name: "VR/AR", level: "Intermediate" },
  { name: "Figma", level: "Intermediate" },
];

const education = [
  {
    institution: "University of Pennsylvania",
    degree: "Bachelor of Science - BS, Computer Science",
    location: "Philadelphia, PA",
    gpa: "3.7/4.0",
    courses: [
      "Algorithms and Data Structures",
      "Scalable and Cloud Computing",
      "Intro to Computer Systems",
      "Database and Information Systems",
      "Intro to Human Computer Interaction"
    ],
    clubs: [
      "ConsultAI (Junior Project Lead)",
      "Penn Poker Club",
      "Penn Chess Club",
      "Penn Pickleball Club"
    ],
  },
  {
    institution: "Livingston High School",
    degree: "Co-Salutatorian (2 / ~500)",
    period: "Graduated",
    location: "Livingston, NJ",
    gpa: null,
    courses: null,
    clubs: null,
  },
];

const certifications = [
  {
    name: "GIAC Foundational Cybersecurity Technologies",
    issuer: "GIAC Certifications",
    date: "Sep 2023",
  },
];

const awards = [
  {
    name: "Scholar with Honors",
    issuer: "National Cyber Scholarship Foundation",
    date: "May 2023",
    description: "Placed in top 3.5% of national cybersecurity competition, awarded ~$3,000 GIAC Foundational Cybersecurity Technologies scholarship.",
  },
  {
    name: "USACO Gold Division",
    issuer: "USA Coding Olympiad",
    date: "Feb 2023",
    description: "Promoted to USACO Gold division (top 9% of competitive programmers worldwide).",
  },
  {
    name: "SAT Score: 1590",
    issuer: "College Board",
    date: "Dec 2022",
    description: "Near-perfect score on standardized test.",
  },
];

export default function SkillsEducation() {
  return (
    <Box
      py={{ base: 16, md: 24 }}
      px={{ base: 6, md: 12, lg: 20 }}
      bg="gray.50"
      id="skills"
    >
      <Box maxW="1200px" mx="auto">
        <VStack spacing={16} align="stretch">
          {/* Skills Section */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Heading
              as="h2"
              size="xl"
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="800"
              mb={8}
              textAlign="center"
              bgGradient="linear(to-r, blue.600, purple.600)"
              bgClip="text"
            >
              Skills & Expertise
            </Heading>
            <Flex
              direction="row"
              wrap="wrap"
              gap={4}
              justify="center"
            >
              {skills.map((skill) => (
                <Badge
                  key={skill.name}
                  px={6}
                  py={3}
                  borderRadius="full"
                  fontSize="md"
                  colorScheme="blue"
                  variant="solid"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                  transition="all 0.2s"
                >
                  {skill.name}
                </Badge>
              ))}
            </Flex>
          </MotionBox>

          <Divider />

          {/* Education Section */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <HStack mb={8} justify="center">
              <Icon as={FaGraduationCap} w={6} h={6} color="blue.600" />
              <Heading
                as="h2"
                size="xl"
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="800"
                bgGradient="linear(to-r, blue.600, purple.600)"
                bgClip="text"
              >
                Education
              </Heading>
            </HStack>
            <VStack spacing={6} align="stretch">
              {education.map((edu, index) => (
                <MotionFlex
                  key={edu.institution}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  direction="column"
                  p={6}
                  bg="white"
                  borderRadius="xl"
                  boxShadow="md"
                >
                  <Heading as="h3" size="md" mb={2} color="gray.900">
                    {edu.institution}
                  </Heading>
                  <Text color="gray.700" mb={2} fontWeight="500">
                    {edu.degree}
                  </Text>
                  <HStack spacing={4} fontSize="sm" color="gray.600" mb={2} flexWrap="wrap">
                    <Text>{edu.location}</Text>
                    {edu.gpa && (
                      <>
                        <Text>•</Text>
                        <Text fontWeight="600">GPA: {edu.gpa}</Text>
                      </>
                    )}
                  </HStack>
                  {edu.courses && (
                    <Box mt={3}>
                      <Text fontSize="sm" fontWeight="600" color="gray.700" mb={2}>
                        Relevant Courses:
                      </Text>
                      <HStack spacing={2} flexWrap="wrap">
                        {edu.courses.map((course, idx) => (
                          <Badge key={idx} colorScheme="blue" variant="subtle" fontSize="xs">
                            {course}
                          </Badge>
                        ))}
                      </HStack>
                    </Box>
                  )}
                  {edu.clubs && (
                    <Box mt={3}>
                      <Text fontSize="sm" fontWeight="600" color="gray.700" mb={2}>
                        Clubs & Activities:
                      </Text>
                      <HStack spacing={2} flexWrap="wrap">
                        {edu.clubs.map((club, idx) => (
                          <Badge key={idx} colorScheme="purple" variant="subtle" fontSize="xs">
                            {club}
                          </Badge>
                        ))}
                      </HStack>
                    </Box>
                  )}
                </MotionFlex>
              ))}
            </VStack>
          </MotionBox>

          <Divider />

          {/* Certifications */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <HStack mb={8} justify="center">
              <Icon as={FaCertificate} w={6} h={6} color="purple.600" />
              <Heading
                as="h2"
                size="xl"
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="800"
                bgGradient="linear(to-r, blue.600, purple.600)"
                bgClip="text"
              >
                Certifications
              </Heading>
            </HStack>
            <VStack spacing={4} align="stretch">
              {certifications.map((cert) => (
                <Box
                  key={cert.name}
                  p={6}
                  bg="white"
                  borderRadius="xl"
                  boxShadow="md"
                >
                  <Heading as="h3" size="sm" mb={2} color="gray.900">
                    {cert.name}
                  </Heading>
                  <Text fontSize="sm" color="gray.600">
                    {cert.issuer} • {cert.date}
                  </Text>
                </Box>
              ))}
            </VStack>
          </MotionBox>

          <Divider />

          {/* Awards */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <HStack mb={8} justify="center">
              <Icon as={FaTrophy} w={6} h={6} color="yellow.500" />
              <Heading
                as="h2"
                size="xl"
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="800"
                bgGradient="linear(to-r, blue.600, purple.600)"
                bgClip="text"
              >
                Honors & Awards
              </Heading>
            </HStack>
            <VStack spacing={6} align="stretch">
              {awards.map((award, index) => (
                <MotionFlex
                  key={award.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  direction="column"
                  p={6}
                  bg="white"
                  borderRadius="xl"
                  boxShadow="md"
                  borderLeft="4px solid"
                  borderColor="yellow.400"
                >
                  <HStack mb={2}>
                    <Text fontSize="xl">Trophy</Text>
                    <Heading as="h3" size="md" color="gray.900">
                      {award.name}
                    </Heading>
                  </HStack>
                  <Text fontSize="sm" color="gray.600" mb={2}>
                    {award.issuer} • {award.date}
                  </Text>
                  {award.description && (
                    <Text color="gray.700" lineHeight="1.7">
                      {award.description}
                    </Text>
                  )}
                </MotionFlex>
              ))}
            </VStack>
          </MotionBox>
        </VStack>
      </Box>
    </Box>
  );
}
