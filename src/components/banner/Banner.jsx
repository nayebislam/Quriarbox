import React from 'react'
import Container from '../../Layout/Container'
import { FaArrowRight } from "react-icons/fa6";
import BannerImg from '../../assets/BannerImage.png'

const Banner = () => {
    return (
        <section className='py-[170px] bg-gradient-to-r from-[#FFF7E7] to-[#FFF1DC]'>
            <Container>
                <div className='flex items-center justify-between'>
                    <div>
                        <h3 className='font-primary text-[48px] max-w-[516px] text-[#261134]'>
                            A trusted provider of <span className='font-extrabold'>courier services.</span>
                        </h3>
                        <p className='max-w-[330px] text-[20px] leading-[120%] text-[#4D4D4D] mt-4 mb-[41px]'>We deliver your products safely to your home in a reasonable time.</p>
                        <button className='py-3 px-5 font-secondary text-[20px] bg-primary text-white flex items-center gap-1 rounded'>
                            Get started
                            <FaArrowRight />
                        </button>
                    </div>
                    <div>
                        <img src={BannerImg} alt="" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Banner