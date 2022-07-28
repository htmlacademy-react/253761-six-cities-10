import { useRef, useState, useEffect, MutableRefObject } from 'react';
import { Map, TileLayer } from 'leaflet';
import ICity from '../interfaces/ICity';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: ICity): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const mapInstance = new Map(mapRef.current, {
        center: {
          lat: city.latitude,
          lng: city.longitude,
        },
        zoom: city.zoom,
      });

      const tileLayer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        });
      mapInstance.addLayer(tileLayer);

      setMap(mapInstance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city, map]);

  return map;
}

export default useMap;
