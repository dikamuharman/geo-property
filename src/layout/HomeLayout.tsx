import { Box, Container } from '@chakra-ui/react';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components';

interface HomeLayoutProps {}

const HomeLayout: FC<HomeLayoutProps> = () => {
  return (
    <Box bg="blue.600" w="100%" h="100vh">
      <Navbar />
      <Container maxW="full" h="100%" p="10">
        <Outlet />
      </Container>
    </Box>
  );
};

export default HomeLayout;
