import React from 'react'
import { Link } from 'react-router-dom'
import Service from '../Componets/Service'
import Newsletter from '../Componets/Newsletter'

const ServicePage = () => {
    return (
        <>
            {/* <!-- Hero Start --> */}
            <div className="container-fluid bg-primary py-5 hero-header mb-5">
                <div className="row py-3">
                    <div className="col-12 text-center">
                        <h1 className="display-3 text-white animated zoomIn">Services</h1>
                        <Link to="/" className="h4 text-white">Home</Link>
                        <i className="far fa-circle text-white px-2"></i>
                        <Link to="/Service" className="h4 text-white">Services</Link>
                    </div>
                </div>
            </div>
            {/* <!-- Hero End --> */}
            <Service />
            <Newsletter />

        </>
    )
}
export default ServicePage