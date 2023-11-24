import { Box, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import Map from '../../../map';

interface DrawMapProps {}

const DrawMap: FC<DrawMapProps> = () => {
  return (
    <VStack w="full" alignItems="flex-start">
      <Box w="full" h={500} borderRadius={8} overflow="hidden">
        <Map />
      </Box>
    </VStack>
  );
};

export default DrawMap;
