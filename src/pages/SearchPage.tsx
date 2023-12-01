/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Grid, GridItem } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { FaListUl, FaMapMarkerAlt } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';
import Map from '../features/map';
import useOnLoadMap from '../features/map/hooks/useOnLoadMap';
import FilterProperty from '../features/searchProperty/component/FilterProperty';
import ListProperty from '../features/searchProperty/component/ListProperty';
import useSearchProperty from '../features/searchProperty/hooks/useSearchProperty';

interface SearchPageProps {}

const SearchPage: FC<SearchPageProps> = () => {
  const [toggleMap, setToggleMap] = useState(true);
  const { data } = useSearchProperty();
  const [params] = useSearchParams();
  const lat = params.get('lat');
  const lng = params.get('lng');
  useOnLoadMap({ data, lat: lat!, lng: lng! });

  return (
    <Grid templateColumns="repeat(12, 1fr)" h="full" w="full" as="main">
      <GridItem
        bg="white"
        w="full"
        h="full"
        colSpan={4}
        p="10"
        overflow="scroll"
        borderRightStyle="solid"
        borderRightWidth={2}
        borderRightColor="gray.100"
      >
        <FilterProperty />
      </GridItem>
      <GridItem w="full" h="full" colSpan={8} position="relative">
        <Button
          bg="black"
          color="white"
          _hover={{
            bg: 'gray.800',
          }}
          position="fixed"
          right="2%"
          bottom={10}
          size="lg"
          leftIcon={toggleMap ? <FaListUl /> : <FaMapMarkerAlt />}
          zIndex={10}
          onClick={() => {
            setToggleMap(!toggleMap);
          }}
        >
          {toggleMap ? 'List Property' : 'Map Property'}
        </Button>
        <Map hidden={!toggleMap} />
        <ListProperty hidden={toggleMap} />
        {/* {toggleMap ? <Map /> : <ListProperty />} */}
      </GridItem>
    </Grid>
  );
};

export default SearchPage;
