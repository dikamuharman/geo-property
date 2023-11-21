import {
  Box,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FC } from 'react';
import { FaBath } from 'react-icons/fa';
import { IoBed } from 'react-icons/io5';

interface CardPropertyProps {}

const CardProperty: FC<CardPropertyProps> = () => {
  return (
    <Box
      w="full"
      bg="white"
      shadow="md"
      borderRadius={8}
      h={575}
      overflow="hidden"
    >
      <Image src="https://placehold.co/550x350" alt="property" />
      <VStack alignItems="flex-start" p="4">
        <HStack alignItems="center">
          <Text
            bg="blue.50"
            color="blue.500"
            fontSize="2xl"
            padding="5px 10px"
            fontWeight="medium"
            borderRadius={8}
          >
            RP 550.000.000
          </Text>
          <Text
            bg="green.500"
            color="white"
            fontSize="xl"
            padding="5px 10px"
            fontWeight="medium"
            borderRadius={8}
          >
            Dijual
          </Text>
        </HStack>
        <VStack alignItems="flex-start">
          <Heading fontSize="lg" as="h1" fontWeight="semibold">
            Rumah dijual di Cibubur
          </Heading>
          <Text fontSize="md" color="gray.400">
            Jl. Raya Cibubur, Cibubur, Jakarta Timur
          </Text>
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
    </Box>
  );
};

export default CardProperty;
