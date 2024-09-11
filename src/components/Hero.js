import React from 'react';
import { Box, Heading, Text, Button, Flex, Image, useColorMode } from '@chakra-ui/react';
import portfolioImage from '../assets/images/aanu.jpg';

const Hero = () => {
  const { colorMode } = useColorMode();
  
  const bgColor = colorMode === 'light' ? 'linear(to-r, gray.200, gray.100)' : 'linear(to-r, gray.900, gray.800)';
  const textColor = colorMode === 'light' ? 'gray.900' : 'gray.200';

  return (
    <Box
      bgGradient={bgColor}
      minH="80vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={8}
      py={16}
      transition="background-color 0.2s, color 0.2s"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        maxW="1200px"
        textAlign={{ base: "center", md: "left" }}
      >
        <Box flex="1" mr={{ md: 8 }}>
          <Text
            fontSize="2xl"
            color={textColor}
            fontWeight="bold"
            mb="2"
          >
            Hello There.
          </Text>
          <Heading
            size="3xl"
            fontWeight="extrabold"
            color={textColor}
            lineHeight="1.2"
            letterSpacing="wide"
            textShadow={colorMode === 'light' ? '2px 2px 4px rgba(0, 0, 0, 0.1)' : '2px 2px 4px rgba(255, 255, 255, 0.1)'}
          >
            I'm Kenneth
          </Heading>
          <Text
            fontSize="xl"
            mt="4"
            color={textColor}
            maxW="500px"
            lineHeight="1.6"
            opacity={0.85}
          >
            I am a Frontend Developer passionate about building beautiful web experiences that captivate users.
          </Text>
          <Button
            mt="8"
            size="lg"
            bg={textColor}
            color={colorMode === 'light' ? 'gray.200' : 'gray.900'}
            px={8}
            py={6}
            fontWeight="bold"
            _hover={{
              bg: colorMode === 'light' ? 'gray.900' : 'gray.200',
              color: colorMode === 'light' ? 'gray.200' : 'gray.900',
              transform: 'scale(1.05)',
              transition: 'all 0.3s ease-in-out',
            }}
            boxShadow="lg"
          >
            View My Work
          </Button>
        </Box>

        <Box
          flex="1"
          mt={{ base: 8, md: 0 }}
          transform={{ base: 'none', md: 'rotate(2deg)' }}
          _hover={{ transform: 'rotate(0deg)', transition: 'all 0.3s ease-in-out' }}
        >
          <Image
            src={portfolioImage}
            alt="Portfolio showcase"
            borderRadius="lg"
            boxShadow="2xl"
            maxW="100%"
            transform="scale(1)"
            transition="transform 0.3s ease-in-out"
            _hover={{ transform: 'scale(1.05)' }}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
