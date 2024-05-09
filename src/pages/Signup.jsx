import { Box, Button, Container, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";

const Signup = () => {
  return (
    <Container centerContent>
      <Box w="full" maxW="md" p={4} borderWidth="1px" borderRadius="lg">
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter your email" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter your password" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <Input type="password" placeholder="Confirm your password" />
          </FormControl>
          <Button colorScheme="blue" w="full">
            Sign Up
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Signup;
