import React, { useContext, useEffect, useState } from 'react';
import "./Commander.css";
import SignIn from '../Log/SignIn';

import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import MapBox from './MapBox';


const Commander = () => {

    const [isAtive, setIsActive] = useState(false);
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <section id="commander" className='commander'>
                <div className='overPlay'></div>
                <div className='text'>
                    <Link style={{ borderBottom: "1px solid #fff", color: "#fff" }} to="/">
                        <FaHome /></Link>/<span>Commander votre course</span>
                </div>
            </section>

            <div className='commander'>
                <div className='col-sm-12'>
                    {
                        isAtive ? <MapBox /> :
                            <SignIn
                                setIsActive={setIsActive}
                            />
                    }
                </div>
            </div>
        </>
    )
}

export default Commander