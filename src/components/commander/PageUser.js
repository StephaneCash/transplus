import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FcApproval } from "react-icons/fc";
import { ContextApp } from '../../AppContext';

const PageUser = () => {

    const { val } = useContext(ContextApp);

    return (
        <div className='pageA'>
            <h2>Votre demande a été bien prise en compte.
                <br /> Nos équipes vous rappeleront. <br/> <br/>
                

                <p style={{fontSize:"15px"}}>
                    {
                        val && val.deb && val.deb && " Votre lieu de départ : " + val.deb
                    }
                </p>
                <p style={{fontSize:"15px"}}>
                    {
                        val && val.arr && val.arr && " Votre lieu de déstination : " + val.arr
                    }
                </p>
                <p>
                    <FcApproval size={30} />
                </p>
            </h2>
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
    )
}

export default PageUser