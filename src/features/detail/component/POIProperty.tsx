/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { layerName, sourceName } from "../../../config/constants/constants";
import Map from "../../map";
import useMapStore from "../../map/store/useMapStore";
import usePoi from "../hooks/usePoi";
import useDetailStore from "../store/useDetailStore";
import IconSekolah from "../../../assets/icon/Sekolah.png";
import IconRumahSakit from "../../../assets/icon/Rumah Sakit.png";
import IconRestoran from "../../../assets/icon/Restoran.png";
import IconBelanja from "../../../assets/icon/Belanja.png";
import IconTransport from "../../../assets/icon/Transport.png";
import IconBank from "../../../assets/icon/Bank.png";

interface POIPropertyProps {}

const POIProperty: React.FC<POIPropertyProps> = () => {
  const [map] = useMapStore((state) => [state.map]);
  const centroid = useDetailStore((state) => state.center_point);
  const polygon = useDetailStore((state) => state.geometry);
  const { data, isLoading } = usePoi();
  const iconPOI: any = {
    Sekolah: IconSekolah,
    "Rumah Sakit": IconRumahSakit,
    Restoran: IconRestoran,
    Belanja: IconBelanja,
    Transport: IconTransport,
    Bank: IconBank,
  };

  React.useEffect(() => {
    if (map && centroid) {
      map.flyTo({
        center: [centroid[0], centroid[1]!],
        zoom: 20,
      });

      for (const icon in iconPOI) {
        map.loadImage(iconPOI[icon], (error, image) => {
          if (error) throw error;
          map.addImage(icon, image as any);
        });
      }

      map.on("load", () => {
        if (map.getSource(sourceName.poi)) {
          map.removeLayer(layerName.poiLayer);
          map.removeSource(sourceName.poi);
          map.removeLayer("polygon-detail-layer");
          map.removeSource("polygon-detail");
        }

        map.addSource(sourceName.poi, {
          type: "geojson",
          data: data as any,
        });

        map.addLayer({
          id: layerName.poiLayer,
          type: "symbol",
          source: sourceName.poi,
          layout: {
            "icon-image": ["get", "kategori"],
            "icon-size": 0.5,
            "icon-allow-overlap": true,
          },
        });

        map.addSource("polygon-detail", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Polygon",
                  coordinates: polygon,
                },
              },
            ],
          },
        });

        map.addLayer({
          id: "polygon-detail-layer",
          type: "fill",
          source: "polygon-detail",
          layout: {},
          paint: {
            "fill-color": "#3182CE", // blue color fill
            "fill-opacity": 0.5,
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
