import { Box } from '@chakra-ui/react';
import mapboxgl from 'mapbox-gl';
import { FC, useEffect, useRef, useState } from 'react';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY as string;
console.log(import.meta.env.MAPBOX_KEY);

interface MapProps {}

const Map: FC<MapProps> = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng] = useState(-70.9);
  const [lat] = useState(42.35);
  const [zoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    console.log('render map once');
    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return <Box ref={mapContainer} h="full" />;
};

export default Map;