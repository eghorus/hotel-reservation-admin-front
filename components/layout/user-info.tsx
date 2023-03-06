import NextLink from "next/link";
import { Avatar, Box, HStack, Menu, MenuButton, MenuGroup, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { MdOutlineAccountCircle, MdLogout } from "react-icons/md";

type UserInfoProps = {
  userName: string;
  userTitle: string;
};

const UserInfo = ({ userName, userTitle }: UserInfoProps) => {
  const userInfoText = (
    <Box minW="32" fontSize="xs">
      <Text color="gray.600" fontWeight="semibold">
        {userName}
      </Text>
      <Text color="gray.500">{userTitle}</Text>
    </Box>
  );

  return (
    <HStack>
      <Menu>
        <MenuButton mr="1">
          <Avatar
            size="sm"
            name={userName}
            ring="2px"
            ringColor="teal.400"
            ringOffset="2px"
            bg="messenger.500"
            color="teal.100"
          />
        </MenuButton>
        <Box display={{ base: "none", md: "block" }}>{userInfoText}</Box>
        <MenuList>
          <Box borderBottom="1px" borderColor="gray.200" px="5" pt="1" pb="2" textAlign="center">
            {userInfoText}
          </Box>
          <MenuGroup title="My Account">
            <MenuItem
              as={NextLink}
              href="#"
              icon={<MdOutlineAccountCircle fontSize="15px" />}
              color="gray.600"
              fontSize="sm"
            >
              Profile
            </MenuItem>
            <MenuItem icon={<MdLogout fontSize="15px" />} color="gray.600" fontSize="sm">
              Log Out
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </HStack>
  );
};

export default UserInfo;
