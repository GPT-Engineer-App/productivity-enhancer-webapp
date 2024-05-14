import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

function LowStress() {
  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Heading fontSize="xl">Low Stress Action List</Heading>
      <Text mt={4}>Here are some actions to take when you are experiencing low stress.</Text>
    </Box>
  );
}

export default LowStress;
