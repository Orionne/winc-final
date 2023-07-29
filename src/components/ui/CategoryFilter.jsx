import { Select } from "@chakra-ui/react";
import React from "react";

export const CategoryFilter = ({ changeFn, categories }) => {
  return (
    <Select
      placeholder='Select category'
      onChange={changeFn}
      textTransform={"capitalize"}
    >
      {categories.map((cat) => (
        <option value={cat.id} key={cat.id}>
          {cat.name}
        </option>
      ))}
    </Select>
  );
};
