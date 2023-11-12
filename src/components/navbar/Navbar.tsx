import { Box, Button, Container, Flex, Link } from '@chakra-ui/react';
import { FC } from 'react';
import { MdLogin } from 'react-icons/md';
import Logo from './Logo';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <Box bg="white" w="100%" p="5">
      <Container
        maxW="container.xl"
        display="flex"
        justifyContent="space-between"
      >
        <Flex gap="16" alignItems="center">
          <Logo />
          <Flex gap="8">
            <Link color="gray.400" fontWeight="semibold">
              Dijual
            </Link>
            <Link color="gray.400" fontWeight="semibold">
              Disewa
            </Link>
            <Link color="gray.400" fontWeight="semibold">
              Tentang kami
            </Link>
          </Flex>
        </Flex>
        <Flex gap="2">
          <Button
            bgGradient="linear(to-r, blue.500, blue.600)"
            _hover={{
              bgGradient: 'linear(to-r, blue.600, blue.700)',
            }}
            color="white"
            size="lg"
          >
            Iklankan Properti
          </Button>
          <Button
            size="lg"
            variant="outline"
            colorScheme="blue"
            leftIcon={<MdLogin />}
          >
            Masuk/Daftar
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
