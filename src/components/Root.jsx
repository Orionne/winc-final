import { Box } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Navigation } from "./Navigation";

export const Root = () => {
  return (
    <Box>
      <Navigation />
      <ToastContainer />
      <Outlet />
    </Box>
  );
};
