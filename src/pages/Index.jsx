import { Box, Button, Container, Flex, Heading, IconButton, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack, useColorMode, Input, Select, FormControl, FormLabel } from "@chakra-ui/react";
import { FaMoon, FaSun, FaWater, FaRunning, FaEye, FaWind, FaVolumeUp, FaLightbulb, FaBrain, FaBolt, FaBookOpen, FaRegLightbulb, FaRegSmileBeam, FaRegCalendarPlus, FaRegListAlt, FaBook, FaLink, FaVideo, FaBlog, FaHeadphones } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [learningItems, setLearningItems] = React.useState([]);
  const addLearningItem = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const type = event.target.elements.type.value;
    const link = event.target.elements.link.value;
    const newItem = { title, type, link };
    setLearningItems([...learningItems, newItem]);
    event.target.reset();
  };
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
            <Tabs variant="soft-rounded" colorScheme="blue" orientation="vertical" align="start">
              <TabList>
                <Tab>
                  <FaWater />
                  <Text>Hydration</Text>
                </Tab>
                <Tab>
                  <FaRunning />
                  <Text>Physical Activity</Text>
                </Tab>
                <Tab>
                  <FaEye />
                  <Text>Eye Rest</Text>
                </Tab>
                <Tab>
                  <FaWind />
                  <Text>Breathing</Text>
                </Tab>
                <Tab>
                  <FaVolumeUp />
                  <Text>Sounds</Text>
                </Tab>
                <Tab>
                  <FaLightbulb />
                  <Text>Lights</Text>
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Text>Remember to drink water regularly to stay hydrated.</Text>
                </TabPanel>
                <TabPanel>
                  <Text>Take breaks for some physical activity to keep your body active.</Text>
                </TabPanel>
                <TabPanel>
                  <Text>Rest your eyes periodically, especially if you're looking at screens for a long time.</Text>
                </TabPanel>
                <TabPanel>
                  <Text>Ensure you're getting fresh air to maintain a healthy environment.</Text>
                </TabPanel>
                <TabPanel>
                  <Text>Monitor the noise levels in your environment. Use soothing sounds if necessary.</Text>
                </TabPanel>
                <TabPanel>
                  <Text>Check your workspace lighting to ensure it's adequate and comfortable for your eyes.</Text>
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
            <Flex direction="column" spacing={4} justifyContent="flex-end">
              <VStack>
                <Text>Motivation</Text>
                <IconButton aria-label="Motivation" icon={<FaRegLightbulb />} size="lg" />
              </VStack>
              <VStack>
                <Text>Effective Resting</Text>
                <IconButton aria-label="Effective Resting" icon={<FaMoon />} size="lg" />
              </VStack>
              <VStack>
                <Text>Back-To-Work</Text>
                <IconButton aria-label="Back-To-Work" icon={<FaRegCalendarPlus />} size="lg" />
              </VStack>
              <VStack>
                <Text>Brainstorming</Text>
                <IconButton aria-label="Brainstorming" icon={<FaBolt />} size="lg" />
              </VStack>
              <VStack>
                <Text>Energy</Text>
                <IconButton aria-label="Energy" icon={<FaSun />} size="lg" />
              </VStack>
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
            <form onSubmit={addLearningItem}>
              <VStack spacing={3}>
                <FormControl isRequired>
                  <FormLabel>Title</FormLabel>
                  <Input id="title" type="text" placeholder="Enter title" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Type</FormLabel>
                  <Select id="type" placeholder="Select type">
                    <option value="FaBook">
                      <FaBook />
                    </option>
                    <option value="FaLink">
                      <FaLink />
                    </option>
                    <option value="FaVideo">
                      <FaVideo />
                    </option>
                    <option value="FaBlog">
                      <FaBlog />
                    </option>
                    <option value="FaHeadphones">
                      <FaHeadphones />
                    </option>
                  </Select>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Link</FormLabel>
                  <Input id="link" type="url" placeholder="Enter URL" />
                </FormControl>
                <Button type="submit" colorScheme="blue">
                  Add Item
                </Button>
              </VStack>
            </form>
            <VStack spacing={4} mt={4}>
              {learningItems.map((item, index) => (
                <Flex key={index} align="center">
                  <Box as={item.type} size="20px" mr={2} />
                  <Text>{item.title}</Text>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    Link
                  </a>
                </Flex>
              ))}
            </VStack>
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
