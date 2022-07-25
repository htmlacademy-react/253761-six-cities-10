import ICity from '../../interfaces/ICity';
import { useEffect, useRef } from 'react';
import L from 'leaflet';
// import useMap from '../../hooks/useMap';

type MapProps = {
  city: ICity
};

function Map({city}: MapProps): JSX.Element {
  const mapRef = useRef(null);

  useEffect(() => {
    console.log('mapRef', mapRef);
    let map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);
  });

  return (
    <section id="map" ref={mapRef} className="cities__map map" style={{width: '300px', height: '300px'}}></section>
  );
}

export default Map;
