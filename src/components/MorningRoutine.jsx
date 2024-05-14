import React from "react";
import { Box, Heading, VStack, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";

const MorningRoutine = () => {
  const [answers, setAnswers] = React.useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
  });

  const handleAnswerChange = (question, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: value,
    }));
  };

  return (
    <VStack flex="1" borderWidth="1px" borderRadius="lg" p={4} spacing={4} mb={4}>
      <Heading size="md">Morning Routine</Heading>
      <Box>
        <Text>Q1: How do you feel about your day?</Text>
        <RadioGroup onChange={(value) => handleAnswerChange("q1", value)} value={answers.q1}>
          <Stack direction="row">
            <Radio value="good">Good</Radio>
            <Radio value="bad">Bad</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box>
        <Text>Q2: What is your physical level today?</Text>
        <RadioGroup onChange={(value) => handleAnswerChange("q2", value)} value={answers.q2}>
          <Stack direction="row">
            <Radio value="high">High</Radio>
            <Radio value="low">Low</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box>
        <Text>Q3: Which describes your mental strength today?</Text>
        <RadioGroup onChange={(value) => handleAnswerChange("q3", value)} value={answers.q3}>
          <Stack direction="row">
            <Radio value="strong">Strong</Radio>
            <Radio value="weak">Weak</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box>
        <Text>Q4: External challenges today?</Text>
        <RadioGroup onChange={(value) => handleAnswerChange("q4", value)} value={answers.q4}>
          <Stack direction="row">
            <Radio value="many">Many</Radio>
            <Radio value="few">Few</Radio>
          </Stack>
        </RadioGroup>
      </Box>
    </VStack>
  );
};

export default MorningRoutine;
