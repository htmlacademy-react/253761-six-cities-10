import { useState, useEffect, MutableRefObject } from 'react';
import { Map, TileLayer } from 'leaflet';
import ICity from '../interfaces/ICity';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: ICity): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    //console.log('map', map);
    if (mapRef.current !== null && map === null) {
      const mapInstance = new Map(mapRef.current, {
        center: {
          lat: city.latitude,
          lng: city.longitude,
        },
        zoom: city.zoom,
      });

      const tileayer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        });

      mapInstance.addLayer(tileayer);
      //console.log('mapInstance', mapInstance);
      setMap(mapInstance);
    }
  }, [mapRef, city, map]);

  return map;
}

export default useMap;
