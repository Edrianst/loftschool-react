import React, {useCallback, useEffect, useState} from 'react';
import mapboxgl from 'mapbox-gl';
import { mapboxToken as token } from '../../constants/Tokens';
import Header from "../Shared/Header/Header";
import { OrderPanel } from "./OrderPanel";
import { drawRoute } from "./DrawRoute";
import { useSelector } from "react-redux";

const Map = () => {
    const state = useSelector(state => state);
    const [stateMap, setStateMap] = useState(null);
    let mapContainer;
    useEffect(() => {
        mapboxgl.accessToken = token;
        const map = new mapboxgl.Map({
            container: mapContainer,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [30.2656504, 59.8029126],
            zoom: 15
        });
        setStateMap(map);

        return () => {
            map.remove();
        }
    }, []);

    const deleteRoute = useCallback(() => {
        stateMap.removeLayer('route');
        stateMap.removeLayer('start');
        stateMap.removeLayer('start-inner');
        stateMap.removeLayer('finish');
        stateMap.removeLayer('finish-inner');
        stateMap.removeSource('start');
        stateMap.removeSource('finish');
        stateMap.removeSource('route');
        stateMap.flyTo({
            zoom: 15
        });
    }, [stateMap]);

    useEffect(() => {
        state.route.status && drawRoute(stateMap, state.route.coordinates);
        state.cancel && deleteRoute();
    }, [state.route, state.cancel, stateMap]);

    return (
        <>
            <Header />
            <OrderPanel />
            <div className="map" ref={el => mapContainer = el} />
        </>);
};

export default Map;