import PersonalNavbar from "./Navbar";
import PersonalFooter from "./Footer";
import { Box } from "@chakra-ui/react";

function PersonalLayout({ children }) {
  return (
    <div style={{ overflow: "hidden" }}>
      <PersonalNavbar />
      <Box pt={{ base: "80px", md: "90px" }} bgColor="white" minH="100vh">
        {children}
      </Box>
      <PersonalFooter />
    </div>
  );
}

export default PersonalLayout;
