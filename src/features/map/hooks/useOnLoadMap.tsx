/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  ChakraProvider,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import mapboxGl from 'mapbox-gl';
import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { FaBath } from 'react-icons/fa';
import { IoBed } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  useEffect(() => {
    if (data === null) return;
    if (!map) return;
    map.flyTo({
      center: [Number(lat), Number(lng)],
      zoom: 15,
    });

    map.on('load', () => {
      if (map.getSource(sourceName.resultProperty)) {
        map.removeLayer(layerName.polygonLayer);
        map.removeSource(sourceName.resultProperty);
      }

      map.addSource(sourceName.resultProperty, {
        type: 'geojson',
        data: data as any,
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
              <VStack w="full" alignItems="flex-start" p={4}>
                <Text bg="blue.50" py="1" px="2" color="blue.500" rounded="lg">
                  {property.price}
                </Text>
                <Box>
                  <Button
                    variant="link"
                    size="lg"
                    colorScheme="black"
                    onClick={() => {
                      navigate(`/search/detail/${property.uid}`);
                    }}
                  >
                    {property.title_ads}
                  </Button>
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
