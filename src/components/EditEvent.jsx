import {
  Button,
  ButtonGroup,
  Checkbox,
  FormLabel,
  Input,
  Select,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Form } from "react-router-dom";

export const EditEvent = ({
  users,
  theEvent,
  clickEditFn,
  categories,
  eventAuthor,
}) => {
  return (
    <Form method='post' id='edit-event-form'>
      <FormLabel fontWeight={"bold"}>Image URL:</FormLabel>
      <Input
        name='image'
        type={"text"}
        defaultValue={theEvent.image}
        color={useColorModeValue("gray.800", "gray.200")}
        bg={useColorModeValue("gray.100", "gray.600")}
        rounded={"full"}
        border={0}
        _focus={{
          bg: useColorModeValue("gray.200", "gray.800"),
          outline: "none",
        }}
      />

      <FormLabel fontWeight={"bold"}>Title:</FormLabel>
      <Input
        name='title'
        type={"text"}
        defaultValue={theEvent.title}
        color={useColorModeValue("gray.800", "gray.200")}
        bg={useColorModeValue("gray.100", "gray.600")}
        rounded={"full"}
        border={0}
        _focus={{
          bg: useColorModeValue("gray.200", "gray.800"),
          outline: "none",
        }}
      />
      <FormLabel fontWeight={"bold"}>Categories:</FormLabel>
      <Stack spacing={5} direction='row'>
        {categories.map((category) => (
          <Checkbox key={category.id} value={category.id} name='categoryIds'>
            {category.name}
          </Checkbox>
        ))}
      </Stack>

      <FormLabel fontWeight={"bold"}>Description:</FormLabel>
      <Input
        name='description'
        type={"text"}
        defaultValue={theEvent.description}
        color={useColorModeValue("gray.800", "gray.200")}
        bg={useColorModeValue("gray.100", "gray.600")}
        rounded={"full"}
        border={0}
        _focus={{
          bg: useColorModeValue("gray.200", "gray.800"),
          outline: "none",
        }}
      />

      <Text
        fontSize={{ base: "16px", lg: "18px" }}
        color={useColorModeValue("yellow.500", "yellow.300")}
        fontWeight={"500"}
        textTransform={"uppercase"}
        mb={"4"}
      >
        Event Details
      </Text>

      <FormLabel fontWeight={"bold"}>Location:</FormLabel>
      <Input
        name='location'
        type={"text"}
        defaultValue={theEvent.location}
        color={useColorModeValue("gray.800", "gray.200")}
        bg={useColorModeValue("gray.100", "gray.600")}
        rounded={"full"}
        border={0}
        _focus={{
          bg: useColorModeValue("gray.200", "gray.800"),
          outline: "none",
        }}
      />

      <FormLabel fontWeight={"bold"}>Start time:</FormLabel>
      <Input
        name='startTime'
        type={"text"}
        defaultValue={theEvent.startTime}
        color={useColorModeValue("gray.800", "gray.200")}
        bg={useColorModeValue("gray.100", "gray.600")}
        rounded={"full"}
        border={0}
        _focus={{
          bg: useColorModeValue("gray.200", "gray.800"),
          outline: "none",
        }}
      />

      <FormLabel fontWeight={"bold"}>End time:</FormLabel>
      <Input
        name='endTime'
        type={"text"}
        defaultValue={theEvent.endTime}
        color={useColorModeValue("gray.800", "gray.200")}
        bg={useColorModeValue("gray.100", "gray.600")}
        rounded={"full"}
        border={0}
        _focus={{
          bg: useColorModeValue("gray.200", "gray.800"),
          outline: "none",
        }}
      />

      <FormLabel fontWeight={"bold"}>Author:</FormLabel>
      <Select
        name='createdBy'
        placeholder='Select author'
        defaultValue={eventAuthor.id}
      >
        {users.map((user) => (
          <option value={user.id} key={user.id}>
            {user.name}
          </option>
        ))}
      </Select>

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
          Discard
        </Button>
        <Button
          name='intent'
          value='edit'
          w={"full"}
          maxW={"md"}
          mt={8}
          size={"lg"}
          py={"7"}
          colorScheme='green'
          type='submit'
        >
          Submit
        </Button>
      </ButtonGroup>
    </Form>
  );
};
