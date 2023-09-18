import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FcApproval } from "react-icons/fc";
import { ContextApp } from '../../AppContext';

const PageUser = () => {

    const { val } = useContext(ContextApp);

    const location = useLocation();
    const state = location && location.state;

    console.log(state, " STATE")

    return (
        <div className='pageA'>
            <div className='alert alert-success'>
                <p>
                    <FcApproval size={60} />
                </p>
                <h6>Votre demande a été bien prise en compte.
                    <br /> Nos équipes vous rappeleront. <br /> <br />   </h6>
                <span>Départ : </span> <br />
                <span>Destination : </span> <br /> <br/>
                <span>Distance : {state && state.distance}</span> <br />
                <span>Temps : {state && state.time}</span>


                <p style={{ fontSize: "15px" }}>
                    {
                        val && val.deb && val.deb && " Votre lieu de départ : " + val.deb
                    }
                </p>
                <p style={{ fontSize: "15px" }}>
                    {
                        val && val.arr && val.arr && " Votre lieu de déstination : " + val.arr
                    }
                </p>


                <p>
                    <button>
                        <Link to="/commander-une-course" style={{
                            color: "#fff",
                            textDecoration: "none"
                        }}>
                            Retour
                        </Link>
                    </button>
                </p>
            </div >
        </div>
    )
}

export default PageUser