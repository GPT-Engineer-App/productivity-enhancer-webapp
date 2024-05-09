import { Box, Button, Container, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";

const Login = () => {
  return (
    <Container centerContent>
      <Box w="full" maxW="md" p={4} borderWidth="1px" borderRadius="lg">
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input id="email" type="email" placeholder="Enter your email" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input id="password" type="password" placeholder="Enter your password" />
          </FormControl>
          <Button
            colorScheme="blue"
            w="full"
            onClick={() => {
              const email = document.getElementById("email").value;
              const password = document.getElementById("password").value;
              if (email === "berk" && password === "berk1234") {
                window.location.href = "/index";
              } else {
                alert("Invalid credentials");
              }
            }}
          >
            Log In
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Login;
