import React from "react";
import { Box, Heading, Text, VStack, RadioGroup, Radio, Stack } from "@chakra-ui/react";

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
      <Heading as="h3" size="md" mt={4}>
        15-Minute Morning Preparation Module
      </Heading>
      <VStack spacing={2} align="start">
        <Heading as="h4" size="sm">
          Step 1: Creating Awareness through Questions
        </Heading>
        <Text>
          <strong>What is My Current Stress Level?</strong>
        </Text>
        <Text>- Low Stress</Text>
        <Text>- Medium Stress</Text>
        <Text>- High Stress</Text>
        <Text>
          <strong>What are the Top 3 Tasks I Should Focus on Today?</strong>
        </Text>
        <Text>- Task 1</Text>
        <Text>- Task 2</Text>
        <Text>- Task 3</Text>
        <Text>
          <strong>Who Are 3 Sources or People I Can Seek Support From Today?</strong>
        </Text>
        <Text>- Source/Person 1</Text>
        <Text>- Source/Person 2</Text>
        <Text>- Source/Person 3</Text>

        <Heading as="h4" size="sm" mt={4}>
          Step 2: Guidance Based on Stress Level
        </Heading>
        <Text>
          <strong>Low Stress:</strong>
        </Text>
        <Text>- Review your daily task list (5 minutes)</Text>
        <Text>- Write down a motivational note for starting the day (2 minutes)</Text>
        <Text>- Take a few deep breaths before starting work (2 minutes)</Text>
        <Text>- Note down people who can provide support if needed (1 minute)</Text>

        <Text>
          <strong>Medium Stress:</strong>
        </Text>
        <Text>- Review your daily task list and prioritize (5 minutes)</Text>
        <Text>- Give yourself a short pep talk before starting the first task (3 minutes)</Text>
        <Text>- Take a brief moment to close your eyes or do light stretching to focus (2 minutes)</Text>

        <Text>
          <strong>High Stress:</strong>
        </Text>
        <Text>- Quickly review your daily task list and identify the most urgent task (5 minutes)</Text>
        <Text>- Take a few deep breaths and find a comfortable position to relax (3 minutes)</Text>
        <Text>- Practice a short meditation or focus exercise to center yourself (3 minutes)</Text>

        <Heading as="h4" size="sm" mt={4}>
          Step 3: Implementation and Planning
        </Heading>
        <Text>
          <strong>Quick Morning Preparation:</strong>
        </Text>
        <Text>- Attend to personal hygiene and dress neatly (3 minutes)</Text>
        <Text>- Prepare breakfast or grab a quick snack (2 minutes)</Text>
        <Text>- Gather necessary materials for work (notes, files) (3 minutes)</Text>

        <Text>
          <strong>Focus Time:</strong>
        </Text>
        <Text>- Allocate at least 10 minutes to focus on the first task (10 minutes)</Text>

        <Text>
          <strong>Review and Adjust:</strong>
        </Text>
        <Text>- Review tasks completed until noon and adjust plans if necessary (2 minutes)</Text>
      </VStack>
    </Box>
  );
};

export default MorningRoutine;
