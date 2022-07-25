import ICity from '../../interfaces/ICity';
import { useRef } from 'react';
import useMap from '../../hooks/useMap';

type MapProps = {
  city: ICity
};

function Map({city}: MapProps): JSX.Element {
  const mapRef = useRef(null);

  const map = useMap(mapRef, city);

  return (
    <section ref={mapRef} className="cities__map map"></section>
  );
}

export default Map;
