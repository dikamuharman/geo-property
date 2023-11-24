import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FC } from 'react';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import CustomSelect from '../components/CustomSelect/CustomSelect';

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
            <CustomSelect
              options={[
                { label: 'Pancoran mas, Depok', value: 'Pancoran mas, Depok' },
                { label: 'Beji, Depok', value: 'Beji, Depok' },
              ]}
              placeholder="Masukan lokasi (Khusus daerah depok)"
              onChange={(value) => {
                console.log(value);
              }}
              isClearable
              optionsIcon={FaMapMarkerAlt}
              dropdownIndicator={FaSearch}
            />

            <Button colorScheme="blue" size="lg">
              Cari properti
            </Button>
          </HStack>
          {/* <Text color="blue.500">*khusus daerah kota depok</Text> */}
        </Box>
      </Stack>
    </Flex>
  );
};

export default HomePage;
