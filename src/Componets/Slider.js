import React from 'react'
import { Link } from 'react-router-dom'

const Slider = () => {
    return (
        <>
            {/* <!-- Carousel Start --> */}
            <div className="container-fluid p-0">
                <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src="img/carousel-1.png" alt="Dental Care 1" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: "900px" }}>
                                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">Keep Your Teeth Healthy</h5>
                                    <h1 className="display-1 text-white mb-md-4 animated zoomIn">Take The Best Quality Dental Treatment</h1>
                                    <Link to="/Appointment" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Appointment</Link>
                                    <Link to="/Contact" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="img/carousel-2.jpg" alt="Dental Care 2" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: "900px" }}>
                                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">Keep Your Teeth Healthy</h5>
                                    <h1 className="display-1 text-white mb-md-4 animated zoomIn">Take The Best Quality Dental Treatment</h1>
                                    <Link to="/Appointment" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Appointment</Link>
                                    <Link to="/Contact" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            {/* <!-- Banner Start --> */}
            <div className="container-fluid banner mb-5">
                <div className="container">
                    <div className="row gx-0">
                        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
                            <div className="bg-primary d-flex flex-column p-5" style={{ height: "300px" }}>
                                <h3 className="text-white mb-3">Opening Hours</h3>
                                <div className="d-flex justify-content-between text-white mb-3">
                                    <h6 className="text-white mb-0">Mon - Fri</h6>
                                    <p className="mb-0"> 8:00am - 9:00pm</p>
                                </div>
                                <div className="d-flex justify-content-between text-white mb-3">
                                    <h6 className="text-white mb-0">Saturday</h6>
                                    <p className="mb-0"> 8:00am - 7:00pm</p>
                                </div>
                                <div className="d-flex justify-content-between text-white mb-3">
                                    <h6 className="text-white mb-0">Sunday</h6>
                                    <p className="mb-0"> 8:00am - 5:00pm</p>
                                </div>
                                <Link className="btn btn-light" to="/Appointment">Appointment</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
                            <div className="bg-dark d-flex flex-column p-5" style={{ height: "300px" }}>
                                <h3 className="text-white mb-3">Search A Doctor</h3>
                                <div className="date mb-3" id="date" data-target-input="nearest">
                                    <input type="text" className="form-control bg-light border-0 datetimepicker-input"
                                        placeholder="Appointment Date" data-target="#date" data-toggle="datetimepicker" style={{ height: "40px" }} />
                                </div>
                                <select className="form-select bg-light border-0 mb-3" defaultValue="" style={{ height: "40px" }}>
                                    <option value="" disabled>Select A Service</option>
                                    <option value="1">Service 1</option>
                                    <option value="2">Service 2</option>
                                    <option value="3">Service 3</option>
                                </select>
                                <Link className="btn btn-light" to="/Appointment">Search Doctor</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
                            <div className="bg-secondary d-flex flex-column p-5" style={{ height: "300px" }}>
                                <h3 className="text-white mb-3">Make Appointment</h3>
                                <p className="text-white">Ipsum erat ipsum dolor clita rebum no rebum dolores labore, ipsum magna at eos et eos amet.</p>
                                <h2 className="text-white mb-0">+012 345 6789</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Banner End --> */}
            {/* <!-- Carousel End --> */}
        </>
    )
}
export default Slider;
