import { Box, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import Map from '../../../map';

interface DrawMapProps {}

const DrawMap: FC<DrawMapProps> = () => {
  // cara expose map menggunakan zustand
  // const map = useMapStore((state) => state.map);

  return (
    <VStack w="full" alignItems="flex-start">
      <Box w="full" h={500} borderRadius={8} overflow="hidden">
        <Map />
      </Box>
    </VStack>
  );
};

export default DrawMap;
