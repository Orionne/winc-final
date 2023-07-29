import { Box, Center, Container, Flex, Heading, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useData } from "../components/DataContext";
import { EventItem } from "../components/EventItem";
import { CategoryFilter } from "../components/ui/CategoryFilter";
import { SearchBar } from "../components/ui/SearchBar";

export const loader = async () => {
  const request = await fetch("http://localhost:3000/events");
  const allEvents = await request.json();
  return allEvents;
};

export const EventsPage = () => {
  const { categories } = useData();
  const allEvents = useLoaderData();
  const [events, setEvents] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [categorySelected, setCategorySelected] = useState("");

  const fetchEvents = async () => {
    const response = await fetch(
      `http://localhost:3000/events?q=${searchField}`
    );
    const fetchedEvents = await response.json();
    setEvents(fetchedEvents);
  };

  const fetchByCategory = async () => {
    const response = await fetch(
      `http://localhost:3000/events?categoryIds.0=${categorySelected}`
    );
    const fetchedEvents = await response.json();
    setEvents(fetchedEvents);
  };

  useEffect(() => {
    fetchEvents();
  }, [searchField]);

  useEffect(() => {
    fetchByCategory();
  }, [categorySelected]);

  const handleSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategorySelected(event.target.value);
  };

  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>Events Page</Heading>
        <Stack spacing={4} direction={{ base: "column", md: "row" }} w={"full"}>
          <SearchBar changeFn={handleSearchChange} />
          <CategoryFilter
            changeFn={handleCategoryChange}
            categories={categories}
          />
        </Stack>
      </Stack>
      <Center flexDir='column'>
        <Flex gap={10} py='10' flexWrap='wrap' justify={"center"}>
          {!searchField && !categorySelected
            ? allEvents.map((event) => (
                <EventItem
                  key={event.id}
                  eventData={event}
                  categories={categories}
                />
              ))
            : events.map((event) => (
                <EventItem
                  key={event.id}
                  eventData={event}
                  categories={categories}
                />
              ))}
        </Flex>
      </Center>
    </Box>
  );
};
