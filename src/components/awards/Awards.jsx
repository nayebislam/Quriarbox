import React from 'react'
import Container from '../../Layout/Container'
import Awards1 from '../../assets/Awards1.png'
import Awards2 from '../../assets/Awards2.png'
import Awards3 from '../../assets/Awards3.png'
import Awards4 from '../../assets/Awards4.png'
import Awards5 from '../../assets/Awards5.png'

const Awards = () => {
  return (
    <section className='pb-[162px] bg-gradient-to-r from-[#FFF7E7] to-[#FFF1DC]'>
        <Container>
            <div className='flex justify-between items-center'>
                <div className='text-center'>
                    <div className='flex justify-center'>
                        <img src={Awards1} alt="#Awards1" />
                    </div>
                    <h2 className='font-secondary font-extrabold text-[39px] leading-[110%] text-primary mt-5 mb-1.5'>26+</h2>
                    <p className='font-primary font-bold text-[20px] leading-[120%] text-[#464558]'>Award won</p>
                </div>
                <div className='text-center'>
                    <div className='flex justify-center'>
                        <img src={Awards2} alt="#Awards1" />
                    </div>
                    <h2 className='font-secondary font-extrabold text-[39px] leading-[110%] text-primary mt-10 mb-1.5'>65+</h2>
                    <p className='font-primary font-bold text-[20px] leading-[120%] text-[#464558]'>States covered</p>
                </div>
                <div className='text-center'>
                    <div className='flex justify-center'>
                        <img src={Awards3} alt="#Awards1" />
                    </div>
                    <h2 className='font-secondary font-extrabold text-[39px] leading-[110%] text-primary mt-10 mb-1.5'>689K+</h2>
                    <p className='font-primary font-bold text-[20px] leading-[120%] text-[#464558]'>Happy clients</p>
                </div>
                <div className='text-center'>
                    <div className='flex justify-center'>
                        <img src={Awards4} alt="#Awards1" />
                    </div>
                    <h2 className='font-secondary font-extrabold text-[39px] leading-[110%] text-primary mt-10 mb-1.5'>130M+</h2>
                    <p className='font-primary font-bold text-[20px] leading-[120%] text-[#464558]'>Goods delivered</p>
                </div>
                <div className='text-center'>
                    <div className='flex justify-center'>
                        <img src={Awards5} alt="#Awards1" />
                    </div>
                    <h2 className='font-secondary font-extrabold text-[39px] leading-[110%] text-primary mt-10 mb-1.5'>130M+</h2>
                    <p className='font-primary font-bold text-[20px] leading-[120%] text-[#464558]'>Business hours</p>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Awards