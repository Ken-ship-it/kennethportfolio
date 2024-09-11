import { Box, Text, HStack, Icon, Link, useColorMode } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === 'light' ? 'gray.200' : 'gray.900';
  const textColor = colorMode === 'light' ? 'gray.900' : 'gray.200';
  const iconHoverColor = colorMode === 'light' ? 'gray.700' : 'gray.300';
  const whatsappNumber = '+2347030647200';

  return (
    <Box py={{ base: '6', md: '8' }} bg={bgColor} borderTop="2px solid" borderColor={textColor}>
      <HStack justify="center" spacing={{ base: '4', md: '6' }} mb={{ base: '4', md: '6' }}>
        <Link href="https://www.linkedin.com/in/kenneth-alebiosu-063912154/" isExternal>
          <Icon
            as={FaLinkedin}
            boxSize="8"
            color={textColor}
            _hover={{ color: iconHoverColor }}
            transition="color 0.3s ease"
          />
        </Link>
        <Link href="https://github.com/Ken-ship-it" isExternal>
          <Icon
            as={FaGithub}
            boxSize="8"
            color={textColor}
            _hover={{ color: iconHoverColor }}
            transition="color 0.3s ease"
          />
        </Link>
        <Link href="https://x.com/FestusKenneth1?t=1sxisbjVmmCzI2ymxOnHnA&s=09" isExternal>
          <Icon
            as={FaTwitter}
            boxSize="8"
            color={textColor}
            _hover={{ color: iconHoverColor }}
            transition="color 0.3s ease"
          />
        </Link>
      </HStack>

      <Text textAlign="center" color={textColor} fontSize={{ base: 'sm', md: 'md' }}>
        &copy; 2024 Kenneth's Portfolio. All Rights Reserved.
      </Text>

      <Link
        href={`https://wa.me/${whatsappNumber}`}
        isExternal
        position="fixed"
        bottom={{ base: '2', md: '4' }}
        right={{ base: '4', md: '6' }}
        bg={colorMode === 'light' ? 'green.500' : 'green.600'}
        borderRadius="full"
        p="3"
        boxShadow="lg"
        _hover={{ boxShadow: 'xl', transform: 'scale(1.1)', transition: 'all 0.3s ease' }}
        zIndex="tooltip"
      >
        <Icon as={FaWhatsapp} boxSize="10" color="white" />
      </Link>
    </Box>
  );
};

export default Footer;
