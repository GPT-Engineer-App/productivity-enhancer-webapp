import { Box, Container, Flex, Heading, IconButton, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorMode, VStack } from "@chakra-ui/react";
import { FaMoon, FaSun, FaWater, FaBrain, FaBolt, FaBookOpen, FaRegLightbulb, FaRegSmileBeam } from "react-icons/fa";

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
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>
              <FaWater /> Hydration
            </Tab>
            <Tab>
              <FaBrain /> Focus
            </Tab>
            <Tab>
              <FaBolt /> Energy
            </Tab>
            <Tab>
              <FaRegLightbulb /> Wisdom
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Text>Remember to drink water every hour to stay hydrated and maintain energy levels.</Text>
            </TabPanel>
            <TabPanel>
              <Text>Practice mindfulness and use concentration techniques to enhance your focus.</Text>
            </TabPanel>
            <TabPanel>
              <Text>Take short breaks and engage in physical activity to boost your energy.</Text>
            </TabPanel>
            <TabPanel>
              <Text>Read daily to expand your knowledge and improve decision-making skills.</Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Flex direction={{ base: "column", md: "row" }} w="full">
          <Box flex="1" p={4} borderWidth="1px" borderRadius="lg">
            <Heading size="md">Work Assistant</Heading>
            <Text mt={2}>Tips and techniques for efficient work and time management.</Text>
          </Box>
          <Box flex="1" p={4} borderWidth="1px" borderRadius="lg" ml={{ md: 4 }}>
            <Heading size="md">Learning Management</Heading>
            <Text mt={2}>Access courses and materials for your personal and professional development.</Text>
          </Box>
        </Flex>
        <Stack direction={{ base: "column", md: "row" }} spacing={4} w="full">
          <Box flex="1" p={4} borderWidth="1px" borderRadius="lg">
            <Heading size="md">Boosters!</Heading>
            <Text mt={2}>Motivational content and tools to help you adapt back to work after holidays.</Text>
          </Box>
          <Box flex="1" p={4} borderWidth="1px" borderRadius="lg">
            <Heading size="md">Health Tips</Heading>
            <Text mt={2}>Practical advice on managing caffeine intake and maintaining productivity.</Text>
          </Box>
        </Stack>
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
