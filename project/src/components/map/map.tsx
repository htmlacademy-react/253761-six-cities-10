import { useEffect, useRef } from 'react';
import ICity from '../../interfaces/ICity';
import IOffer from '../../interfaces/IOffer';
import useMap from '../../hooks/useMap';

type MapProps = {
  city: ICity,
  offers: IOffer[]
};

function Map({city, offers}: MapProps): JSX.Element {
  const mapRef = useRef(null);

  const map = useMap(mapRef, city);

  useEffect(() => {
    console.log(offers);
  }, [map]);

  return (
    <section ref={mapRef} className="cities__map map"></section>
  );
}

export default Map;
