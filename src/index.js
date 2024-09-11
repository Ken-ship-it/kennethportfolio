import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, ColorModeProvider, CSSReset } from '@chakra-ui/react';
import App from './App';

ReactDOM.render(
  <ChakraProvider>
    <ColorModeProvider>
      <CSSReset />
      <App />
    </ColorModeProvider>
  </ChakraProvider>,
  document.getElementById('root')
);
