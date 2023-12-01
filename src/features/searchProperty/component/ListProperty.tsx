import { SimpleGrid } from '@chakra-ui/react';
import { FC } from 'react';
import CardProperty from './CardProperty';

interface ListPropertyProps {
  hidden?: boolean;
}

const ListProperty: FC<ListPropertyProps> = ({ hidden = false }) => {
  return (
    <>
      <SimpleGrid
        display={hidden ? 'none' : 'grid'}
        minChildWidth="400px"
        p={10}
        gap="10"
        h="calc(100vh - 88px)"
        overflowY="scroll"
        position="relative"
      >
        <CardProperty />
        <CardProperty />
        <CardProperty />
        <CardProperty />
        <CardProperty />
        <CardProperty />
        <CardProperty />
        <CardProperty />
        <CardProperty />
      </SimpleGrid>
    </>
  );
};

export default ListProperty;
