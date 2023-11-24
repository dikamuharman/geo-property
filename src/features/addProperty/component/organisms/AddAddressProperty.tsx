import { Button, VStack, useToken } from '@chakra-ui/react';
import { FC } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { CustomTextArea } from '../../../../components';
import DrawMap from '../molecules/DrawMap';
import SearchAddress from '../molecules/SearchAddress';

interface AddAddressPropertyProps {}

const AddAddressProperty: FC<AddAddressPropertyProps> = () => {
  const [gray900] = useToken('colors', ['gray.900']);
  const [shadow] = useToken('shadows', ['md']);
  return (
    <VStack w="full" gap={4} alignItems="flex-end">
      <SearchAddress />
      <DrawMap />
      <CustomTextArea label="Detail Alamat" placeholder="Isi detail alamat" />
      <Button
        bg="gray.800"
        color="white"
        _hover={{ backgroundColor: gray900, shadow: shadow }}
        rightIcon={<FaChevronRight />}
      >
        Tahap selanjutnya
      </Button>
    </VStack>
  );
};

export default AddAddressProperty;
