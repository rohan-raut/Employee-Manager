import React from 'react'

import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark py-2">
                <div className="container-fluid justify-content-center">
                    <Link className="navbar-brand text-white" to="/">Employee Manager</Link>
                </div>
            </nav>
            
        </div>
    )

}

export default NavBar
