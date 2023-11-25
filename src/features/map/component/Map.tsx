import { Box } from '@chakra-ui/react';
import mapboxgl from 'mapbox-gl';
import { FC, useCallback, useRef, useState } from 'react';
import useMapStore from '../store/useMapStore';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY as string;
console.log(import.meta.env.MAPBOX_KEY);

interface MapProps {}

const Map: FC<MapProps> = () => {
  // const mapContainer = useRef<HTMLDivElement | null>(null);
  const [setMapStore] = useMapStore((state) => [state.setMap]);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng] = useState(-70.9);
  const [lat] = useState(42.35);
  const [zoom] = useState(9);

  // useEffect(() => {
  //   if (map.current) return; // initialize map only once
  //   console.log('render map once');
  //   map.current = new mapboxgl.Map({
  //     container: mapContainer.current!,
  //     style: 'mapbox://styles/mapbox/streets-v12',
  //     center: [lng, lat],
  //     zoom: zoom,
  //   });
  // });

  const mapWrapper = useCallback(
    (wrapper: HTMLDivElement) => {
      if (wrapper === null) return;
      if (map.current) return;
      console.log('render map once');
      map.current = new mapboxgl.Map({
        container: wrapper,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom: zoom,
      });
      setMapStore(map.current);
    },
    [lat, lng, zoom]
  );

  return <Box ref={mapWrapper} h="full" w="full" />;
};

export default Map;
