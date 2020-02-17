export const drawRoute = (map, coordinates) => {
    let p1 = coordinates[0];
    let p2 = coordinates[(coordinates.length - 1)];
    const bbox = [p1, p2];

    map.fitBounds(bbox, {
        padding: {top: 100, bottom: 50, left: 15, right: 15}
    });

    map.addLayer({
        id: "route",
        type: "line",
        source: {
            type: "geojson",
            data: {
                type: "Feature",
                properties: {},
                geometry: {
                    type: "LineString",
                    coordinates
                }
            }
        },
        layout: {
            "line-join": "round",
            "line-cap": "round"
        },
        paint: {
            "line-color": "#ffc617",
            "line-width": 7
        }
    });
    map.addSource('start', {
        type: 'geojson',
        data: {
            type: 'Point',
            coordinates: p1
        }
    });
    map.addSource('finish', {
        type: 'geojson',
        data: {
            type: 'Point',
            coordinates: p2
        }
    });
    map.addLayer({
        id: 'start',
        source: 'start',
        type: 'circle',
        paint: {
            'circle-radius': 12,
            'circle-color': '#fff'
        }
    });
    map.addLayer({
        id: 'start-inner',
        source: 'start',
        type: 'circle',
        paint: {
            'circle-radius': 7,
            'circle-color': '#ffc617'
        }
    });
    map.addLayer({
        id: 'finish',
        source: 'finish',
        type: 'circle',
        paint: {
            'circle-radius': 15,
            'circle-color': '#000'
        }
    });
    map.addLayer({
        id: 'finish-inner',
        source: 'finish',
        type: 'circle',
        paint: {
            'circle-radius': 9,
            'circle-color': '#fff'
        }
    });
};