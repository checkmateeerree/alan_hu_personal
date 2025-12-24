import React from "react";
import { Box, Flex, Heading, Text, VStack, HStack, Badge, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const projects = [
  {
    title: "Instalite",
    subtitle: "Instagram-Style Social Media App",
    description: "Built a secure Instagram-style app with React, Node.js, and AWS featuring personalized content ranking via Apache Spark, real-time Kafka streaming, and GPT-based natural language search using RAG.",
    technologies: ["React", "Node.js", "AWS", "Kafka", "Spark", "ChromaDB", "RAG", "PostgreSQL"],
    color: "blue",
    link: null,
    award: null,
  },
  {
    title: "Chess Engine",
    subtitle: "High-Performance Chess AI",
    description: "Designed and implemented a chess engine from scratch using alpha-beta pruning with iterative deepening, achieving ~12,000 NPS performance with optimized bitboards and Zobrist hashing.",
    technologies: ["C++", "Python", "Alpha-Beta Pruning", "Bitboards", "Zobrist Hashing"],
    color: "purple",
    link: null,
    award: null,
  },
  {
    title: "TabShare",
    subtitle: "Receipt Scanning & Bill Splitting App",
    description: "Built a cross-platform app using React Native and FastAPI that scans receipts via OCR, extracts itemized data, and splits bills with smart tax/tip apportioning using an NLP pipeline.",
    technologies: ["React Native", "Python", "FastAPI", "Tesseract OCR", "PostgreSQL", "AWS S3", "NLP"],
    color: "teal",
    link: null,
    award: null,
  },
  {
    title: "Locus",
    subtitle: "VR Location Scouting & Shot Planning Tool",
    description: "A VR tool that lets content creators explore real-world locations in 3D and generate shot ideas with visual variations using Meta Quest, Cesium, and Stable Diffusion.",
    technologies: ["VR", "Meta Quest", "Cesium", "Qwen", "Stable Diffusion", "AI"],
    color: "orange",
    link: "https://lnkd.in/e35vaKpr",
    award: null,
  },
];

export default function Projects() {
  return (
    <Box
      py={{ base: 16, md: 24 }}
      px={{ base: 6, md: 12, lg: 20 }}
      bg="white"
      id="projects"
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
              Featured Projects
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
              Innovative solutions that make a real impact
            </Text>
          </MotionBox>

          <Flex
            direction={{ base: "column", md: "row" }}
            gap={8}
            align="stretch"
            wrap="wrap"
          >
            {projects.map((project, index) => (
              <MotionFlex
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                direction="column"
                flex={{ base: "1 1 100%", md: "1 1 calc(50% - 16px)" }}
                minW={{ base: "100%", md: "300px" }}
                p={8}
                bg="gray.50"
                borderRadius="xl"
                border="1px solid"
                borderColor="gray.200"
                _hover={{
                  transform: "translateY(-8px)",
                  boxShadow: "xl",
                  borderColor: `${project.color}.300`,
                }}
                sx={{ transition: "all 0.3s" }}
              >
                <VStack align="start" spacing={1} mb={3}>
                  <Heading as="h3" size="lg" color="gray.900">
                    {project.title}
                  </Heading>
                  <Text fontSize="sm" color="gray.600" fontWeight="500">
                    {project.subtitle}
                  </Text>
                </VStack>

                <Text color="gray.700" mb={6} lineHeight="1.8" flex={1}>
                  {project.description}
                </Text>

                <VStack align="stretch" spacing={4}>
                  <HStack spacing={2} flexWrap="wrap">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        colorScheme={project.color}
                        variant="subtle"
                        px={2}
                        py={1}
                        borderRadius="md"
                        fontSize="xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </HStack>

                  {project.link && (
                    <Button
                      as="a"
                      href={project.link}
                      target="_blank"
                      leftIcon={<FaExternalLinkAlt />}
                      colorScheme={project.color}
                      size="sm"
                      variant="outline"
                    >
                      Learn More
                    </Button>
                  )}
                </VStack>
              </MotionFlex>
            ))}
          </Flex>
        </VStack>
      </Box>
    </Box>
  );
}
