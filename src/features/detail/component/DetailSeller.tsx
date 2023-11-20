import { Avatar, Button, Heading, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

interface DetailSellerProps {}

const DetailSeller: FC<DetailSellerProps> = () => {
  return (
    <VStack justifyContent="center" gap={8}>
      <VStack justifyContent="center">
        <Heading as="h3" color="blue.500">
          Hubungi Penjual!
        </Heading>
        <Text textAlign="center" color="gray.500">
          Langsung saja! hubungi penjual untuk menanyakan properti ini dan
          dapatkan properti
        </Text>
      </VStack>
      <VStack>
        <Avatar
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
          size="2xl"
          borderWidth={4}
          borderColor={'blue.500'}
        />
        <VStack>
          <Heading as="h4" size="md">
            Dan Abrahmov
          </Heading>
          <Text color="gray.500">Penjual</Text>
        </VStack>
      </VStack>
      <Button
        colorScheme="whatsapp"
        leftIcon={<FaWhatsapp />}
        w="full"
        maxW="300"
      >
        Whatsapp Penjual
      </Button>
    </VStack>
  );
};

export default DetailSeller;
