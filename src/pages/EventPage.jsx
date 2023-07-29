import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useLoaderData } from "react-router-dom";
import { useData } from "../components/DataContext";

export const loader = async ({ params }) => {
  const request = await fetch(`http://localhost:3000/events/${params.eventId}`);
  const oneEvent = await request.json();
  return oneEvent;
};

export const EventPage = () => {
  const theEvent = useLoaderData();
  const { categories } = useData();
  const { users } = useData();
  let categoryNames;
  if (categories.length > 0) {
    categoryNames = theEvent.categoryIds.map((category) => {
      const cat = categories.find((obj) => obj.id === category);
      return cat.name;
    });
  }
  let eventAuthor;
  if (users.length > 0) {
    eventAuthor = users.find((obj) => obj.id === theEvent.createdBy);
  }

  return (
    <>
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 20 }}
        >
          <Flex>
            <Image
              rounded={"md"}
              alt={"Event"}
              src={theEvent.image}
              fit={"contain"}
              align={"center"}
              position='sticky'
              top={40}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          </Flex>
          <Stack spacing={{ base: 2, md: 6 }}>
            <Box>
              <Heading lineHeight={1.1} fontWeight={600} fontSize='3xl'>
                {theEvent.title}
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
                textTransform='uppercase'
              >
                {categoryNames &&
                  categoryNames.map((category) => `${category} `)}
              </Text>
            </Box>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={4}>
                <Text fontSize={"lg"} fontWeight={"300"}>
                  {theEvent.description}
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Product Details
                </Text>
                <List spacing={2}>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Location:
                    </Text>{" "}
                    {theEvent.location}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Start time:
                    </Text>{" "}
                    {new Date(theEvent.startTime).toLocaleString("en-GB")}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      End time:
                    </Text>{" "}
                    {new Date(theEvent.endTime).toLocaleString("en-GB")}
                  </ListItem>
                </List>
              </Box>
              <HStack
                marginTop='2'
                spacing='2'
                display='flex'
                alignItems='center'
              >
                <Image
                  borderRadius='full'
                  boxSize='80px'
                  src={eventAuthor && eventAuthor.image}
                  alt='Avatar of author'
                />
                <Text fontWeight='medium'>
                  {eventAuthor && eventAuthor.name}
                </Text>
              </HStack>
              <ButtonGroup spacing={4}>
                <Button
                  w={"full"}
                  maxW={"md"}
                  mt={8}
                  size={"lg"}
                  py={"7"}
                  colorScheme='blue'
                >
                  Edit
                </Button>
                <Button
                  w={"full"}
                  maxW={"md"}
                  mt={8}
                  size={"lg"}
                  py={"7"}
                  colorScheme='red'
                >
                  Delete
                </Button>
              </ButtonGroup>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
};
