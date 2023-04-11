import React, { useEffect } from 'react';
import "./Commander.css";
import SignIn from '../Log/SignIn';

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

mapboxgl.accessToken = "pk.eyJ1IjoiY2FzaHN0ZXBoIiwiYSI6ImNsZ2FwbXlhZDFqdm4zbXA4ZGo3c2h3bmgifQ.ENYGFtxG5qPBj8SRr0Gr-A";

const Commander = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    function handleShowMap() { }

    useEffect(() => {

        const map = new mapboxgl.Map({
            container: handleShowMap,
            style: 'mapbox://styles/mapbox/streets-v10',
            center: [-73.985664, 40.748514],
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

    useEffect(() => {

    }, []);

    const submitData = () => {
        let inputValue = document.querySelector('.mapboxgl-ctrl-geocoder input');
        console.log(inputValue.value)
    }

    return (
        <>
            <section id="commander">
                <div className='overPlay'></div>
                <div className='text'>
                    <Link style={{ borderBottom: "1px solid #fff", color: "#fff" }} to="/">
                        <FaHome /></Link>/<span>Commander votre course</span>
                </div>
            </section>

            <div className='commander container'>
                <div className='col-sm-12'>
                    <div
                        ref={el => (handleShowMap) = el}
                        className='mapWrapper'
                    >
                    </div>

                    <button className='button' id="commanderBtn" onClick={submitData}>Commander</button>
                </div>
            </div>
        </>
    )
}

export default Commander