import { Button, Heading, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';

interface AboutPropertyProps {}

const AboutProperty: FC<AboutPropertyProps> = () => {
  return (
    <VStack alignItems="flex-start" w="full" gap={4}>
      <Heading as="h2" size="md" fontWeight="semibold">
        Tentang Iklan
      </Heading>
      <Text>
        Tatar Nilapadmi Tipe Nilakancana - Kota Baru Parahyangan adalah tipe
        rumah 2 lantai yang dilengkapi dengan 4 kamar tidur, 3 kamar mandi,
        ruang tamu, ruang makan, dapur, teras dan carport untuk 1 mobil. Tipe
        Nilakancana memiliki luas bangunan 151 meter persegi dan luas tanah 198
        meter persegi yang didukung dengan kapasitas listrik 3300 watt. Harga
        untuk tipe ini mulai dari 3,2 M. {`\n`}Hunian di Kota Baru Parahyangan
        dirancang sedemikian rupa sehingga merespon dan beradaptasi dengan iklim
        tropis. Konsep Desain Rumah Modern Tropis yang ada di Kota Baru
        Parahyangan mengoptimalkan potensi sinar matahari alami serta
        mengalirkan udara sejuk melalui sistem sirkulasi udara yang saling
        silang.
      </Text>
      <Button variant="link" colorScheme="blue">
        Selengkapnya
      </Button>
    </VStack>
  );
};

export default AboutProperty;
