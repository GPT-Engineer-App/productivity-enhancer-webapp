import React from "react";
import { Box, Heading, VStack, Radio, RadioGroup, Stack, Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const MorningRoutine = () => {
  const [answers, setAnswers] = React.useState({
    physicalCondition: "",
    emotionalState: "",
    mentalState: "",
    externalFactors: "",
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
        <Text>How's Your Physical Condition?</Text>
        <RadioGroup onChange={(value) => handleAnswerChange("physicalCondition", value)} value={answers.physicalCondition}>
          <Stack direction="row">
            <Radio value="1">I feel energetic and vigorous.</Radio>
            <Radio value="2">I'm slightly tired or fatigued than usual.</Radio>
            <Radio value="3">I feel very tired or exhausted.</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box>
        <Text>How's Your Emotional State?</Text>
        <RadioGroup onChange={(value) => handleAnswerChange("emotionalState", value)} value={answers.emotionalState}>
          <Stack direction="row">
            <Radio value="1">I'm generally calm or happy.</Radio>
            <Radio value="2">I'm a bit anxious or restless.</Radio>
            <Radio value="3">I feel very anxious or sad.</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box>
        <Text>How's Your Mental State?</Text>
        <RadioGroup onChange={(value) => handleAnswerChange("mentalState", value)} value={answers.mentalState}>
          <Stack direction="row">
            <Radio value="1">My mind is clear and focused.</Radio>
            <Radio value="2">I'm somewhat scattered or indecisive.</Radio>
            <Radio value="3">I feel mentally under a lot of pressure or confused.</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box>
        <Text>External Factors: What Awaits You Today?</Text>
        <RadioGroup onChange={(value) => handleAnswerChange("externalFactors", value)} value={answers.externalFactors}>
          <Stack direction="row">
            <Radio value="1">I expect a normal workday.</Radio>
            <Radio value="2">It will be a busy day, but manageable.</Radio>
            <Radio value="3">It's a day filled with important meetings or pressures.</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box>
        <Heading size="md">Stress Assessment Result:</Heading>
        <Text>
          {(() => {
            const values = Object.values(answers).map(Number);
            const count1 = values.filter((v) => v === 1).length;
            const count2 = values.filter((v) => v === 2).length;
            const count3 = values.filter((v) => v === 3).length;

            if (count3 >= 2 || (count2 >= 2 && count3 >= 1)) {
              return "High Stress: If you have mostly negative responses in multiple areas and your day is filled with significant pressures.";
            } else if (count2 >= 2 || (count1 >= 2 && count2 >= 2)) {
              return "Medium Stress: If you gave one or two slightly negative responses in any area or your day is moderately busy but manageable.";
            } else {
              return "Low Stress: If you mostly feel energetic, calm, and have a clear mind, and your day will continue with normal routine.";
            }
          })()}
        </Text>
      </Box>
    </VStack>
  );
};

export default MorningRoutine;
