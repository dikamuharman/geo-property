import { Box, VStack } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import Map from "../../../map";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import useMapStore from "../../../map/store/useMapStore";
import * as turf from "@turf/turf";

interface DrawMapProps {}

const DrawMap: FC<DrawMapProps> = () => {
  // cara expose map menggunakan zustand
  const map = useMapStore((state) => state.map);

  useEffect(() => {
    if (!map) return;
    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true,
      },
      defaultMode: "draw_polygon",
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
          if (feature.geometry.type === "Polygon") {
            const geom = feature.geometry.coordinates;
            console.log(geom);
          }
        }
      }
    };

    map.on("draw.create", calculateArea);

    map.on("draw.update", calculateArea);

    map.on("draw.delete", calculateArea);
  }, [map]);

  return (
    <VStack w="full" alignItems="flex-start">
      <Box w="full" h={500} borderRadius={8} overflow="hidden">
        <Map />
      </Box>
    </VStack>
  );
};

export default DrawMap;
