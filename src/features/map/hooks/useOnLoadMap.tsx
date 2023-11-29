/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  ChakraProvider,
  HStack,
  Icon,
  Image,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import mapboxGl, { GeoJSONSource } from 'mapbox-gl';
import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { FaBath } from 'react-icons/fa';
import { IoBed } from 'react-icons/io5';
import { layerName, sourceName } from '../../../config/constants/constants';
import useMapStore from '../store/useMapStore';
import '../style/map.css';

interface useOnLoadMapProps {
  data: any;
  lat: string;
  lng: string;
}

const useOnLoadMap = ({ data, lat, lng }: useOnLoadMapProps) => {
  const containerPopupRef = useRef<HTMLElement | null>(null);
  const map = useMapStore((state) => state.map);

  useEffect(() => {
    if (data === null) return;
    console.log(data);
    if (!map) return;
    map.flyTo({
      center: [Number(lat), Number(lng)],
      zoom: 15,
    });

    const geoJsonSource = map.getSource(
      sourceName.resultProperty
    ) as GeoJSONSource;
    if (geoJsonSource) {
      geoJsonSource.setData(data as any);
      return;
    }

    map.on('load', () => {
      if (map.getSource(sourceName.resultProperty)) {
        map.removeLayer(layerName.polygonLayer);
        map.removeSource(sourceName.resultProperty);
      }

      map.addSource(sourceName.resultProperty, {
        type: 'geojson',
        data:
          data === null
            ? {
                type: 'FeatureCollection',
                features: [],
              }
            : data,
      });

      map.addLayer({
        id: layerName.polygonLayer,
        type: 'fill',
        source: sourceName.resultProperty, // reference the data source
        layout: {},
        paint: {
          'fill-color': '#3182CE', // blue color fill
          'fill-opacity': 0.5,
        },
      });

      const popup = new mapboxGl.Popup({
        maxWidth: '400px',
        closeButton: false,
      });

      map.on('click', layerName.polygonLayer, (e) => {
        containerPopupRef.current = document.createElement('div');
        const property = e.features![0].properties!;
        const images = JSON.parse(property.images);

        ReactDOM.createRoot(containerPopupRef.current).render(
          <ChakraProvider>
            <VStack
              w={250}
              rounded="lg"
              alignItems="flex-start"
              overflow="hidden"
              bg="white"
            >
              <Image
                src={`https://assets-geoproperty.nerdvana-hub.com/foto/${images[0]
                  .image!}`}
                alt="hehe"
                w="full"
                h={120}
                objectFit={'cover'}
              />
              <VStack w="full" alignItems="flex-start" p={4} h="full">
                <Text bg="blue.50" py="1" px="2" color="blue.500" rounded="lg">
                  {property.price}
                </Text>
                <Box>
                  <Link
                    fontSize="large"
                    href={`/search/detail/${property.uuid}`}
                  >
                    {property.title_ads}
                  </Link>
                  <Text fontSize="sm" color="gray.500">
                    {property.address}
                  </Text>
                </Box>
                <HStack>
                  <HStack>
                    <Icon as={FaBath} color="blue.500" />
                    <Text>{property.bath_rooms}</Text>
                  </HStack>
                  <HStack>
                    <Icon as={IoBed} color="blue.500" />
                    <Text>{property.bed_rooms}</Text>
                  </HStack>
                  <HStack>
                    <Text color="blue.500">LT</Text>
                    <Text>{property.surface_area} M²</Text>
                  </HStack>
                  <HStack>
                    <Text color="blue.500">LB</Text>
                    <Text>{property.building_area} M²</Text>
                  </HStack>
                </HStack>
              </VStack>
            </VStack>
          </ChakraProvider>
        );

        popup
          .setLngLat(e.lngLat)
          .setDOMContent(containerPopupRef.current)
          .addTo(map);
      });
    });
  }, [data, lat, lng, map]);
};

export default useOnLoadMap;
