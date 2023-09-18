import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FiSend } from 'react-icons/fi';
import axios from 'axios';
import { baseUrl } from '../../bases/bases';

mapboxgl.accessToken = "pk.eyJ1IjoiY2FzaHN0ZXBoIiwiYSI6ImNsZ2FwbXlhZDFqdm4zbXA4ZGo3c2h3bmgifQ.ENYGFtxG5qPBj8SRr0Gr-A";

const MapBox = () => {

    const navigate = useNavigate();

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

        const directions = new MapboxDirections({
            accessToken: mapboxgl.accessToken,
            unit: 'metric',
            profile: 'mapbox/driving'
        });

        const origin = directions.getOrigin();
        const destination = directions.getDestination();

        let form = {};

        const time = document.querySelector('.mapbox-directions-route-summary h1').innerHTML;
        const distance = document.querySelector('.mapbox-directions-route-summary span').innerHTML;
        form.time = time;
        form.distance = distance;

        const a = origin && origin.geometry && origin.geometry.coordinates[0];
        const b = origin && origin.geometry && origin.geometry.coordinates[1];

        const c = destination && destination.geometry && destination.geometry.coordinates[0];
        const d = destination && destination.geometry && destination.geometry.coordinates[1];

        form.depart = a + "," + b;
        form.arr = c + "," + d;

        new mapboxgl.Map({
            container: handleShowMap,
            style: 'mapbox://styles/mapbox/streets-v10',
            center: [15.322222, -4.325],
            zoom: 12
        });


        axios.post(`${baseUrl}/courses`, form)
            .then(res => {
                toast.success('Votre demande a été bien prise en compte vous serez notifié dans un bref délais ',);
                navigate("/answer", { state: form });
            })
            .catch(err => {
                console.log(err)
            })
    };

    return (
        <div className='contentMap'>
            <div
                ref={el => (handleShowMap) = el}
                className='mapWrapper'
            >
            </div>

            <div className='contentBtn'>
                <button className='button' id="commanderBtn" onClick={submitData}>
                    <FiSend size={20} color='#fff' />
                </button>
            </div>
        </div>
    )
}

export default MapBox
