import { VStack } from '@chakra-ui/react';
import React from 'react';
import { SearchAdsProperty } from '../features/listAdsProperty';

interface ListAdsUserPropertyPageProps {}

const ListAdsUserPropertyPage: React.FC<ListAdsUserPropertyPageProps> = () => {
  return (
    <VStack w="full" alignItems="flex-start">
      <SearchAdsProperty />
    </VStack>
  );
};

export default ListAdsUserPropertyPage;
