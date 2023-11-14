import {
  AbsoluteCenter,
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  HStack,
  Heading,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  useBoolean,
} from '@chakra-ui/react';
import { FC } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { RiErrorWarningFill } from 'react-icons/ri';

interface RegisterFormProps {
  onOpenRegister?: () => void;
}

const RegisterForm: FC<RegisterFormProps> = ({ onOpenRegister }) => {
  const [visiblePassword, setVisiblePassword] = useBoolean();
  const [visiblePasswordConfirm, setVisiblePasswordConfirm] = useBoolean();

  return (
    <>
      <HStack justifyContent="space-between" mb="6">
        <Heading as="h1" size="md">
          Daftar
        </Heading>
        <Button color="blue.500" onClick={onOpenRegister} variant="link">
          Masuk
        </Button>
      </HStack>
      <VStack as="form" gap="5" alignItems="flex-start">
        <VStack gap="4" width="full">
          <FormControl isInvalid={false}>
            <Input placeholder="Nama Lengkap" size="lg" type="text" />
            <FormErrorMessage
              bg="red.100"
              color="black"
              padding="4"
              rounded="lg"
              fontWeight="medium"
            >
              <Icon as={RiErrorWarningFill} mr="2" color="red.500" />
              Email is required.
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={false}>
            <Input placeholder="Email" type="email" size="lg" />
          </FormControl>
          <FormControl>
            <InputGroup size="lg">
              <Input
                placeholder="Kata sandi"
                type={visiblePassword ? 'text' : 'password'}
                size="lg"
              />
              <InputRightElement>
                <IconButton
                  aria-label="show password"
                  variant="ghost"
                  color="blue.500"
                  onClick={setVisiblePassword.toggle}
                  icon={
                    visiblePassword ? <MdVisibility /> : <MdVisibilityOff />
                  }
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl>
            <InputGroup size="lg">
              <Input
                placeholder="Konfirmasi Kata Password"
                type={visiblePasswordConfirm ? 'text' : 'password'}
                size="lg"
              />
              <InputRightElement>
                <IconButton
                  aria-label="show password"
                  variant="ghost"
                  color="blue.500"
                  onClick={setVisiblePasswordConfirm.toggle}
                  icon={
                    visiblePasswordConfirm ? (
                      <MdVisibility />
                    ) : (
                      <MdVisibilityOff />
                    )
                  }
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </VStack>
        <Button
          bgGradient="linear(to-r, blue.500, blue.600)"
          _hover={{
            bgGradient: 'linear(to-r, blue.600, blue.700)',
          }}
          color="white"
          size="lg"
          width="full"
        >
          Daftar
        </Button>
        <Box position="relative" py="4" w="full">
          <Divider />
          <AbsoluteCenter px="4" bg="white">
            atau daftar dengan
          </AbsoluteCenter>
        </Box>
        <Button w="full" size="lg" variant="outline" leftIcon={<FcGoogle />}>
          Google
        </Button>
      </VStack>
    </>
  );
};

export default RegisterForm;
