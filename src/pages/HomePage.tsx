import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FC } from 'react';
import { MdSearch } from 'react-icons/md';

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  return (
    <Flex alignItems="center" h="100%">
      <Stack direction="column" gap="4">
        <Box>
          <Heading
            size="4xl"
            color="white"
            as="h1"
            lineHeight="140%"
            fontWeight="bold"
          >
            Kisah Sukses Properti
            <br />
            Anda Akan Dimulai Disini
          </Heading>
          <Text color="white" fontSize="2xl">
            Beli, sewa, dan jual properti anda di GeoProperti
          </Text>
        </Box>
        <Box bg="white" borderRadius="xl" p="7">
          <HStack>
            <InputGroup>
              <Input size="lg" placeholder="Masukkan lokasi atau alamat" />
              <InputRightElement top="1">
                <Icon as={MdSearch} boxSize={8} color="blue.500" />
              </InputRightElement>
            </InputGroup>
            <Button colorScheme="blue" size="lg">
              Cari properti
            </Button>
          </HStack>
          <Text color="blue.500">*khusus daerah kota depok</Text>
        </Box>
      </Stack>
    </Flex>
  );
};

export default HomePage;
