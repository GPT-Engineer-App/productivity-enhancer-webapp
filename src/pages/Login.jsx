import { Box, Button, Container, FormControl, FormLabel, Input, VStack, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const login = () => {
    if (email === "berk" && password === "berk1234") {
      toast({
        title: "Login Successful",
        description: "You have successfully logged in.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      navigate("/");
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid credentials.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  return (
    <Container centerContent>
      <Box w="full" maxW="md" p={4} borderWidth="1px" borderRadius="lg">
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Button colorScheme="blue" w="full" onClick={login}>
            Log In
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Login;
