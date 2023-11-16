import { Grid, GridItem } from '@chakra-ui/react';
import { FC } from 'react';

interface SearchPageProps {}

const SearchPage: FC<SearchPageProps> = () => {
  return (
    <Grid templateColumns="repeat(12, 1fr)">
      <GridItem bg="blue.500" w="full" h="full" colSpan={5}>
        1
      </GridItem>
      <GridItem bg="red.500" w="full" h="full" colSpan={7}>
        2
      </GridItem>
    </Grid>
  );
};

export default SearchPage;
