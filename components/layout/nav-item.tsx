import NextLink from "next/link";
import { useRouter } from "next/router";
import { Button, Icon, Link } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

type NavItemProps = {
  href: string;
  icon: IconType;
  children: React.ReactNode;
};

const NavItem = ({ href, icon, children }: NavItemProps) => {
  const router = useRouter();
  const NavIcon = icon;

  return (
    <Link as={NextLink} href={href} _hover={{ textDecoration: "none" }} tabIndex={-1}>
      <Button
        colorScheme="messenger"
        variant={router.pathname === href ? "solid" : "ghost"}
        leftIcon={<Icon as={NavIcon} fontSize="sm" />}
        iconSpacing="4"
        justifyContent="flex-start"
        w="full"
        {...(router.pathname !== href && { color: "inherit" })}
        fontWeight="medium"
      >
        {children}
      </Button>
    </Link>
  );
};

export default NavItem;
