import { Box, Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Logo from "./logo";
import SearchInput from "./search-input";
import UserInfo from "./user-info";
import SideDrawer from "./side-drawer";
import SideBarContent from "./sidebar-content";
import SideBarFooter from "./sidebar-footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { isOpen: isSideDrawerOpen, onOpen: onSideDrawerOpen, onClose: onSideDrawerClose } = useDisclosure();

  return (
    <Box>
      <Flex
        as="header"
        id="top-bar"
        justifyContent="space-between"
        columnGap="6"
        ml={{ base: "0", md: "64" }}
        boxShadow="sm"
        px="6"
        py="2.5"
        bgColor="gray.100"
      >
        <Box display={{ base: "flex", md: "none" }}>
          <IconButton
            aria-label="open main nav"
            icon={<HamburgerIcon fontSize="2xl" />}
            mr="4"
            onClick={onSideDrawerOpen}
          />
          <Logo />
        </Box>
        <SearchInput sx={{ display: { base: "none", md: "block" } }} />
        <UserInfo userName="Ahmed Rezk" userTitle="The Hotel Admin" />
      </Flex>
      <SideDrawer id="side-drawer" isOpen={isSideDrawerOpen} onClose={onSideDrawerClose} />
      <Flex
        as="nav"
        id="side-bar"
        display={{ base: "none", md: "flex" }}
        flexDirection="column"
        w="64"
        h="full"
        position="fixed"
        top="0"
        left="0"
        zIndex="sticky"
        overflowY="auto"
        boxShadow="sm"
        pt="4"
        bgColor="gray.200"
        aria-label="main navigation"
      >
        <Box as="header" mb="4" pl="4">
          <Logo />
        </Box>
        <SideBarContent />
        <Box as="footer" mt="auto" borderTop="1px" borderColor="gray.300" p="4">
          <SideBarFooter />
        </Box>
      </Flex>
      <Box as="main" id="main" ml={{ base: "0", md: "64" }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
