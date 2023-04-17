import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';

mapboxgl.accessToken = "pk.eyJ1IjoiY2FzaHN0ZXBoIiwiYSI6ImNsZ2FwbXlhZDFqdm4zbXA4ZGo3c2h3bmgifQ.ENYGFtxG5qPBj8SRr0Gr-A";

const MapBox = () => {

    function handleShowMap() { };

    useEffect(() => {

        const map = new mapboxgl.Map({
            container: handleShowMap,
            style: 'mapbox://styles/mapbox/streets-v10',
            center: [15.322222, -4.325],
            zoom: 12
        });

        const directions = new MapboxDirections({
            accessToken: mapboxgl.accessToken,
            unit: 'metric',
            profile: 'mapbox/driving'
        });

        var geolocate = new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        });

        map.addControl(directions, 'top-left');
        map.addControl(new mapboxgl.NavigationControl());
        map.addControl(geolocate, 'top-right');
    }, []);

    const submitData = () => {
        let inputValue = document.querySelector('.mapboxgl-ctrl-geocoder input');
        console.log(inputValue.value)
    };

    return (
        <>
            <div
                ref={el => (handleShowMap) = el}
                className='mapWrapper'
            >
            </div>

            <div className='contentBtn'>
                <button className='button' id="commanderBtn" onClick={submitData}>Commander</button>
            </div>
        </>
    )
}

export default MapBox
