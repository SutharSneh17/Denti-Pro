import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/Logo.png'

const Navbar = () => {
    return (
        <>
            {/* <!-- Navbar Start --> */}
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
                <div>
                    <img src={Logo} alt='DentiPro Logo' className='p-0 m-0 logo-img' />
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <Link to="/Home" className="nav-item nav-link">Home</Link>
                        <Link to="/Appointment" className="nav-item nav-link">Appointment</Link>
                        <Link to="/Service" className="nav-item nav-link">Service</Link>
                        <Link to="/Contact" className="nav-item nav-link">Contact</Link>
                        <Link to="/About" className="nav-item nav-link">About</Link>
                    </div>
                    <button type="button" className="btn text-dark" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button>
                    <Link to="/Appointment" className="btn btn-primary py-2 px-4 ms-3">Appointment</Link>
                </div>
            </nav>
            {/* <!-- Navbar End --> */}
        </>
    )
}
export default Navbar;