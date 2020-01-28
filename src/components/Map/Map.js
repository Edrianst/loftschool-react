import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { mapboxToken as token } from '../../constants/Tokens';

const Map = () => {
    let mapContainer;
    useEffect(() => {
        mapboxgl.accessToken = token;
        const map = new mapboxgl.Map({
            container: mapContainer,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [30.2656504, 59.8029126],
            zoom: 15
        });
        return () => {
            map.remove();
        }
    }, [mapContainer]);

    return <div className="map" ref={el => mapContainer = el} />;
};

export default Map;