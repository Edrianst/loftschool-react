import React, {useCallback, useEffect, useState} from 'react';
import mapboxgl from 'mapbox-gl';
import { mapboxToken as token } from '../../constants/tokens';
import { Header} from "../../Shared/Header";
import { OrderPanel } from "./OrderPanel";
import { drawRoute } from "./DrawRoute";
import { useSelector } from "react-redux";

const Map = () => {
    const route = useSelector(state => state.route);
    const [stateMap, setStateMap] = useState(null);
    const [mapIsLoaded, setMapLoaded] = useState(false);
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

        map.on('idle', () => setMapLoaded(true));

        return () => {
            map.remove();
        }
    }, [mapContainer]);

    const removeIfLayerExists = (map, id) => {
        map.getLayer(id) && map.removeLayer(id);
    };

    const removeIfSourceExists = (map, id) => {
        map.getSource(id) && map.removeSource(id);
    };

    const deleteRoute = useCallback(() => {
        const layersIds = ['start', 'start-inner', 'finish', 'finish-inner', 'route'];
        const sourceIds = ['start', 'finish', 'route'];
        layersIds.map(id => removeIfLayerExists(stateMap, id));
        sourceIds.map(id => removeIfSourceExists(stateMap, id));
        stateMap.flyTo({
            zoom: 15
        });
    }, [stateMap]);

    useEffect(() => {
        if(mapIsLoaded) {
            route.status ? drawRoute(stateMap, route.coordinates) : deleteRoute();
        }
    }, [route, mapIsLoaded, stateMap, deleteRoute]);

    return (
        <>
            <Header />
            <OrderPanel />
            <div className="map" ref={el => mapContainer = el} />
        </>);
};

export default Map;