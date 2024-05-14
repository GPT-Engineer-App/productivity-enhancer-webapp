import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

function HighStress() {
  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Heading fontSize="xl">High Stress Action List</Heading>
      <Text mt={4}>Here are some actions to take when you are experiencing high stress.</Text>
    </Box>
  );
}

export default HighStress;
