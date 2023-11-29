import { VStack } from '@chakra-ui/react';
import React from 'react';
import AdsCardProperty from './AdsCardProperty';

interface ListAdsPropertyProps {}

const ListAdsProperty: React.FC<ListAdsPropertyProps> = () => {
  return (
    <VStack w="full">
      <AdsCardProperty />
    </VStack>
  );
};

export default ListAdsProperty;
