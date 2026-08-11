import React from 'react'
import Slider from '../Componets/Slider';
import About from '../Componets/About';
import Appointment from '../Componets/Appointment';
import Service from '../Componets/Service';
import Offer from '../Componets/Offer';
import Pricing from '../Componets/Pricing';
import Testimonial from '../Componets/Testimonial';
import Team from '../Componets/Team';
import Newsletter from '../Componets/Newsletter';

const HomePage = () => {
    return (
        <>
            <Slider />
            <About />
            <Appointment />
            <Service />
            <Offer />
            <Pricing />
            <Testimonial />
            <Team />
            <Newsletter />
        </>
    )
}
export default HomePage;