import { Box, Heading, FormControl, FormLabel, Input, Textarea, Button, useColorMode } from '@chakra-ui/react';

const Contact = () => {
  const { colorMode } = useColorMode();
  
  const bgColor = colorMode === 'light' ? 'gray.200' : 'gray.900';
  const textColor = colorMode === 'light' ? 'gray.900' : 'gray.200';
  const inputBgColor = colorMode === 'light' ? 'white' : 'gray.800';
  const inputBorderColor = colorMode === 'light' ? 'gray.400' : 'gray.600';
  const buttonBgColor = colorMode === 'light' ? 'black' : 'white';
  const buttonHoverBgColor = colorMode === 'light' ? 'gray.800' : 'gray.200';
  const buttonHoverTextColor = colorMode === 'light' ? 'white' : 'black';

  return (
    <Box id="contact" py="12" px="5" bg={bgColor} borderTop="none" borderColor={textColor}>
      <Heading textAlign="center" mb="10" color={textColor}>
        Contact Me
      </Heading>

      <Box maxW={{ base: '100%', sm: '90%', md: '600px' }} mx="auto">
        <FormControl id="name" mb="6">
          <FormLabel color={textColor}>Full Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter your full name"
            bg={inputBgColor}
            borderColor={inputBorderColor}
            color={textColor}
            _placeholder={{ color: colorMode === 'light' ? 'gray.500' : 'gray.300' }}
            borderRadius="md"
            size="lg"
          />
        </FormControl>

        <FormControl id="email" mb="6">
          <FormLabel color={textColor}>Email Address</FormLabel>
          <Input
            type="email"
            placeholder="Enter your email"
            bg={inputBgColor}
            borderColor={inputBorderColor}
            color={textColor}
            _placeholder={{ color: colorMode === 'light' ? 'gray.500' : 'gray.300' }}
            borderRadius="md"
            size="lg"
          />
        </FormControl>

        <FormControl id="message" mb="6">
          <FormLabel color={textColor}>Your Message</FormLabel>
          <Textarea
            placeholder="Enter your message"
            bg={inputBgColor}
            borderColor={inputBorderColor}
            color={textColor}
            _placeholder={{ color: colorMode === 'light' ? 'gray.500' : 'gray.300' }}
            borderRadius="md"
            size="lg"
            minH="150px"
          />
        </FormControl>

        <Button
          bg={buttonBgColor}
          color={textColor}
          size="lg"
          w="full"
          _hover={{ bg: buttonHoverBgColor, color: buttonHoverTextColor }}
          borderRadius="md"
          transition="background-color 0.3s ease, color 0.3s ease"
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
