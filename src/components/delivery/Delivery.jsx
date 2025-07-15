import React from 'react'
import Container from '../../Layout/Container'
import DeliveryBanner1 from '../../assets/DeliveryBanner1.png'
import DeliveryBanner2 from '../../assets/DeliveryBanner2.png'
import { FaPlay } from "react-icons/fa";

const Delivery = () => {
    return (
        <section className='pb-[149px] bg-gradient-to-r from-[#FFF7E7] to-[#FFF1DC]'>
            <Container>
                <div className='h-[580px] rounded-2xl bg-no-repeat bg-center bg-cover relative after:absolute after:content[""] after:h-full after:w-full after:top-0 after:left-0 after:bg-[#0A090DCC] overflow-hidden'
                    style={{
                        backgroundImage: `URL(${DeliveryBanner1})`,
                    }}
                >
                    <div className=' absolute top-[126px] left-[311px]'>
                        <div className='relative z-20 text-white w-[673px] h-[286px] bg-no-repeat bg-center bg-cover after:absolute after:content[""] after:h-full after:w-full after:top-0 after:left-0 after:bg-[#0A090DCC] overflow-hidden'
                            style={{
                                backgroundImage: `URL(${DeliveryBanner2})`,
                            }}
                        >
                            <div className='relative z-50 flex flex-col items-center text-center'>
                                <div className='w-[86px] h-[86px] rounded-full bg-primary flex items-center justify-center mt-[15px]'>
                                    <FaPlay size={40} color='white' />
                                </div>
                                <h2 className='font-secondary font-bold text-[30px] text-primary mt-6 mb-5'>FASTEST DELIVERY</h2>
                                <p className='max-w-[673px] font-primary text-[25px] leading-[110%] text-white'>
                                    You can get your valuable item in the fastest period of
                                    time with safety. Because your emergency
                                    is our first priority.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Delivery