import { Grid, GridItem } from '@chakra-ui/react';
import { FC } from 'react';
import Map from '../features/map';
import FilterProperty from '../features/searchProperty/component/FilterProperty';

interface SearchPageProps {}

const SearchPage: FC<SearchPageProps> = () => {
  return (
    <Grid templateColumns="repeat(12, 1fr)" h="full" w="full" as="main">
      <GridItem
        bg="white"
        w="full"
        h="full"
        colSpan={5}
        p="10"
        overflow="scroll"
      >
        <FilterProperty />
      </GridItem>
      <GridItem w="full" h="full" colSpan={7}>
        <Map />
      </GridItem>
    </Grid>
  );
};

export default SearchPage;
