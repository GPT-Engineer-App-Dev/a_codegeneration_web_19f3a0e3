import React, { useState } from "react";
import { Box, Flex, Heading, Input, Button, Textarea, useToast, Image } from "@chakra-ui/react";
import { FaCode, FaCopy } from "react-icons/fa";

const Index = () => {
  const [language, setLanguage] = useState("javascript");
  const [prompt, setPrompt] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const toast = useToast();

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleCodeGeneration = () => {
    // Here, you would call an API or use a code generation library
    // to generate code based on the prompt and language
    const generatedCode = `
      // This is a placeholder for the generated code
      console.log('Hello, World!');
    `;
    setGeneratedCode(generatedCode);
    toast({
      title: "Code generated",
      description: "The code has been generated successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generatedCode);
    toast({
      title: "Code copied",
      description: "The code has been copied to your clipboard.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Box bg="gray.800" p={6} rounded="md" boxShadow="lg" maxWidth="800px" width="100%">
        <Heading color="white" mb={6}>
          Code Generation
        </Heading>
        <Flex alignItems="center" mb={4}>
          <Input placeholder="Select language" value={language} onChange={handleLanguageChange} mr={2} bg="white" />
          <Button colorScheme="blue" onClick={handleLanguageChange}>
            <FaCode />
          </Button>
        </Flex>
        <Textarea placeholder="Enter your prompt" value={prompt} onChange={handlePromptChange} mb={4} bg="white" height="150px" />
        <Button colorScheme="green" onClick={handleCodeGeneration} mb={4}>
          Generate Code
        </Button>
        <Box bg="white" p={4} rounded="md" position="relative">
          <Textarea value={generatedCode} isReadOnly height="200px" bg="gray.100" />
          <Button colorScheme="blue" position="absolute" top={2} right={2} onClick={handleCopyCode}>
            <FaCopy />
          </Button>
        </Box>
        <Image src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZ2VuZXJhdGlvbnxlbnwwfHx8fDE3MTAxNzI0NTh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Code Generation" mt={6} rounded="md" />
      </Box>
    </Flex>
  );
};

export default Index;
