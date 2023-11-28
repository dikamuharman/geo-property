import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  TAddAboutPropertyForm,
  TAddContactPropertyForm,
  TAddPropertyAction,
  TAddPropertyForm,
  TSetAddress,
} from '../types/addPropertyFormType';

const useAddPropertyStore = create<
  TAddPropertyForm &
    TAddContactPropertyForm &
    TAddAboutPropertyForm &
    TSetAddress &
    TAddPropertyAction
>()(
  persist(
    (set) => ({
      judulIklan: '',
      tipeIklan: '',
      kondisiProperti: '',
      tipeProperti: '',
      deskirpsi: '',
      luasBangunan: '',
      kamarMandi: '',
      kamarTidur: '',
      jumlahLantai: '',
      lahanParkir: '',
      tipeParabot: '',
      dayaListrik: '',
      fasilitasProperty: [],
      fasilitaLuarProperty: [],
      hargaJual: '',
      tipeRumah: '',
      luasTanah: '',
      orientasiBangunan: '',
      tipeSertifikat: '',
      hargaSewa: '',
      tipeSewa: '',
      tipeApartement: '',
      nama: '',
      email: '',
      nomorHp: '',
      latLng: [0, 0],
      address: '',
      photos: [],
      setAddress: ({ address, latLng }) =>
        set((state) => ({ ...state, address, latLng })),
      setAboutProperty: ({
        deskirpsi,
        judulIklan,
        kondisiProperti,
        tipeIklan,
        tipeProperti,
      }) =>
        set((state) => ({
          ...state,
          deskirpsi,
          judulIklan,
          kondisiProperti,
          tipeIklan,
          tipeProperti,
        })),
      setContactProperty: (contactProperty) =>
        set((state) => ({ ...state, ...contactProperty })),
      setPhotos: (photos) => set((state) => ({ ...state, photos })),
      setDetailProperty: (detailProperty) =>
        set((state) => ({ ...state, ...detailProperty })),
    }),
    {
      name: 'addPropertyStore',
    }
  )
);

export default useAddPropertyStore;
