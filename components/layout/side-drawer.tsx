import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import Logo from "./logo";
import SideBarContent from "./sidebar-content";
import SideBarFooter from "./sidebar-footer";

type SideDrawerProps = {
  id: string;
  isOpen: boolean;
  onClose: () => void;
};

const SideDrawer = ({ id, isOpen, onClose }: SideDrawerProps) => {
  return (
    <Drawer id={id} placement="left" isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Logo />
        </DrawerHeader>
        <DrawerBody>
          <SideBarContent />
        </DrawerBody>
        <DrawerFooter borderTop="1px" borderColor="gray.200">
          <SideBarFooter />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default SideDrawer;
