import React from 'react'
import { Link } from 'react-router-dom'
import About from '../Componets/About';
import Newsletter from '../Componets/Newsletter';

const AboutPage = () => {
    return (
        <>
            {/* <!-- Hero Start --> */}
            <div className="container-fluid bg-primary py-5 hero-header mb-5">
                <div className="row py-3">
                    <div className="col-12 text-center">
                        <h1 className="display-3 text-white animated zoomIn">About Us</h1>
                        <Link to="/" className="h4 text-white">Home</Link>
                        <i className="far fa-circle text-white px-2"></i>
                        <Link to="/About" className="h4 text-white">About</Link>
                    </div>
                </div>
            </div>
            {/* <!-- Hero End --> */}
            <About />
            <Newsletter />
        </>
    )
}
export default AboutPage;