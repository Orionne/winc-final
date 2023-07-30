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
import { Form } from "react-router-dom";

export const ViewEvent = ({
  theEvent,
  eventAuthor,
  categoryNames,
  clickEditFn,
  // deleteFn,
}) => {
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
                  Event Details
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
              <Form method='delete' id='delete-event-form'>
                <ButtonGroup spacing={4}>
                  <Button
                    w={"full"}
                    maxW={"md"}
                    mt={8}
                    size={"lg"}
                    py={"7"}
                    colorScheme='blue'
                    onClick={() => clickEditFn()}
                  >
                    Edit
                  </Button>
                  <Button
                    name='intent'
                    value='delete'
                    w={"full"}
                    maxW={"md"}
                    mt={8}
                    size={"lg"}
                    py={"7"}
                    colorScheme='red'
                    // onClick={() => deleteFn(theEvent.id)}
                    type='submit'
                  >
                    Delete
                  </Button>
                </ButtonGroup>
              </Form>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
};
