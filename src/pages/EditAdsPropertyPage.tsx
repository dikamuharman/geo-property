import { VStack } from '@chakra-ui/react';
import React from 'react';
import EditAddressProperty from '../features/listAdsProperty/component/EditAddressProperty';
import HeadingEdit from '../features/listAdsProperty/component/HeadingEdit';

interface EditAdsPropertyPageProps {}

const EditAdsPropertyPage: React.FC<EditAdsPropertyPageProps> = () => {
  return (
    <VStack w="full" alignItems="flex-start" gap={4}>
      <HeadingEdit />
      <EditAddressProperty />
    </VStack>
  );
};

export default EditAdsPropertyPage;
