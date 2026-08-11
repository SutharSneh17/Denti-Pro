import React from 'react'
import { Link } from 'react-router-dom'

const Team = () => {
    return (
        <>
            {/* <!-- Team Start --> */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.1s">
                            <div className="section-title bg-light rounded h-100 p-5">
                                <h5 className="position-relative d-inline-block text-primary text-uppercase">Our Dentist</h5>
                                <h1 className="display-6 mb-4">Meet Our Certified & Experienced Dentist</h1>
                                <Link to="/Appointment" className="btn btn-primary py-3 px-5">Appointment</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                            <div className="team-item">
                                <div className="position-relative rounded-top" style={{ zIndex: "1" }}>
                                    <img className="img-fluid rounded-top w-100" src="img/team-1.jpg" alt="Dr John Doe" />
                                    <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                                        <a className="btn btn-primary btn-square m-1" href="#!"><i className="fab fa-twitter fw-normal"></i></a>
                                        <a className="btn btn-primary btn-square m-1" href="#!"><i className="fab fa-facebook-f fw-normal"></i></a>
                                        <a className="btn btn-primary btn-square m-1" href="#!"><i className="fab fa-linkedin-in fw-normal"></i></a>
                                        <a className="btn btn-primary btn-square m-1" href="#!"><i className="fab fa-instagram fw-normal"></i></a>
                                    </div>
                                </div>
                                <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                                    <h4 className="mb-2">Dr. John Doe</h4>
                                    <p className="text-primary mb-0">Implant Surgeon</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                            <div className="team-item">
                                <div className="position-relative rounded-top" style={{ zIndex: "1" }}>
                                    <img className="img-fluid rounded-top w-100" src="img/team-2.jpg" alt="Dr Jane Smith" />
                                    <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                                        <a className="btn btn-primary btn-square m-1" href="#!"><i className="fab fa-twitter fw-normal"></i></a>
                                        <a className="btn btn-primary btn-square m-1" href="#!"><i className="fab fa-facebook-f fw-normal"></i></a>
                                        <a className="btn btn-primary btn-square m-1" href="#!"><i className="fab fa-linkedin-in fw-normal"></i></a>
                                        <a className="btn btn-primary btn-square m-1" href="#!"><i className="fab fa-instagram fw-normal"></i></a>
                                    </div>
                                </div>
                                <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                                    <h4 className="mb-2">Dr. Jane Smith</h4>
                                    <p className="text-primary mb-0">Orthodontist</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.1s">
                            <div className="team-item">
                                <div className="position-relative rounded-top" style={{ zIndex: "1" }}>
                                    <img className="img-fluid rounded-top w-100" src="img/team-3.jpg" alt="Dr Robert Lee" />
                                    <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                                        <a className="btn btn-primary btn-square m-1" href="#!"><i className="fab fa-twitter fw-normal"></i></a>
                                        <a className="btn btn-primary btn-square m-1" href="#!"><i className="fab fa-facebook-f fw-normal"></i></a>
                                        <a className="btn btn-primary btn-square m-1" href="#!"><i className="fab fa-linkedin-in fw-normal"></i></a>
                                        <a className="btn btn-primary btn-square m-1" href="#!"><i className="fab fa-instagram fw-normal"></i></a>
                                    </div>
                                </div>
                                <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                                    <h4 className="mb-2">Dr. Robert Lee</h4>
                                    <p className="text-primary mb-0">Cosmetic Dentist</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                            <div className="team-item">
                                <div className="position-relative rounded-top" style={{ zIndex: "1" }}>
                                    <img className="img-fluid rounded-top w-100" src="img/team-4.jpg" alt="Dr Emily Davis" />
                                    <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                                        <a className="btn btn-primary btn-square m-1" href="#!"><i className="fab fa-twitter fw-normal"></i></a>
                                        <a className="btn btn-primary btn-square m-1" href="#!"><i className="fab fa-facebook-f fw-normal"></i></a>
                                        <a className="btn btn-primary btn-square m-1" href="#!"><i className="fab fa-linkedin-in fw-normal"></i></a>
                                        <a className="btn btn-primary btn-square m-1" href="#!"><i className="fab fa-instagram fw-normal"></i></a>
                                    </div>
                                </div>
                                <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                                    <h4 className="mb-2">Dr. Emily Davis</h4>
                                    <p className="text-primary mb-0">Periodontist</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                            <div className="team-item">
                                <div className="position-relative rounded-top" style={{ zIndex: "1" }}>
                                    <img className="img-fluid rounded-top w-100" src="img/team-5.jpg" alt="Dr Michael Brown" />
                                    <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                                        <a className="btn btn-primary btn-square m-1" href="#!"><i className="fab fa-twitter fw-normal"></i></a>
                                        <a className="btn btn-primary btn-square m-1" href="#!"><i className="fab fa-facebook-f fw-normal"></i></a>
                                        <a className="btn btn-primary btn-square m-1" href="#!"><i className="fab fa-linkedin-in fw-normal"></i></a>
                                        <a className="btn btn-primary btn-square m-1" href="#!"><i className="fab fa-instagram fw-normal"></i></a>
                                    </div>
                                </div>
                                <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                                    <h4 className="mb-2">Dr. Michael Brown</h4>
                                    <p className="text-primary mb-0">Pediatric Dentist</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Team End --> */}
        </>
    )
}
export default Team;
