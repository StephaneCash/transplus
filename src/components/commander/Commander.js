import React, { useEffect } from 'react';
import "./Commander.css";
import MapBox from './MapBox';
import Navbar from '../navbar/Navbar';
import Partenaires from '../partenaires/Partenaires';

const Commander = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <Navbar />
            <div className='commander'>
                <div className='col-sm-12' style={{ paddingTop: "10px" }}>
                    <MapBox />
                </div>
            </div>
            <Partenaires />
        </>
    )
}

export default Commander