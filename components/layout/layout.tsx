import { Box, Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Logo from "./logo";
import SearchInput from "./search-input";
import UserInfo from "./user-info";
import SideBarContent from "./sidebar-content";
import SideBarFooter from "./sidebar-footer";
import SideDrawer from "./side-drawer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { isOpen: isSideDrawerOpen, onOpen: onSideDrawerOpen, onClose: onSideDrawerClose } = useDisclosure();

  return (
    <Box>
      <Flex
        as="nav"
        id="side-bar"
        display={{ base: "none", md: "flex" }}
        flexDirection="column"
        position="fixed"
        top="0"
        left="0"
        zIndex="sticky"
        overflowY="auto"
        w="64"
        h="full"
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
      <SideDrawer id="side-drawer" isOpen={isSideDrawerOpen} onClose={onSideDrawerClose} />
      <Flex
        as="header"
        id="top-bar"
        justifyContent="space-between"
        columnGap="6"
        position="fixed"
        top="0"
        right="0"
        left={{ base: "0", md: "64" }}
        zIndex="sticky"
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
      <Box as="main" id="main" mt="20" ml={{ base: "0", md: "64" }} px="6">
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
