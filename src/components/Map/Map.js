import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { mapboxToken as token } from '../../constants/Tokens';
import Header from "../Shared/Header/Header";
import { OrderPanel } from "./OrderPanel";
import { drawRoute } from "./DrawRoute";
import { useSelector } from "react-redux";

const Map = () => {
    const route = useSelector(state => state.route);
    let mapContainer;
    useEffect(() => {
        mapboxgl.accessToken = token;
        const map = new mapboxgl.Map({
            container: mapContainer,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [30.2656504, 59.8029126],
            zoom: 15
        });

        map.on('load', () => {
            if(route.status) drawRoute(map, route.coordinates);
        });

        return () => {
            map.remove();
        }
    }, [mapContainer, route]);

    return (
        <>
            <Header />
            <OrderPanel />
            <div className="map" ref={el => mapContainer = el} />
        </>);
};

export default Map;