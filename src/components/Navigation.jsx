import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  chakra,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const bg = "#31353d";
  const mobileNav = useDisclosure();

  return (
    <>
      <chakra.header
        bg={bg}
        w='full'
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow='md'
      >
        <Flex alignItems='center' justifyContent='space-between' mx='auto'>
          <HStack display='flex' spacing={3} alignItems='center'>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label='Open menu'
                fontSize='20px'
                color='white'
                variant='ghost'
                icon={<HamburgerIcon />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos='absolute'
                width='100%'
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection='column'
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded='sm'
                shadow='sm'
              >
                <CloseButton
                  aria-label='Close menu'
                  justifySelf='self-start'
                  onClick={mobileNav.onClose}
                />
                <Link to='/'>
                  <Button w='full' variant='ghost' color='white'>
                    Home
                  </Button>
                </Link>
                <Link to='/events/new'>
                  <Button w='full' variant='ghost' color='white'>
                    Add event
                  </Button>
                </Link>
              </VStack>
            </Box>
            <Link to='/'>
              <img
                src='https://res.cloudinary.com/production-eu/image/upload/c_crop,g_custom/a_exif,c_fill,dpr_1.0,f_auto,h_76,q_auto/v1667231853/sunhezwzutbaitptnzr2.png'
                alt='Winc Academy Logo'
                height='38px'
                width='157px'
              />
            </Link>

            <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
              <Link to='/'>
                <Button variant='ghost' size='sm' color='white'>
                  Home
                </Button>
              </Link>
              <Link to='/events/new'>
                <Button variant='ghost' size='sm' color='white'>
                  Add Event
                </Button>
              </Link>
            </HStack>
          </HStack>
          <HStack
            spacing={3}
            display={mobileNav.isOpen ? "none" : "flex"}
            alignItems='center'
          >
            <Avatar
              size='md'
              name='Orionne'
              src='https://avatars.githubusercontent.com/u/83840748?v=4'
            />
          </HStack>
        </Flex>
      </chakra.header>
    </>
  );
};
