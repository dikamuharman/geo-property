import { useForm } from 'react-hook-form';
import {
  TAddPropertyForm,
  TPropertySewaRumah,
} from '../types/addPropertyFormType';

const useAddDetailSellHomeProperty = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TAddPropertyForm>({
    defaultValues: {
      luasBangunan: '',
      kamarMandi: '',
      kamarTidur: '',
      jumlahLantai: '',
      lahanParkir: '',
      tipeParabot: '',
      dayaListrik: '',
      fasilitasProperty: [''],
      fasilitaLuarProperty: [''],
      hargaJual: '',
      tipeRumah: '',
      luasTanah: '',
      orientasiBangunan: '',
      tipeSertifikat: '',
    },
  });

  const onSubmit = (data: TPropertySewaRumah) => {
    console.log(data);
  };

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
  };
};

export default useAddDetailSellHomeProperty;
