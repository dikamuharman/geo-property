import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useBoolean,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { MdLogin } from 'react-icons/md';
import {
  LoginForm,
  RegisterForm,
} from '../../features/authentication/component';
import Logo from './Logo';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [toggleDaftar, setToggleDaftar] = useBoolean();

  return (
    <Box
      bg="white"
      w="100%"
      p="5"
      as="nav"
      borderBottomWidth={2}
      borderBottomStyle="solid"
      borderBottomColor="gray.100"
    >
      <Container maxW="full" display="flex" justifyContent="space-between">
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
            onClick={onOpen}
          >
            Masuk/Daftar
          </Button>
        </Flex>
      </Container>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent padding="8" borderRadius="2xl">
          <ModalHeader display="grid" placeContent="center">
            <Logo />
          </ModalHeader>
          <ModalBody>
            <Divider mt="2" mb="6" />
            {toggleDaftar ? (
              <RegisterForm onOpenRegister={setToggleDaftar.toggle} />
            ) : (
              <LoginForm onOpenLogin={setToggleDaftar.toggle} />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Navbar;
