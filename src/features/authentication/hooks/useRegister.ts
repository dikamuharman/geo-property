import { useForm } from 'react-hook-form';
import { IRegisterUser } from '../type/user-type';

const useRegister = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<IRegisterUser>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (value: IRegisterUser) => {
    console.log(value);
  };

  return {
    onSubmit,
    handleSubmit,
    register,
    errors,
    isSubmitting,
  };
};

export default useRegister;
