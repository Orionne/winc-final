import { Box, chakra, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const EventItem = ({ eventData, categories }) => {
  let categoryNames;
  if (categories.length > 0) {
    if (Array.isArray(eventData.categoryIds)) {
      categoryNames = eventData.categoryIds.map((category) => {
        const cat = categories.find((obj) => obj.id === category);
        return cat.name;
      });
    }
  }

  return (
    <Box mx='auto' rounded='lg' shadow='md' bg='#31353d' maxW='450px'>
      <Image
        roundedTop='lg'
        w='full'
        h={64}
        fit='cover'
        src={eventData.image}
        alt='Event'
      />

      <Box p={6}>
        <Box>
          <chakra.span fontSize='xs' textTransform='uppercase' color='white'>
            {categoryNames && categoryNames.map((category) => `${category} `)}
          </chakra.span>
          <Link to={`events/${eventData.id}`}>
            <chakra.span
              display='block'
              color='white'
              fontWeight='bold'
              fontSize='2xl'
              mt={2}
              _hover={{ textDecor: "underline" }}
            >
              {eventData.title}
            </chakra.span>
          </Link>
          <chakra.p mt={2} fontSize='sm' color='gray.400'>
            {eventData.description}
          </chakra.p>
        </Box>

        <Box mt={4}>
          <Flex alignItems='center'>
            <Flex alignItems='center'>
              <chakra.span mx={2} fontWeight='bold' color='gray.200'>
                Starts:
              </chakra.span>
              <chakra.span mx={1} fontSize='sm' color='gray.300'>
                {new Date(eventData.startTime).toLocaleString("en-GB")}
              </chakra.span>
            </Flex>
            <chakra.span mx={2} fontWeight='bold' color='gray.200'>
              Ends:
            </chakra.span>
            <chakra.span mx={1} fontSize='sm' color='gray.300'>
              {new Date(eventData.endTime).toLocaleString("en-GB")}
            </chakra.span>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
