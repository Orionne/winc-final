import {
  Button,
  Checkbox,
  FormLabel,
  Input,
  Select,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Form, redirect } from "react-router-dom";
import { Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useData } from "../components/DataContext";

export const action = async ({ request }) => {
  const toastId = "new-event-added";
  let formData = Object.fromEntries(await request.formData());
  formData["categoryIds"] = [parseInt(formData["categoryIds"])];
  formData["createdBy"] = parseInt(formData["createdBy"]);
  const newId = await fetch("http://localhost:3000/events", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((json) => json.id);
  toast.success("New event added!", {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 3000, //3 seconds
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    toastId,
    transition: Slide,
  });
  return redirect(`/events/${newId}`);
};

export const NewEvent = () => {
  const { categories } = useData();
  const { users } = useData();
  return (
    <Form method='post' id='edit-event-form'>
      <FormLabel fontWeight={"bold"}>Image URL:</FormLabel>
      <Input
        name='image'
        type={"text"}
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
      <Select name='createdBy' placeholder='Select author'>
        {users.map((user) => (
          <option value={user.id} key={user.id}>
            {user.name}
          </option>
        ))}
      </Select>

      <Button
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
    </Form>
  );
};
