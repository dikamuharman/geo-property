import { Button, Text, VStack, useToken } from '@chakra-ui/react';
import React from 'react';
import { Controller } from 'react-hook-form';
import { FaChevronRight } from 'react-icons/fa';
import { CustomTextField } from '../../../../components';
import useAddContactProperty from '../../hooks/useAddContactProperty';

interface AddContactPropertyProps {}

const AddContactProperty: React.FC<AddContactPropertyProps> = () => {
  const { handleSubmit, onSubmit, control } = useAddContactProperty();
  const [gray900] = useToken('colors', ['gray.900']);
  const [shadow] = useToken('shadows', ['md']);

  return (
    <VStack
      w="full"
      alignItems="flex-end"
      as="form"
      gap={4}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="nama"
        control={control}
        rules={{ required: true }}
        render={({ field, fieldState }) => (
          <CustomTextField
            type={'text'}
            label={'Nama Lengkap'}
            placeholder="Masukan nama lengkap"
            name={field.name}
            onChange={field.onChange}
            isInvalid={fieldState.invalid}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        rules={{ required: true }}
        render={({ field, fieldState }) => (
          <CustomTextField
            type={'text'}
            label={'Email'}
            placeholder="Masukan email"
            name={field.name}
            onChange={field.onChange}
            isInvalid={fieldState.invalid}
          />
        )}
      />
      <Controller
        name="nomorHp"
        control={control}
        rules={{ required: true }}
        render={({ field, fieldState }) => (
          <CustomTextField
            type={'text'}
            label={
              <>
                Nomor Handphone{' '}
                <Text color="gray.500" as="span">
                  (nomor whatsapp)
                </Text>
              </>
            }
            placeholder="Masukan nomor handphone"
            name={field.name}
            onChange={field.onChange}
            isInvalid={fieldState.invalid}
          />
        )}
      />
      <Button
        bg="gray.800"
        color="white"
        _hover={{ backgroundColor: gray900, shadow: shadow }}
        rightIcon={<FaChevronRight />}
        type="submit"
      >
        Iklankan Properti
      </Button>
    </VStack>
  );
};

export default AddContactProperty;
