import { VStack } from '@chakra-ui/react';
import React from 'react';
import CommonInformationProperty from '../features/listAdsProperty/component/CommonInformationProperty';
import EditAddressProperty from '../features/listAdsProperty/component/EditAddressProperty';
import EditContactProperty from '../features/listAdsProperty/component/EditContactProperty';
import EditDetailProperty from '../features/listAdsProperty/component/EditDetailProperty';
import EditImageAdsProperty from '../features/listAdsProperty/component/EditImageAdsProperty';
import HeadingEdit from '../features/listAdsProperty/component/HeadingEdit';

interface EditAdsPropertyPageProps {}

const EditAdsPropertyPage: React.FC<EditAdsPropertyPageProps> = () => {
  return (
    <VStack w="full" alignItems="flex-start" gap={8}>
      <HeadingEdit />
      <EditAddressProperty />
      <CommonInformationProperty />
      <EditDetailProperty />
      <EditImageAdsProperty />
      <EditContactProperty />
    </VStack>
  );
};

export default EditAdsPropertyPage;
