import React from 'react'
import Img1 from '../img/testimonial-1.jpg'

const Testimonial = () => {
    return (
        <>
            {/* <!-- Testimonial Start --> */}
            <div className="container-fluid bg-primary bg-testimonial py-5 my-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="testimonial-item testimonial-carousel text-center text-white col-lg-7 p-5">
                            <img className="img-fluid mx-auto rounded mb-4" src={Img1} alt="Client Testimonial" />
                            <p className="fs-5">Dolores sed duo clita justo dolor et stet lorem kasd dolore lorem ipsum. At lorem lorem magna ut et, nonumy labore diam erat. Erat dolor rebum sit ipsum.</p>
                            <hr className="mx-auto w-25" />
                            <h4 className="text-white mb-0">Client Name</h4>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Testimonial End --> */}
        </>
    )
}
export default Testimonial;