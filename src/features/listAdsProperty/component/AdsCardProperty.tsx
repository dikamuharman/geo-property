import {
  Button,
  HStack,
  Heading,
  Icon,
  IconButton,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FaBath, FaPen } from 'react-icons/fa';
import { IoBed } from 'react-icons/io5';
import { CustomBadge } from '../../../components';

interface AdsCardPropertyProps {}

const AdsCardProperty: React.FC<AdsCardPropertyProps> = () => {
  return (
    <HStack
      h={190}
      borderWidth={0.5}
      w="full"
      borderColor="gray.300"
      rounded="lg"
    >
      <Image
        src="https://via.placeholder.com/190"
        alt="ads"
        h="full"
        w={200}
        objectFit="cover"
      />
      <VStack w="full" h="full" alignItems="flex-start" p={4}>
        <HStack h="full" justifyContent="flex-start" alignItems="flex-start">
          <Text
            bg="blue.50"
            color="blue.500"
            rounded="lg"
            fontSize="xl"
            padding="5px 10px"
            fontWeight="semibold"
          >
            Rp 500.000.000
          </Text>
          <CustomBadge color="green" text="dijual" />
        </HStack>
        <VStack alignItems="flex-start" w="full">
          <Heading size="md">Rumah Mewah, perumahan citra indah</Heading>
          <Text>Bekasi, Jawa barat</Text>
        </VStack>
        <HStack>
          <HStack>
            <Icon as={FaBath} color="blue.500" />
            <Text>2</Text>
          </HStack>
          <HStack>
            <Icon as={IoBed} color="blue.500" />
            <Text>2</Text>
          </HStack>
          <HStack>
            <Text color="blue.500">LT</Text>
            <Text>144 M²</Text>
          </HStack>
          <HStack>
            <Text color="blue.500">LB</Text>
            <Text>144 M²</Text>
          </HStack>
        </HStack>
      </VStack>
      <HStack>
        <IconButton icon={FaPen} aria-label="Edit" colorScheme="blue" />
        <Button>1 jam yang lalu</Button>
      </HStack>
    </HStack>
  );
};

export default AdsCardProperty;
