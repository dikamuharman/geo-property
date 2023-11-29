import { VStack } from '@chakra-ui/react';
import React from 'react';
import { SearchAdsProperty } from '../features/listAdsProperty';
import ListAdsProperty from '../features/listAdsProperty/component/ListAdsProperty';

interface ListAdsUserPropertyPageProps {}

const ListAdsUserPropertyPage: React.FC<ListAdsUserPropertyPageProps> = () => {
  return (
    <VStack w="full" alignItems="flex-start" gap={4}>
      <SearchAdsProperty />
      <ListAdsProperty />
    </VStack>
  );
};

export default ListAdsUserPropertyPage;
