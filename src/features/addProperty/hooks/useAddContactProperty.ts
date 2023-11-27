import { useForm } from 'react-hook-form';
import { TAddContactPropertyForm } from '../types/addPropertyFormType';

const useAddContactProperty = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TAddContactPropertyForm>({
    defaultValues: {
      email: '',
      nama: '',
      nomorHp: '',
    },
  });

  const onSubmit = (data: TAddContactPropertyForm) => {
    console.log(data);
  };

  return {
    handleSubmit,
    control,
    errors,
    onSubmit,
  };
};

export default useAddContactProperty;
