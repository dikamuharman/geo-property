import { HStack, Heading, Icon, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { FaBath, FaMapMarkerAlt } from 'react-icons/fa';
import { IoBed } from 'react-icons/io5';
import CustomBadge from '../../../components/customBadge/CustomBadge';

interface HeadlinePropertyProps {}

const HeadlineProperty: FC<HeadlinePropertyProps> = () => {
  return (
    <VStack w="full" gap={4} alignItems="flex-start">
      <HStack>
        <CustomBadge text="Dijual" color="green" />
        <CustomBadge text="Rumah" color="blue" />
        <CustomBadge text="Cluster" color="yellow" />
      </HStack>
      <VStack alignItems="flex-start">
        <Heading as="p" fontSize="4xl" fontWeight="semibold" color="blue.500">
          RP 550.000.000
        </Heading>
        <Heading
          as="h1"
          fontSize="4xl"
          fontWeight="bold"
          color="blackAlpha.900"
        >
          Rumah dijual, perumahan citra indah
        </Heading>
        <HStack>
          <Icon as={FaMapMarkerAlt} color="gray.400" />
          <Text as="span" color="gray.400" fontSize="xl">
            Bekasi, Jawa Barat
          </Text>
        </HStack>
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
  );
};

export default HeadlineProperty;
