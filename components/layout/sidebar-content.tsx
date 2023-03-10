import { Button, Flex, Heading, Icon } from "@chakra-ui/react";
import { FaCalendarAlt, FaCog, FaKey, FaMoneyCheckAlt, FaUsers } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import NavItem from "./nav-item";

const SideBarContent = () => {
  return (
    <Flex flexDirection="column" rowGap="1.5" px="4">
      <Heading as="h4" ml="4" mt="4" mb="2" color="gray.500" fontSize="sm" fontWeight="semibold">
        Main
      </Heading>
      <NavItem href="/calendar" icon={FaCalendarAlt}>
        Calendar
      </NavItem>
      <NavItem href="/reservations" icon={FaMoneyCheckAlt}>
        Reservations
      </NavItem>
      <NavItem href="/guests" icon={FaUsers}>
        Guests
      </NavItem>
      <NavItem href="/rooms" icon={FaKey}>
        Rooms
      </NavItem>
      <NavItem href="#" icon={FaCog}>
        Settings
      </NavItem>
      <Heading as="h4" ml="4" mt="4" mb="2" color="gray.500" fontSize="sm" fontWeight="semibold">
        Account
      </Heading>
      <Button
        colorScheme="messenger"
        variant="ghost"
        leftIcon={<Icon as={MdLogout} fontSize="sm" />}
        iconSpacing="4"
        justifyContent="flex-start"
        color="inherit"
        fontWeight="medium"
      >
        Log out
      </Button>
    </Flex>
  );
};

export default SideBarContent;
