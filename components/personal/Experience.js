import React from "react";
import { Box, Flex, Heading, Text, VStack, HStack, Badge } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const experiences = [
  {
    company: "Meta",
    role: "Software Engineer Intern",
    period: "May 2026 (Incoming)",
    location: "Menlo Park, CA",
    description: "Incoming software engineering intern at Meta.",
    skills: ["Software Engineering", "Large Scale Systems"],
    color: "blue",
    logo: "🔷",
  },
  {
    company: "DraftKings Inc.",
    role: "Software Engineer Intern",
    period: "Jun 2025 - Aug 2025",
    location: "Boston, Massachusetts",
    description: "Developed a full-stack internal stats management tool using React.js and C# that reduced engineering involvement by 94% for stat updates.",
    skills: ["React.js", "C#", ".NET Framework", "RabbitMQ", "NCalc", "Full-Stack"],
    color: "green",
    logo: "📊",
  },
  {
    company: "Scale AI",
    role: "GenAI Technical Advisor Intern",
    period: "Nov 2024 - May 2025",
    location: "Remote",
    description: "Developed and tested LLM prompts to solve competitive programming problems, achieving 100% pass rates through chain-of-thought prompting.",
    skills: ["Python", "C++", "LLM", "Chain-of-Thought", "Competitive Programming", "AI Research"],
    color: "purple",
    logo: "🤖",
  },
  {
    company: "GPT4SME",
    role: "Software Engineer, Co-Founder",
    period: "May 2023 - Oct 2024",
    location: "Remote",
    description: "Co-founded a startup that helped nonprofits streamline operations with AI, saving over $25K in costs while improving site performance by 34.7%.",
    skills: ["Next.js", "Chakra-UI", "MongoDB", "Vercel", "Full-Stack", "AI Integration"],
    color: "teal",
    logo: "🚀",
  },
  {
    company: "New Jersey Institute of Technology",
    role: "Machine Learning Research Intern",
    period: "May 2022 - Sept 2022",
    location: "Newark, New Jersey",
    description: "Analyzed 52,000 medical text records to improve ClinicalBERT NLP model's hospital readmission prediction accuracy by 13.2% and identified demographic biases.",
    skills: ["Python", "TensorFlow", "Scikit-learn", "ClinicalBERT", "NLP", "Pandas", "NLTK", "spaCy", "Clinical Research"],
    color: "orange",
    logo: "🔬",
  },
];

export default function Experience() {
  return (
    <Box
      py={{ base: 16, md: 24 }}
      px={{ base: 6, md: 12, lg: 20 }}
      bg="gray.50"
      id="experience"
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
              Experience
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
              Building impactful solutions across diverse industries
            </Text>
          </MotionBox>

          <VStack spacing={8} align="stretch">
            {experiences.map((exp, index) => (
              <MotionFlex
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                direction={{ base: "column", md: "row" }}
                gap={6}
                p={6}
                bg="white"
                borderRadius="xl"
                boxShadow="md"
                _hover={{
                  boxShadow: "xl",
                  transform: "translateX(8px)",
                }}
                sx={{ transition: "all 0.3s" }}
              >
                {/* Timeline indicator */}
                <Flex
                  direction="column"
                  align="center"
                  display={{ base: "none", md: "flex" }}
                  mr={4}
                >
                  <Box
                    w="12px"
                    h="12px"
                    borderRadius="full"
                    bg={`${exp.color}.500`}
                    border="3px solid white"
                    boxShadow="0 0 0 3px"
                    borderColor={`${exp.color}.200`}
                  />
                  {index !== experiences.length - 1 && (
                    <Box
                      w="2px"
                      h="full"
                      bg={`${exp.color}.200`}
                      flex={1}
                      minH="60px"
                    />
                  )}
                </Flex>

                <Flex direction="column" flex={1}>
                  <HStack spacing={3} mb={2} flexWrap="wrap">
                    <Text fontSize="2xl">{exp.logo}</Text>
                    <Heading as="h3" size="md" color="gray.900">
                      {exp.role}
                    </Heading>
                    <Text fontWeight="600" color={`${exp.color}.600`}>
                      @ {exp.company}
                    </Text>
                  </HStack>

                  <HStack spacing={4} mb={3} fontSize="sm" color="gray.600" flexWrap="wrap">
                    <HStack spacing={1}>
                      <FaCalendarAlt />
                      <Text>{exp.period}</Text>
                    </HStack>
                    <HStack spacing={1}>
                      <FaMapMarkerAlt />
                      <Text>{exp.location}</Text>
                    </HStack>
                  </HStack>

                  <Text color="gray.700" mb={4} lineHeight="1.7">
                    {exp.description}
                  </Text>

                  <HStack spacing={2} flexWrap="wrap">
                    {exp.skills.map((skill) => (
                      <Badge
                        key={skill}
                        colorScheme={exp.color}
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontSize="xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </HStack>
                </Flex>
              </MotionFlex>
            ))}
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
}
