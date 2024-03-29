import { Box } from "@chakra-ui/layout";
import PlayerBar from "./playerBar";
import Sidebar from "./sidebar";

const pageLayout = ({children}) => {
  return (
    <Box width="100vw" height="100vh">
      {/* sidebar on the left */}
      <Box position="absolute" top="0" width="250px" left="0">
        <Sidebar />
      </Box>
      {/* page container */}
      <Box marginLeft="250px" marginBottom="100px">
        {children}
      </Box>
      {/* music player at the bottom */}
      <Box position="absolute" left="0" bottom="0">
        <PlayerBar />
      </Box>
    </Box>
  );
};

export default pageLayout;