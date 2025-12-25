import React from "react";
import { Box, Flex, Heading, Text, VStack, HStack, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaChess, FaBook, FaLightbulb, FaRocket } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const storyChapters = [
  {
    title: "First Lines of Code",
    period: "7th Grade",
    icon: FaChess,
    content: `I wrote my first HTML and CSS in a business class, and something clicked. Code felt like magic - I could create something from nothing. I dove into Python, then Java, solving problems and building projects. Technology was a black box of infinite possibility.`,
    color: "blue",
  },
  {
    title: "Beyond the Screen",
    period: "9th-10th Grade",
    icon: FaRocket,
    content: `Joining robotics changed everything. Code wasn't just abstract anymore - it moved motors, processed sensor data, and made physical things happen. I won a $10,000 MIT-Lemelson grant to build MaPSS, a pedestrian safety system. For the first time, I saw how technology could directly impact people's lives.`,
    color: "purple",
  },
  {
    title: "The Ethical Turn",
    period: "11th Grade",
    icon: FaBook,
    content: `Reading "The Immortal Life of Henrietta Lacks" opened my eyes. Science and technology weren't neutral - they could exploit, harm, or uplift. I started questioning: who benefits from innovation? Who gets left behind? This ethical lens transformed how I approached every project.`,
    color: "teal",
  },
  {
    title: "Building with Purpose",
    period: "College",
    icon: FaLightbulb,
    content: `At UPenn, I'm exploring the intersection of technology and society. Through internships at DraftKings, Scale AI, and NJIT, I've seen how AI systems can both solve complex problems and perpetuate biases. I'm learning to build technology that serves humanity, not just advances it.`,
    color: "orange",
  },
  {
    title: "Looking Forward",
    period: "Present",
    icon: FaLightbulb,
    content: `I'm a technologist who thinks critically about what we build. Technology isn't inherently good or bad - it's what we make of it. My goal is to create systems that truly benefit everyone, understanding that the most impactful work comes from considering the human consequences of our code.`,
    color: "green",
  },
];

export default function Story() {
  return (
    <Box
      py={{ base: 16, md: 24 }}
      px={{ base: 6, md: 12, lg: 20 }}
      bg="white"
      id="story"
    >
      <Box maxW="1200px" mx="auto">
        <VStack spacing={12} align="stretch">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
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
              My Story
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.600"
              maxW="800px"
              mx="auto"
              lineHeight="1.8"
            >
              My journey into technology - from writing my first lines of code to building systems that consider their human impact.
            </Text>
          </MotionBox>

          <VStack spacing={8} align="stretch">
            {storyChapters.map((chapter, index) => (
              <MotionFlex
                key={chapter.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                direction={{ base: "column", md: "row" }}
                gap={6}
                p={8}
                bg="gray.50"
                borderRadius="xl"
                border="1px solid"
                borderColor="gray.200"
                boxShadow="md"
                _hover={{
                  boxShadow: "xl",
                  borderColor: `${chapter.color}.300`,
                }}
                sx={{ transition: "all 0.3s" }}
              >
                <Flex
                  direction="column"
                  align="center"
                  display={{ base: "none", md: "flex" }}
                  mr={4}
                  minW="60px"
                >
                  <Box
                    w="60px"
                    h="60px"
                    borderRadius="full"
                    bg={`${chapter.color}.100`}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mb={2}
                  >
                    <Icon
                      as={chapter.icon}
                      w={8}
                      h={8}
                      color={`${chapter.color}.600`}
                    />
                  </Box>
                  {index !== storyChapters.length - 1 && (
                    <Box
                      w="2px"
                      h="full"
                      bg={`${chapter.color}.200`}
                      flex={1}
                      minH="40px"
                    />
                  )}
                </Flex>

                <Flex direction="column" flex={1}>
                  <HStack spacing={3} mb={2} flexWrap="wrap">
                    <Heading as="h3" size="md" color="gray.900">
                      {chapter.title}
                    </Heading>
                    <Text
                      fontSize="sm"
                      color={`${chapter.color}.600`}
                      fontWeight="600"
                    >
                      {chapter.period}
                    </Text>
                  </HStack>
                  <Text color="gray.700" lineHeight="1.8" fontSize={{ base: "sm", md: "md" }}>
                    {chapter.content}
                  </Text>
                </Flex>
              </MotionFlex>
            ))}
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
}

