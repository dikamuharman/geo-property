import { Grid, GridItem } from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import DetailProperty from '../features/detail/component/DetailProperty';
import DetailSeller from '../features/detail/component/DetailSeller';
import useDetail from '../features/detail/hooks/useDetail';

interface DetailPageProps {}

const DetailPage: FC<DetailPageProps> = () => {
  const { data } = useDetail();

  useEffect(() => {
    console.log(data);
  });

  return (
    <Grid
      templateColumns="repeat(12, 1fr)"
      w="full"
      as="main"
      h="calc(100vh - 88px)"
    >
      <GridItem
        bg="white"
        w="full"
        colSpan={3}
        p="10"
        overflow="scroll"
        borderRightStyle="solid"
        borderRightWidth={2}
        borderRightColor="gray.100"
      >
        <DetailSeller />
      </GridItem>
      <GridItem
        w="full"
        h="full"
        overflow="scroll"
        colSpan={9}
        position="relative"
        p="10"
      >
        <DetailProperty />
      </GridItem>
    </Grid>
  );
};

export default DetailPage;
