import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { TAddAboutPropertyForm } from '../types/addPropertyFormType';

const useAddAboutProperty = () => {
  const navigate = useNavigate();
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
    navigate(
      `/add-property/detail-property?typeAds=${data.tipeIklan}&typeProperty=${data.tipeProperti}`
    );
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
