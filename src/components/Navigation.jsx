import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, HStack, IconButton, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="#31353d" px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Link to="/">
                <img
                  src="https://res.cloudinary.com/production-eu/image/upload/c_crop,g_custom/a_exif,c_fill,dpr_1.0,f_auto,h_76,q_auto/v1667231853/sunhezwzutbaitptnzr2.png"
                  alt="Winc Academy Logo"
                  height="38px"
                  width="157px"
                />
              </Link>
            </Box>
          </HStack>
        </Flex>
      </Box>
    </>
  );
};
