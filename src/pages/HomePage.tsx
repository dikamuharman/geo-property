import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import HeroImage from "../assets/hero-image.png";
import CustomSelect from "../components/CustomSelect/CustomSelect";
import searchService from "../features/searchProperty/service/searchService";

interface HomePageProps {}

type TOptionType = {
  value: number[];
};

const HomePage: FC<HomePageProps> = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<TOptionType>({
    defaultValues: {
      value: [0],
    },
  });

  const onSubmit = (data: TOptionType) => {
    navigate(`/search?lat=${data.value[0]}&lng=${data.value[1]}`);
  };

  const loadOptions = (inputValue: string) => {
    return new Promise((resolve) => {
      const result = searchService.searchProperty(inputValue).then((res) => {
        return res.data?.map((item) => ({
          label: item.name,
          value: item.center_point,
        }));
      });
      resolve(result);
    });
  };

  return (
    <Flex alignItems="center" h="100%">
      <Stack direction="column" gap="4">
        <Image
          src={HeroImage}
          w={600}
          position="absolute"
          right={0}
          bottom={0}
        />
        <Box>
          <Heading
            size="4xl"
            color="white"
            as="h1"
            lineHeight="140%"
            fontWeight="bold"
          >
            Kisah Sukses Properti
            <br />
            Anda Akan Dimulai Disini
          </Heading>
          <Text color="white" fontSize="2xl">
            Beli, sewa, dan jual properti anda di GeoProperti
          </Text>
        </Box>
        <Box bg="white" borderRadius="xl" p="7">
          <HStack as={"form"} onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="value"
              control={control}
              render={({ field }) => (
                <CustomSelect
                  options={[]}
                  placeholder="Masukan lokasi (Khusus daerah depok)"
                  onChange={(value) => {
                    field.onChange(value);
                  }}
                  isClearable
                  optionsIcon={FaMapMarkerAlt}
                  dropdownIndicator={FaSearch}
                  loadOptions={loadOptions}
                />
              )}
            />

            <Button colorScheme="blue" size="lg" type="submit">
              Cari properti
            </Button>
          </HStack>
          <Text color="blue.500">*khusus daerah kota depok</Text>
        </Box>
      </Stack>
    </Flex>
  );
};

export default HomePage;
