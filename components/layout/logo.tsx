import NextLink from "next/link";
import { Center, HStack, Icon, Text } from "@chakra-ui/react";
import { FaConciergeBell } from "react-icons/fa";

const Logo = () => {
  return (
    <HStack as={NextLink} href="/" w="fit-content">
      <Center border="8px" borderColor="messenger.200" borderRadius="full" p="1.5" bgColor="messenger.500">
        <Icon as={FaConciergeBell} color="white" fontSize="md" />
      </Center>
      <Text fontSize="xl" fontWeight="bold" textTransform="uppercase">
        Concierge
      </Text>
    </HStack>
  );
};

export default Logo;
