import React from 'react'

const Newsletter = () => {
    return (
        <>
            {/* <!-- Newsletter Start --> */}
            <div className="container-fluid position-relative pt-5 wow fadeInUp" data-wow-delay="0.1s" style={{ zIndex: "1" }}>
                <div className="container">
                    <div className="bg-primary p-5">
                        <form className="mx-auto" style={{ maxWidth: "600px" }} onSubmit={(e) => e.preventDefault()}>
                            <div className="input-group">
                                <input type="text" className="form-control border-white p-3" placeholder="Your Email" />
                                <button className="btn btn-dark px-4" type="submit">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- Newsletter End --> */}
        </>
    )
}
export default Newsletter;
