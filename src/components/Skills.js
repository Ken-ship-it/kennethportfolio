import { Box, Heading, SimpleGrid, Text, useColorMode } from '@chakra-ui/react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';

const skills = [
  { name: 'HTML5', icon: FaHtml5 },
  { name: 'CSS3', icon: FaCss3Alt },
  { name: 'JavaScript', icon: FaJsSquare },
  { name: 'React', icon: FaReact },
];

const Skills = () => {
  const { colorMode } = useColorMode();


  const bgColor = colorMode === 'light' ? 'gray.200' : 'gray.900';
  const textColor = colorMode === 'light' ? 'gray.900' : 'gray.200';
  const boxHoverBg = colorMode === 'light' ? 'gray.300' : 'gray.800';

  return (
    <Box
      id="skills"
      py="10"
      px="5"
      bg={bgColor}
      borderTop="none"
      borderColor={textColor}
      transition="background-color 0.2s, color 0.2s"
    >
     
      <Heading textAlign="center" mb="8" color={textColor}>
        My Skills
      </Heading>

     
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing="8" maxW="1200px" mx="auto">
        {skills.map((skill, index) => (
          <Box
            key={index}
            textAlign="center"
            p="6"
            bg={bgColor}
            borderRadius="lg"
            border={`2px solid ${textColor}`}
            _hover={{
              bg: boxHoverBg,
              boxShadow: 'lg',
              transform: 'scale(1.05)',
              transition: 'all 0.3s ease-in-out',
            }}
            transition="background-color 0.3s, box-shadow 0.3s"
          >
            
            <skill.icon size="3rem" color={textColor} />
            
            
            <Text mt="4" fontSize="lg" fontWeight="bold" color={textColor}>
              {skill.name}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
