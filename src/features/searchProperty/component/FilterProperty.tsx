import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { MdSearch } from 'react-icons/md';
import fieldContent from '../content/fieldContent.json';
import RadioInput from './RadioInput';

interface IFilterForm {
  address: string;
  tipeIklan: string;
  tipeProperti: string;
  luasBangunan: string;
  luasTanah: string;
  kamarTidur: string;
  kamarMandi: string;
}

interface FilterPropertyProps {}

const FilterProperty: FC<FilterPropertyProps> = () => {
  const { handleSubmit, register, control } = useForm<IFilterForm>();

  const onSubmit = (data: IFilterForm) => {
    console.log(data);
  };

  return (
    <VStack
      w="full"
      alignItems="start"
      gap="8"
      as="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <HStack justifyContent="space-between" alignItems="end" w="full">
        <Heading as="h1" size="lg">
          Filter Property
        </Heading>
        <Text>Reset filter</Text>
      </HStack>
      <FormControl>
        <InputGroup size="lg">
          <Input {...register('address')} />
          <InputRightElement>
            <Icon as={MdSearch} boxSize={8} color="blue.500" />
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Divider />
      <FormControl>
        <FormLabel color="gray.600">Tipe Iklan</FormLabel>
        <Controller
          name="tipeIklan"
          control={control}
          render={({ field }) => (
            <>
              <RadioInput
                name={field.name}
                onChange={field.onChange}
                options={fieldContent.tipeIklan}
              />
            </>
          )}
        />
      </FormControl>
      <FormControl>
        <FormLabel color="gray.600">Tipe Properti</FormLabel>
        <Controller
          name="tipeProperti"
          control={control}
          render={({ field }) => (
            <>
              <RadioInput
                name={field.name}
                onChange={field.onChange}
                options={fieldContent.tipeProperti}
              />
            </>
          )}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Luas Bangunan (m2)</FormLabel>
        <HStack gap={4}>
          <Input {...register('luasBangunan')} />
          <Input {...register('luasBangunan')} />
        </HStack>
      </FormControl>
      <FormControl>
        <FormLabel>Luas Tanah (m2)</FormLabel>
        <HStack gap={4}>
          <Input {...register('luasTanah')} />
          <Input {...register('luasTanah')} />
        </HStack>
      </FormControl>
      <FormControl>
        <FormLabel color="gray.600">Kamar Tidur</FormLabel>
        <Controller
          name="kamarTidur"
          control={control}
          render={({ field }) => (
            <>
              <RadioInput
                name={field.name}
                onChange={field.onChange}
                options={fieldContent.kamarTidur}
                gridTemplateColumns="5"
              />
            </>
          )}
        />
      </FormControl>
      <FormControl>
        <FormLabel color="gray.600">Kamar Tidur</FormLabel>
        <Controller
          name="kamarMandi"
          control={control}
          render={({ field }) => (
            <>
              <RadioInput
                name={field.name}
                onChange={field.onChange}
                options={fieldContent.kamarMandi}
                gridTemplateColumns="5"
              />
            </>
          )}
        />
      </FormControl>
      <Button type="submit" bg="blue.500" w="full" color="white" size="lg">
        Filter
      </Button>
    </VStack>
  );
};

export default FilterProperty;
