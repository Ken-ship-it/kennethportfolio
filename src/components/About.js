import { Box, Heading, Text, useColorMode } from '@chakra-ui/react';

const About = () => {
  const { colorMode } = useColorMode();

  const bgColor = colorMode === 'light' ? 'gray.200' : 'gray.900';
  const textColor = colorMode === 'light' ? 'gray.900' : 'gray.200';
  const borderColor = colorMode === 'light' ? 'gray.400' : 'gray.600';

  return (
    <Box
      id="about"
      py="16"
      px="5"
      bg={bgColor}
      borderTop="none"
      borderColor={borderColor}
      transition="background-color 0.2s, color 0.2s"
      textAlign="center"
    >
      <Heading
        mb="8"
        color={textColor}
        position="relative"
        display="inline-block"
        _hover={{
          _after: {
            width: '100%',
          },
        }}
        _after={{
          content: '""',
          position: 'absolute',
          bottom: '-6px',
          left: '50%',
          width: '60%',
          height: '2px',
          bg: borderColor,
          transition: 'width 0.4s ease',
          transform: 'translateX(-50%)'
        }}
      >
        About Me
      </Heading>

      <Text
        color={textColor}
        maxW="800px"
        mx="auto"
        textAlign="center"
        fontSize="lg"
        lineHeight="1.8"
        letterSpacing="wide"
        opacity={0.85}
        px={{ base: 4, md: 0 }}
      >
        Hi there! I’m Kenneth, a Front-end Developer with a deep passion for crafting engaging and intuitive web experiences. My journey into the world of web development started with a fascination for both technology and design, leading me to specialize in creating seamless user interfaces and dynamic web applications.

        I thrive on turning complex ideas into elegant, user-friendly solutions, blending creativity with technical skill. My expertise spans HTML, CSS, JavaScript, and React.js, and I’m always eager to embrace new challenges and stay on top of the latest industry trends.

        I believe that great design is more than just visual appeal—it’s about creating meaningful interactions and enhancing usability. My work is driven by a commitment to quality, attention to detail, and a constant desire to learn and grow.

        Outside of coding, I love exploring new design trends and experimenting with emerging technologies. Whether it’s solving a tricky problem or pushing the boundaries of my creativity, I’m always excited to take on new projects and collaborate with others.

        Feel free to explore my portfolio and reach out if you’d like to discuss how we can work together to bring your ideas to life!
      </Text>
    </Box>
  );
};

export default About;
