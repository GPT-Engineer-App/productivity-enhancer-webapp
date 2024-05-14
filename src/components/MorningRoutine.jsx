import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const MorningRoutine = () => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} mb={4}>
      <Heading as="h2" size="lg" mb={2}>
        Good Morning!
      </Heading>
      <VStack spacing={2} align="start">
        <Text>Start your day with a positive mindset.</Text>
        <Text>Take a few deep breaths and stretch your body.</Text>
        <Text>Plan your tasks and set achievable goals.</Text>
        <Text>Stay hydrated and take breaks when needed.</Text>
      </VStack>
    </Box>
  );
};

export default MorningRoutine;
