import { Box, HStack, Input, VStack } from '@chakra-ui/react';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import * as turf from '@turf/turf';
import { FC, useEffect, useState } from 'react';
import Map from '../../../map';
import useMapStore from '../../../map/store/useMapStore';

interface DrawMapProps {}

const DrawMap: FC<DrawMapProps> = () => {
  // cara expose map menggunakan zustand
  const map = useMapStore((state) => state.map);
  const [latLng, setLatLng] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    if (!map) return;
    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true,
      },
      defaultMode: 'draw_polygon',
    });

    map.addControl(draw);

    // TODO: send geom to server

    const calculateArea = () => {
      const data = draw.getAll();
      if (data.features.length > 0) {
        const area = turf.area(data);
        const rounded_area = Math.round(area * 100) / 100; // m2
        console.log(rounded_area);
        for (const feature of data.features) {
          if (feature.geometry.type === 'Polygon') {
            const geom = feature.geometry.coordinates;
            const poly = turf.polygon(geom);
            const center = turf.centroid(poly);
            setLatLng(center.geometry.coordinates as [number, number]);
          }
        }
      }
    };

    map.on('draw.create', calculateArea);

    map.on('draw.update', calculateArea);

    map.on('draw.delete', calculateArea);
  }, [map]);

  return (
    <VStack w="full" alignItems="flex-start" gap={4}>
      <Box w="full" h={500} borderRadius={8} overflow="hidden">
        <Map />
      </Box>
      <HStack w="full">
        <Input disabled value={latLng[0]} size="lg" />
        <Input disabled value={latLng[1]} size="lg" />
      </HStack>
    </VStack>
  );
};

export default DrawMap;
