import React from "react";
import Link from "next/link";
import { Box, Flex, Text, Button, Heading } from "@chakra-ui/react";

const MenuIt = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 8, md: 0 }}
      mr={{ base: 0, md: isLast ? 0 : 8 }}
      display="block"
      fontSize="sm"
      fontWeight="500"
      letterSpacing="0.5px"
      textTransform="uppercase"
      color="gray.700"
      _hover={{ color: "blue.600" }}
      transition="color 0.2s"
      {...rest}
    >
      <Link href={to}>{children}</Link>
    </Text>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="#1a202c"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="#1a202c"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

export default function PersonalNavbar() {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      position="fixed"
      justify="space-between"
      wrap="wrap"
      w="100%"
      zIndex="1000"
      mb={8}
      px={{ base: 6, md: 12, lg: 20 }}
      py={6}
      bg="white"
      borderBottom="1px solid"
      borderColor="gray.100"
      backdropFilter="blur(10px)"
      bgColor="rgba(255, 255, 255, 0.95)"
    >
      <Flex align="center">
        <Heading 
          size="lg" 
          fontWeight="700"
          letterSpacing="-0.5px"
          bgGradient="linear(to-r, blue.600, purple.600)"
          bgClip="text"
        >
          <Link href="/">Alan Hu</Link>
        </Heading>
      </Flex>

      <Box display={{ base: "block", lg: "none" }} onClick={toggleMenu} cursor="pointer">
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", lg: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "center", "flex-end", "flex-end"]}
          direction={["column", "column", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuIt to="/#story">Story</MenuIt>
          <MenuIt to="/#about">About</MenuIt>
          <MenuIt to="/#experience">Experience</MenuIt>
          <MenuIt to="/#projects">Projects</MenuIt>
          <MenuIt to="/#skills">Skills</MenuIt>
          <MenuIt to="/#contact" isLast>
            <Button
              size="sm"
              rounded="none"
              bg="blue.600"
              color="white"
              fontWeight="500"
              letterSpacing="0.5px"
              textTransform="uppercase"
              fontSize="xs"
              px={6}
              py={5}
              _hover={{ bg: "blue.700" }}
              transition="all 0.2s"
            >
              Contact
            </Button>
          </MenuIt>
        </Flex>
      </Box>
    </Flex>
  );
}
