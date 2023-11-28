import { useForm } from 'react-hook-form';
import useAddPropertyStore from '../store/useAddPropertyStore';
import { TAddContactPropertyForm } from '../types/addPropertyFormType';

const useAddContactProperty = () => {
  const setContactProperty = useAddPropertyStore(
    (state) => state.setContactProperty
  );

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
    setContactProperty({ ...data });
  };

  return {
    handleSubmit,
    control,
    errors,
    onSubmit,
  };
};

export default useAddContactProperty;
