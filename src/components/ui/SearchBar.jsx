import { Input, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export const SearchBar = ({ changeFn }) => {
  return (
    <Input
      type={"text"}
      placeholder={"Search events..."}
      onChange={changeFn}
      color={useColorModeValue("gray.800", "gray.200")}
      bg={useColorModeValue("gray.100", "gray.600")}
      rounded={"full"}
      border={0}
      _focus={{
        bg: useColorModeValue("gray.200", "gray.800"),
        outline: "none",
      }}
    />
  );
};
