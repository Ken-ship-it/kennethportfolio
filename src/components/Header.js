import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Link,
  IconButton,
  useColorMode,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = colorMode === 'light' ? 'gray.200' : 'gray.900';
  const textColor = colorMode === 'light' ? 'gray.900' : 'gray.200';

  const iconSize = useBreakpointValue({ base: '10px', md: '14px' });

  return (
    <Box
      bg={bgColor}
      px="4"
      py="2"
      boxShadow="sm"
      borderBottom="2px solid"
      borderColor={textColor}
      transition="background-color 0.2s, color 0.2s"
    >
      <Flex align="center">
        <Heading size="lg" color={textColor} fontFamily="Dancing Script">
          Kenneth's Portfolio
        </Heading>
        <Spacer />
        <Flex>
          <Link
            href="#about"
            mx="4"
            color={textColor}
            _hover={{ textDecoration: 'underline' }}
            fontSize={useBreakpointValue({ base: 'sm', md: 'md' })}
            fontFamily="body"
          >
            About
          </Link>
          <Link
            href="#skills"
            mx="4"
            color={textColor}
            _hover={{ textDecoration: 'underline' }}
            fontSize={useBreakpointValue({ base: 'sm', md: 'md' })}
            fontFamily="body"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            mx="4"
            color={textColor}
            _hover={{ textDecoration: 'underline' }}
            fontSize={useBreakpointValue({ base: 'sm', md: 'md' })}
            fontFamily="body"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            mx="4"
            color={textColor}
            _hover={{ textDecoration: 'underline' }}
            fontSize={useBreakpointValue({ base: 'sm', md: 'md' })}
            fontFamily="body"
          >
            Contact
          </Link>
          <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
            bg={textColor}
            color={bgColor}
            ml="4"
            fontSize={iconSize}
            _hover={{
              bg: colorMode === 'light' ? 'gray.900' : 'gray.200',
              color: colorMode === 'light' ? 'gray.200' : 'gray.900',
            }}
            transition="background-color 0.2s, color 0.2s"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
