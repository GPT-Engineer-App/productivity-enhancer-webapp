import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

function MediumStress() {
  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Heading fontSize="xl">Medium Stress Action List</Heading>
      <Text mt={4}>Here are some actions to take when you are experiencing medium stress.</Text>
    </Box>
  );
}

export default MediumStress;
