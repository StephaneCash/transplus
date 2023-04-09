import React, { useEffect } from 'react';
import "./Commander.css";
import SignIn from '../Log/SignIn';

const Commander = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <section id="commander">
                <div className='overPlay'></div>
                <div className='text'>
                    <h2>
                        Trouvez l'option de transport qui vous convient
                    </h2>

                    <p>
                        Commandez une course, montez à bord et détendez-vous. <br />
                        Connectez-vous pour profiter de nos services
                    </p>
                </div>
            </section>

            <div className='commander container'>
                <SignIn />
            </div>
        </>
    )
}

export default Commander