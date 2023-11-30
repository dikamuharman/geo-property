/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { layerName, sourceName } from '../../../config/constants/constants';
import Map from '../../map';
import useMapStore from '../../map/store/useMapStore';
import usePoi from '../hooks/usePoi';
import useDetailStore from '../store/useDetailStore';

interface POIPropertyProps {}

const POIProperty: React.FC<POIPropertyProps> = () => {
  const [map] = useMapStore((state) => [state.map]);
  const centroid = useDetailStore((state) => state.center_point);
  const { data, isLoading } = usePoi();

  React.useEffect(() => {
    if (map && centroid) {
      map.flyTo({
        center: [centroid[0], centroid[1]!],
        zoom: 15,
      });

      map.on('load', () => {
        if (map.getSource(sourceName.poi)) {
          map.removeSource(sourceName.poi);
        }

        map.addSource(sourceName.poi, {
          type: 'geojson',
          data: data as any,
        });

        map.addLayer({
          id: layerName.poiLayer,
          type: 'symbol',
          source: sourceName.poi,
          layout: {
            'icon-image': 'poi',
            'icon-size': 0.5,
            'icon-allow-overlap': true,
          },
        });
      });
    }
  }, [centroid, map, data, isLoading]);
  return (
    <VStack alignItems="flex-start" w="full" gap={4}>
      <Heading as="h4" size="lg" fontWeight="semibold">
        Lokasi terdekat
      </Heading>
      <Box w="full" h={380} rounded="lg" overflow="hidden">
        <Map />
      </Box>
    </VStack>
  );
};

export default POIProperty;
