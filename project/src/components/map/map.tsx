import ICity from '../../interfaces/ICity';
import { useEffect, useRef, useState } from 'react';
import leaflet from 'leaflet';
// import useMap from '../../hooks/useMap';

type MapProps = {
  city: ICity
};

function Map({city}: MapProps): JSX.Element {
  const mapRef = useRef(null);

  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current) {
      const mapInstance = leaflet.map(mapRef.current, {
        center: {
          lat: city.latitude,
          lng: city.longitude,
        },
        zoom: city.zoom,
      });

      leaflet.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }).addTo(mapInstance);

      setMap(map);
    }
  }, [mapRef, city, map]);

  return (
    <section ref={mapRef} className="cities__map map"></section>
  );
}

export default Map;
