import { useForm } from 'react-hook-form';
import { ILoginUser } from '../type/user-type';

const useLogin = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ILoginUser>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (value: ILoginUser) => {
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

export default useLogin;
