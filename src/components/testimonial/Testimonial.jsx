import React from 'react'
import Container from '../../Layout/Container'
import TestimonialIcon from '../../assets/TestimonialIcon.png'

const Testimonial = () => {
    return (
        <section className='pb-[266px] bg-gradient-to-r from-[#FFF7E7] to-[#FFF1DC]'>
            <Container>
                <div className='flex items-center justify-center'>
                    <div className='mr-11'>
                        <img src={TestimonialIcon} alt="" />
                    </div>
                    <div className='text-center'>
                        <p className='font-secondary font-bold text-3xl text-primary'>TESTIMONIAL</p>
                        <h1 className='font-primary font-extrabold text-[39px] leading-[110%] mt-2.5 text-[#11111D]'>Our Awesome Clients</h1>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Testimonial