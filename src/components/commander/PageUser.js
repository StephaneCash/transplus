import React from 'react'
import { Link } from 'react-router-dom'
import { FcApproval } from "react-icons/fc";

const PageUser = () => {
    return (
        <div className='pageA'>
            <h2>Votre demande a été bien prise en compte.
                <br /> Nos équipes vous rappeleront.
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