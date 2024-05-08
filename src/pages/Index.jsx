import { Box, Container, Flex, Heading, IconButton, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun, FaWater, FaBrain, FaBolt, FaBookOpen, FaRegLightbulb, FaRegSmileBeam, FaRegCalendarPlus, FaRegListAlt } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Flex justifyContent="space-between" alignItems="center" w="full">
          <Heading as="h1" size="xl">
            Welcome to Your Personal Development Hub
          </Heading>
          <IconButton aria-label="Toggle color mode" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} />
        </Flex>
        <Text fontSize="lg" textAlign="center">
          Start your day with focus and positivity! Let's prepare for a productive day.
        </Text>
        <Flex direction={{ base: "column", md: "row" }} w="full" mt={4}>
          <VStack flex="1" borderWidth="1px" borderRadius="lg" p={4} spacing={4}>
            <Heading size="md">Reminders</Heading>
            <Tabs variant="soft-rounded" colorScheme="blue">
              <TabList>
                <Tab>
                  <FaWater />
                </Tab>
                <Tab>
                  <FaBrain />
                </Tab>
                <Tab>
                  <FaBolt />
                </Tab>
                <Tab>
                  <FaRegLightbulb />
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Text>Drink water every hour.</Text>
                </TabPanel>
                <TabPanel>
                  <Text>Mindfulness and concentration exercises.</Text>
                </TabPanel>
                <TabPanel>
                  <Text>Short physical activity breaks.</Text>
                </TabPanel>
                <TabPanel>
                  <Text>Read to expand knowledge.</Text>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </VStack>
          <VStack flex="2" borderWidth="1px" borderRadius="lg" p={4} spacing={4} ml={{ md: 4 }}>
            <Heading size="md">MODS</Heading>
            <Flex w="full">
              <Box flex="1" p={4} borderWidth="1px" borderRadius="lg">
                <IconButton aria-label="Calm" icon={<FaRegSmileBeam />} size="lg" />
                <Text>CALM</Text>
              </Box>
              <Box flex="1" p={4} borderWidth="1px" borderRadius="lg" ml={4}>
                <IconButton aria-label="Focus" icon={<FaRegLightbulb />} size="lg" />
                <Text>FOCUS</Text>
              </Box>
              <Box flex="1" p={4} borderWidth="1px" borderRadius="lg" ml={4}>
                <IconButton aria-label="Challenger" icon={<FaBolt />} size="lg" />
                <Text>CHALLENGER</Text>
              </Box>
              <Box flex="1" p={4} borderWidth="1px" borderRadius="lg" ml={4}>
                <IconButton aria-label="Wise" icon={<FaBookOpen />} size="lg" />
                <Text>WISE</Text>
              </Box>
            </Flex>
          </VStack>
          <VStack flex="1" borderWidth="1px" borderRadius="lg" p={4} spacing={4} ml={{ md: 4 }}>
            <Heading size="md">Boosters!</Heading>
            <Flex direction="column" spacing={4}>
              <IconButton aria-label="Motivation" icon={<FaRegLightbulb />} size="lg" />
              <Text>Motivation</Text>
              <IconButton aria-label="Effective Resting" icon={<FaMoon />} size="lg" />
              <Text>Effective Resting</Text>
              <IconButton aria-label="Back-To-Work" icon={<FaRegCalendarPlus />} size="lg" />
              <Text>Back-To-Work</Text>
              <IconButton aria-label="Brainstorming" icon={<FaBolt />} size="lg" />
              <Text>Brainstorming</Text>
              <IconButton aria-label="Energy" icon={<FaSun />} size="lg" />
              <Text>Energy</Text>
            </Flex>
          </VStack>
        </Flex>
        <Flex direction={{ base: "column", md: "row" }} w="full" mt={4}>
          <Box flex="1" p={4} borderWidth="1px" borderRadius="lg">
            <Heading size="md">Work Assistant</Heading>
            <Text mt={2}>Tips for efficient work and time management.</Text>
          </Box>
          <Box flex="1" p={4} borderWidth="1px" borderRadius="lg" ml={{ md: 4 }}>
            <Heading size="md">Learning Management</Heading>
            <Text mt={2}>Courses and materials for development.</Text>
          </Box>
          <Box flex="1" p={4} borderWidth="1px" borderRadius="lg" ml={{ md: 4 }}>
            <Heading size="md">Health Tips</Heading>
            <Text mt={2}>Manage caffeine intake and maintain productivity.</Text>
          </Box>
        </Flex>
        <Flex justifyContent="center" w="full">
          <Box p={4} borderWidth="1px" borderRadius="lg">
            <Heading size="md">Inspiration Blog</Heading>
            <Text mt={2}>Read inspiring articles and stay updated with the latest industry trends.</Text>
          </Box>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;
