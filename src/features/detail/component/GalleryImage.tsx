import { Grid, GridItem, Image } from '@chakra-ui/react';
import { FC } from 'react';

interface GalleryImageProps {}

const GalleryImage: FC<GalleryImageProps> = () => {
  return (
    <Grid
      templateRows={'repeat(2, 1fr)'}
      templateColumns="repeat(12, 1fr)"
      gap={4}
      w="full"
    >
      <GridItem rowSpan={2} colSpan={6}>
        <Image
          src="https://images.unsplash.com/photo-1655106025233-e4308138f3c5?q=80&w=1974&auto=format&fit=crop&ilgib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          w="full"
          h="full"
          objectFit="cover"
          rounded="lg"
        />
      </GridItem>
      <GridItem colSpan={3}>
        <Image
          src="https://images.unsplash.com/photo-1655106025233-e4308138f3c5?q=80&w=1974&auto=format&fit=crop&ilgib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          w="full"
          h="275"
          objectFit="cover"
          rounded="lg"
        />
      </GridItem>
      <GridItem colSpan={3}>
        <Image
          src="https://images.unsplash.com/photo-1655106025233-e4308138f3c5?q=80&w=1974&auto=format&fit=crop&ilgib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          w="full"
          h="275"
          objectFit="cover"
          rounded="lg"
        />
      </GridItem>
      <GridItem colSpan={3}>
        <Image
          src="https://images.unsplash.com/photo-1655106025233-e4308138f3c5?q=80&w=1974&auto=format&fit=crop&ilgib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          w="full"
          h="275"
          objectFit="cover"
          rounded="lg"
        />
      </GridItem>
      <GridItem colSpan={3}>
        <Image
          src="https://images.unsplash.com/photo-1655106025233-e4308138f3c5?q=80&w=1974&auto=format&fit=crop&ilgib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          w="full"
          h="275"
          objectFit="cover"
          rounded="lg"
        />
      </GridItem>
    </Grid>
  );
};

export default GalleryImage;
