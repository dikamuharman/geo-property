import {
  Button,
  Grid,
  GridItem,
  HStack,
  Heading,
  Text,
  VStack,
  useToken,
} from '@chakra-ui/react';
import React from 'react';
import { Controller } from 'react-hook-form';
import { FaChevronRight } from 'react-icons/fa';
import { CustomBadge, CustomTextField } from '../../../../components';
import CustomSelectControl from '../../../../components/customFormControl/CustomSelectControl';
import useAddDetailSellHomeProperty from '../../hooks/useAddDetailSellHomeProperty';
import CommonInputProperty from '../organisms/CommonInputProperty';

interface AddRentApartementPropertyProps {}

const AddRentApartementProperty: React.FC<
  AddRentApartementPropertyProps
> = () => {
  const [gray900] = useToken('colors', ['gray.900']);
  const [shadow] = useToken('shadows', ['md']);
  const { control, errors, handleSubmit, onSubmit } =
    useAddDetailSellHomeProperty();

  return (
    <VStack w="full" alignItems="flex-start" gap={10}>
      <VStack w="full" alignItems="flex-start">
        <HStack gap="4">
          <Heading as="h1" color="blue.500">
            Informasi Detail Properti
          </Heading>
          <CustomBadge color="orange" text="Sewa" />
          <CustomBadge color="blue" text="Apartement" />
        </HStack>
        <Text color="gray.500" fontSize="lg">
          Tambahkan informasi detail dari properti anda, untuk memberi informasi
          properti anda lebih lengkap dan detail ke pembeli properti
        </Text>
      </VStack>
      <Grid
        templateColumns="repeat(2, 1fr)"
        w="full"
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        gap={4}
      >
        <GridItem colSpan={2}>
          <Controller
            name="hargaJual"
            control={control}
            rules={{ required: true }}
            render={({ field, formState }) => (
              <CustomTextField
                type={'text'}
                label={'Harga Jual'}
                placeholder="Masukan nominal"
                name={field.name}
                onChange={field.onChange}
                isInvalid={formState.errors.hargaJual && true}
                errorMessage={errors?.hargaJual?.message}
              />
            )}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <Controller
            name="tipeSewa"
            control={control}
            rules={{ required: true }}
            render={({ field, formState }) => (
              <CustomSelectControl
                label={'Tipe Sewa'}
                name={field.name}
                isInvalid={formState.errors.tipeRumah && true}
                placeholder="Pilih tipe sewa"
                onChange={field.onChange}
                errorMessage={formState.errors.tipeRumah?.message}
                options={[
                  {
                    label: 'Bulan',
                    value: 'bulan',
                  },
                  {
                    label: 'Tahunan',
                    value: 'tahunan',
                  },
                ]}
              />
            )}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <Controller
            name="tipeApartement"
            control={control}
            rules={{ required: true }}
            render={({ field, formState }) => (
              <CustomSelectControl
                label={'Tipe Apartement'}
                name={field.name}
                isInvalid={formState.errors.tipeApartement && true}
                placeholder="Pilih tipe apartement"
                onChange={field.onChange}
                errorMessage={formState.errors.tipeApartement?.message}
                options={[
                  {
                    label: 'Studio',
                    value: 'studio',
                  },
                  {
                    label: 'Kondominium',
                    value: 'kondominium',
                  },
                  {
                    label: 'Penthouse',
                    value: 'penthouse',
                  },
                ]}
              />
            )}
          />
        </GridItem>

        <GridItem colSpan={2}>
          <Controller
            name="luasBangunan"
            control={control}
            rules={{ required: true }}
            render={({ field, formState }) => (
              <CustomTextField
                type={'text'}
                label={'Luas Bangunan'}
                placeholder="Masukan luas bangunan"
                name={field.name}
                onChange={field.onChange}
                isInvalid={formState.errors.luasBangunan && true}
                errorMessage={errors?.luasBangunan?.message}
              />
            )}
          />
        </GridItem>
        <CommonInputProperty control={control} />
        <GridItem colSpan={2} display="flex" justifyContent="flex-end">
          <Button
            bg="gray.800"
            color="white"
            _hover={{ backgroundColor: gray900, shadow: shadow }}
            rightIcon={<FaChevronRight />}
            type="submit"
          >
            Tahap selanjutnya
          </Button>
        </GridItem>
      </Grid>
    </VStack>
  );
};

export default AddRentApartementProperty;
