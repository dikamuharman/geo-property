import {
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FC } from 'react';
import { IconType } from 'react-icons';
import { AiFillThunderbolt } from 'react-icons/ai';
import { FaBath, FaCompass, FaCouch, FaParking } from 'react-icons/fa';
import { FaStairs } from 'react-icons/fa6';
import { IoBed } from 'react-icons/io5';
import { MdOutlineFlipToBack, MdOutlineTexture } from 'react-icons/md';

interface DetailAdsProps {}

type detailAdds = {
  title: string;
  value: string;
  icon: IconType;
};

const DetailAds: FC<DetailAdsProps> = () => {
  const listDetailProperty: detailAdds[] = [
    {
      title: 'Luas Tanah',
      value: '120 m2',
      icon: MdOutlineTexture,
    },
    {
      title: 'Lahan Parkir',
      value: '6',
      icon: FaParking,
    },
    {
      title: 'Luas Bangunan',
      value: '120 m2',
      icon: MdOutlineFlipToBack,
    },
    {
      title: 'Orientasi Bangunan',
      value: 'Timur',
      icon: FaCompass,
    },
    {
      title: 'Kamar Mandi',
      value: '2',
      icon: FaBath,
    },
    {
      title: 'Daya Listrik',
      value: '800 VA',
      icon: AiFillThunderbolt,
    },
    {
      title: 'Kamar Tidur',
      value: '4',
      icon: IoBed,
    },
    {
      title: 'Perabot',
      value: 'Full Perabot',
      icon: FaCouch,
    },
    {
      title: 'Jumlah Lantai',
      value: '2',
      icon: FaStairs,
    },
  ];

  return (
    <VStack
      w="full"
      alignContent="flex-start"
      justifyContent="flex-start"
      gap={8}
    >
      <Heading as="h3" size="md" w="full">
        Rincian Properti
      </Heading>
      <SimpleGrid columns={2} spacing={8} w="full">
        {listDetailProperty.map((detail, index) => (
          <HStack
            height="50px"
            rounded="lg"
            justifyContent="space-between"
            p={4}
            border="2px"
            borderColor="gray.300"
            key={`${detail.title}-${index}`}
          >
            <HStack alignItems="center">
              <Icon as={detail.icon} color="blue.500" h={'24px'} w={'24px'} />
              <Text fontSize="lg">{detail.title}</Text>
            </HStack>
            <Text fontSize="md">{detail.value}</Text>
          </HStack>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default DetailAds;
