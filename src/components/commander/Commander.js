import React, { useEffect } from 'react';
import "./Commander.css";
import MapBox from './MapBox';


const Commander = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className='commander'>
            <div className='col-sm-12'>
                <MapBox />
            </div>
        </div>
    )
}

export default Commander