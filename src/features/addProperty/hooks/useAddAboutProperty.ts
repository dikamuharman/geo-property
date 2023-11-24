import { useForm } from 'react-hook-form';
import { TAddAboutPropertyForm } from '../types/addPropertyFormType';

const useAddAboutProperty = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<TAddAboutPropertyForm>({
    defaultValues: {
      deskirpsi: '',
      judulIklan: '',
      kondisiProperti: '',
      tipeIklan: '',
      tipeProperti: '',
    },
  });

  const onSubmit = (data: TAddAboutPropertyForm) => {
    console.log(data);
  };

  return {
    handleSubmit,
    control,
    errors,
    isSubmitting,
    onSubmit,
  };
};

export default useAddAboutProperty;
