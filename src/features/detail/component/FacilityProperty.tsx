import { Box, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';

interface FacilityPropertyProps {}

const FacilityProperty: FC<FacilityPropertyProps> = () => {
  const facilitys = [
    'Kitchen set',
    'Gym',
    'AC',
    'Wifi',
    'Tv kabel',
    'Keamanan 24/7',
    'Garasi',
    'Tempat Olahraga',
    'Kolam renang',
    'Area Hiburan',
  ];

  return (
    <VStack w="full" justifyContent="flex-start" gap={8}>
      <Heading w="full">Fasilitas Properti</Heading>
      <SimpleGrid columns={5} spacing={8} w="full">
        {facilitys.map((facility, index) => (
          <Box
            bg="blue.50"
            height="70px"
            display="grid"
            placeContent="center"
            rounded={8}
            key={`${facility}-${index}`}
          >
            <Text color="blue.500">{facility}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default FacilityProperty;
