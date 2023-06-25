import React, { useContext, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ContextApp } from '../../AppContext';
import Loader from '../loader/Loader';

mapboxgl.accessToken = "pk.eyJ1IjoiY2FzaHN0ZXBoIiwiYSI6ImNsZ2FwbXlhZDFqdm4zbXA4ZGo3c2h3bmgifQ.ENYGFtxG5qPBj8SRr0Gr-A";

const MapBox = () => {

    const [clic, setClic] = useState(false);

    const { setVal } = useContext(ContextApp);

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
        let inputValue = document.querySelectorAll('.mapboxgl-ctrl-geocoder input');
        console.log(inputValue[0].value)
        let data = {}
        data.deb = inputValue[0].value;
        data.arr = inputValue[1].value;
        setVal(data)
        console.log(data)
        setClic(true);
        toast.success('Votre demande a été bien prise en compte vous serez notifié dans un bref délais ',);
        setTimeout(() => {
            setClic(false);
            //navigate("/answer");
        }, 2000);
    };

    return (
        <>
            <div
                ref={el => (handleShowMap) = el}
                className='mapWrapper'
            >
            </div>

            <div className='contentBtn'>
                <button className='button' id="commanderBtn" onClick={submitData}>
                    {
                        clic ? <Loader /> : "Commander"
                    }
                </button>
            </div>
        </>
    )
}

export default MapBox
