import { Button, HStack, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import CustomSelect from '../../../../components/CustomSelect/CustomSelect';

interface SearchAddressProps {}

const SearchAddress: FC<SearchAddressProps> = () => {
  return (
    <VStack alignItems="flex-start" w="full" gap={4}>
      <Text fontSize="lg">Daerah Properti</Text>
      <HStack w="full">
        <CustomSelect
          options={[
            { label: 'Bandung', value: 'bandung' },
            { label: 'Jakarta', value: 'jakarta' },
            { label: 'Bogor', value: 'bogor' },
          ]}
          placeholder="Cari daerah properti"
        />
        <Button size="lg" colorScheme="blue">
          Cari lokasi
        </Button>
      </HStack>
    </VStack>
  );
};

export default SearchAddress;
