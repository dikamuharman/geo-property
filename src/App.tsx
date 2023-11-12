import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource/lato';
import { RouterProvider } from 'react-router-dom';
import router from './config/router/routes';

function App() {
  return (
    <ChakraProvider
      theme={extendTheme({
        fonts: {
          heading: `'Lato', 'sans-serif'`,
          body: `'Lato', 'sans-serif'`,
        },
      })}
    >
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
