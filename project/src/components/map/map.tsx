import { useEffect, useRef } from 'react';
import { Icon, Marker } from 'leaflet';
import ICity from '../../interfaces/ICity';
import IOffer from '../../interfaces/IOffer';
import useMap from '../../hooks/useMap';

type MapProps = {
  city: ICity,
  offers: IOffer[]
};

const defaultCustomIcon = new Icon({
  iconUrl: '/img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({city, offers}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, offers]);

  return (
    <section ref={mapRef} className="cities__map map"></section>
  );
}

export default Map;
