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

interface AddRentHousePropertyProps {}

const AddRentHouseProperty: React.FC<AddRentHousePropertyProps> = () => {
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
          <CustomBadge color="blue" text="Rumah" />
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
            name="hargaSewa"
            control={control}
            rules={{ required: true }}
            render={({ field, formState }) => (
              <CustomTextField
                type={'text'}
                label={'Harga Sewa'}
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
            name="tipeRumah"
            control={control}
            rules={{ required: true }}
            render={({ field, formState }) => (
              <CustomSelectControl
                label={'Tipe Rumah'}
                name={field.name}
                isInvalid={formState.errors.tipeRumah && true}
                placeholder="Pilih tipe rumah"
                onChange={field.onChange}
                errorMessage={formState.errors.tipeRumah?.message}
                options={[
                  {
                    label: 'Cluster',
                    value: 'cluster',
                  },
                  {
                    label: 'Town House',
                    value: 'town house',
                  },
                  {
                    label: 'Kostan',
                    value: 'kostan',
                  },
                  {
                    label: 'Rumah Subsidi',
                    value: 'rumah subsidi',
                  },
                  {
                    label: 'Rumah Susun',
                    value: 'rumah susun',
                  },
                ]}
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
        <GridItem>
          <Controller
            name="luasTanah"
            control={control}
            rules={{ required: true }}
            render={({ field, formState }) => (
              <CustomTextField
                type={'text'}
                label={'Luas Tanah'}
                placeholder="Masukan luas tanah"
                name={field.name}
                onChange={field.onChange}
                isInvalid={formState.errors.luasTanah && true}
                errorMessage={errors?.luasTanah?.message}
              />
            )}
          />
        </GridItem>
        <GridItem>
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

        <CommonInputProperty
          control={control}
          bottomSection={
            <GridItem colSpan={2}>
              <Controller
                name="orientasiBangunan"
                control={control}
                rules={{ required: true }}
                render={({ field, formState }) => (
                  <CustomSelectControl
                    label={'Orientasi Bangunan'}
                    name={field.name}
                    isInvalid={formState.errors.orientasiBangunan && true}
                    placeholder="Pilih orientasi bangunan"
                    onChange={field.onChange}
                    errorMessage={formState.errors.orientasiBangunan?.message}
                    options={[
                      {
                        label: 'Barat',
                        value: 'barat',
                      },
                      {
                        label: 'Timur',
                        value: 'timur',
                      },
                      {
                        label: 'Utara',
                        value: 'utara',
                      },
                      {
                        label: 'Selatan',
                        value: 'selatan',
                      },
                    ]}
                  />
                )}
              />
            </GridItem>
          }
        />
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

export default AddRentHouseProperty;
