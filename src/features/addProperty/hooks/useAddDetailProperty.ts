import { useForm } from 'react-hook-form';
import useAddPropertyStore from '../store/useAddPropertyStore';
import { TAddPropertyForm } from '../types/addPropertyFormType';

const useAddDetailProperty = () => {
  const setDetailProperty = useAddPropertyStore(
    (state) => state.setDetailProperty
  );

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

  const onSubmit = (data: TAddPropertyForm) => {
    setDetailProperty({ ...data });
  };

  return {
    onSubmit,
    control,
    handleSubmit,
    errors,
  };
};

export default useAddDetailProperty;
