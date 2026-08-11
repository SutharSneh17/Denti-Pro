import React from 'react'
import { Link } from 'react-router-dom'

const Offer = () => {
    return (
        <>
            {/* <!-- Offer Start --> */}
            <div className="container-fluid bg-offer my-5 py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 wow zoomIn" data-wow-delay="0.6s">
                            <div className="offer-text text-center rounded p-5">
                                <h1 className="display-5 text-white">Save 30% On Your First Dental Checkup</h1>
                                <p className="text-white mb-4">Eirmod sed tempor lorem ut dolores sit kasd ipsum. Dolor ea et dolore et at sea ea at dolor justo ipsum duo rebum sea. Eos vero eos vero ea et dolore eirmod diam duo lorem magna sit dolore sed et.</p>
                                <Link to="/Appointment" className="btn btn-dark py-3 px-5 me-3">Appointment</Link>
                                <Link to="/About" className="btn btn-light py-3 px-5">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Offer End --> */}
        </>
    )
}
export default Offer;
