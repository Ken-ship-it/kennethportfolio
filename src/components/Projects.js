import React from 'react';
import { Box, Heading, SimpleGrid, Image, Text, Link, useColorMode } from '@chakra-ui/react';
import cryptoTrackerImage from '../assets/images/crypto.png';
import agrivistaWebsiteImage from '../assets/images/tractor.jpg';

const projects = [
  {
    title: 'Cryptocurrency Tracker',
    image: cryptoTrackerImage,
    description: 'A cryptocurrency tracker app built with React and Chakra UI.',
    link: 'https://k5cryptotrackerapp.netlify.app/',
  },
  {
    title: 'Agrivista Website',
    image: agrivistaWebsiteImage,
    description: 'A personal portfolio website showcasing projects and skills.',
    link: 'https://dapper-sopapillas-b3ffd8.netlify.app/',
  },
];

const Projects = () => {
  const { colorMode } = useColorMode();
  
  const bgColor = colorMode === 'light' ? 'gray.200' : 'gray.900';
  const textColor = colorMode === 'light' ? 'gray.900' : 'gray.200';
  const cardBgColor = colorMode === 'light' ? 'white' : 'gray.800';
  const cardHoverColor = colorMode === 'light' ? 'gray.100' : 'gray.700';

  return (
    <Box id="projects" py="16" px="5" bg={bgColor} borderTop="none" borderColor={textColor}>
      <Heading textAlign="center" mb="12" color={textColor}>
        Projects
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing="10" maxW="1200px" mx="auto">
        {projects.map((project, index) => (
          <Box
            key={index}
            border="1px"
            borderColor={textColor}
            borderRadius="lg"
            bg={cardBgColor}
            overflow="hidden"
            _hover={{ boxShadow: 'lg', transform: 'scale(1.04)', bg: cardHoverColor, transition: 'all 0.3s ease' }}
            transition="transform 0.3s ease"
          >
            <Image 
              src={project.image} 
              alt={project.title} 
              objectFit="cover" 
              width="100%" 
              height="250px" 
              transition="all 0.3s ease"
              _hover={{ opacity: 0.9 }}
            />
            
            <Box p="6">
              <Heading size="md" mb="2" color={textColor}>
                {project.title}
              </Heading>
              <Text color={textColor} mb="4" lineHeight="1.6">
                {project.description}
              </Text>
              <Link
                href={project.link}
                color={colorMode === 'light' ? 'teal.500' : 'teal.300'}
                fontWeight="bold"
                _hover={{ textDecoration: 'underline' }}
              >
                View Project
              </Link>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
