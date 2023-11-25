import { create } from 'zustand';
import { MapState } from '../types/mapType';

const useMapStore = create<MapState>((set) => ({
  center: [106.827153, -6.175392],
  zoom: 10,
  setMap: (map) => set({ map }),
}));

export default useMapStore;
