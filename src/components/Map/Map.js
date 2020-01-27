import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const Map = () => {
    let mapContainer;
    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiZWRyaWFuc3QiLCJhIjoiY2s1cXhtOGIwMDJoMzNrcHJiZnNoZjgwbiJ9.bPXuNWmgVQ7mURGhSJdFow';
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

    const style = {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '100%',
        zIndex: 0
    };
    return <div className="map" style={style} ref={el => mapContainer = el} />;
};

export default Map;