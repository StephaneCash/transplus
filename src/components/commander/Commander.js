import React from 'react';
import "./Commander.css";
import SignIn from '../Log/SignIn';

const Commander = () => {
    return (
        <section>
            <div className='commander container'>
                <div>
                    <h2>
                        Trouvez l'option de transport qui vous convient
                    </h2>

                    <p>
                        Commandez une course, montez à bord et détendez-vous. <br />
                        Connectez-vous pour profiter de nos services
                    </p>
                </div>
                <SignIn />
            </div>
        </section>
    )
}

export default Commander