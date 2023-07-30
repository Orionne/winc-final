import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DataContextProvider } from "./components/DataContext";
import { Root } from "./components/Root";
import {
  action as editEvent,
  EventPage,
  loader as eventLoader,
} from "./pages/EventPage";
import { EventsPage, loader as eventsPageLoader } from "./pages/EventsPage";
import { action as createEvent, NewEvent } from "./pages/NewEvent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <EventsPage />,
        loader: eventsPageLoader,
      },
      {
        path: "/events/:eventId",
        element: <EventPage />,
        loader: eventLoader,
        action: editEvent,
      },
      {
        path: "/events/new",
        element: <NewEvent />,
        action: createEvent,
      },
    ],
  },
]);
// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <DataContextProvider>
        <RouterProvider router={router} />
      </DataContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
