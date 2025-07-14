import React from 'react'
import Container from '../../Layout/Container'
import icon from '../../assets/Services-Icon1.svg'

const Services = () => {
  return (
    <section className='pb-[172px] bg-gradient-to-r from-[#FFF7E7] to-[#FFF1DC]'>
        <Container>
            <div className='text-center'>
                <p className='font-secondary font-bold text-[31.25px] text-primary'>SERVICES</p>
                <h3 className='font-primary font-extrabold text-[39.06px] text-[#11111D]'>Our services for you</h3>
            </div>
            <div className='pt-[67px] pb-[49px] px-[61px] bg-white inline-block'>
                <img src={icon} alt="" />
                <h2>Business Services</h2>
                <p>We give you complete reliable delivery for your company.  We will take full responsibility of the deliveries.</p>
            </div>
        </Container>
    </section>
  )
}

export default Services