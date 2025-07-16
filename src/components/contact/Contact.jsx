import React from 'react'
import Container from '../../Layout/Container'
import ContactImg from '../../assets/ContactImg.png'
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
    return (
        <section className='pb-[169px] bg-gradient-to-r from-[#FFF7E7] to-[#FFF1DC]'>
            <Container>
                <div className='flex items-center justify-center gap-x-6'>
                    <div>
                        <img src={ContactImg} alt="" />
                        <h3 className='font-secondary font-bold text-2xl text-primary mt-[13px]'>REQUEST A CALLBACK</h3>
                        <h2 className='max-w-[412px] font-primary font-extrabold text-[39px] leading-[110%] text-[#222132] mt-5 mb-[9px]'>We will contact in the shortest time.</h2>
                        <p className='font-primary font-semibold text-[25px] leading-[120%] text-[#9291A1]'>Monday to Friday, 9am-5pm.</p>
                    </div>
                    <div className='flex flex-col gap-y-[15px]'>
                        <input type="text" placeholder='Name' className='w-[423px] py-[15px] px-[19px] outline-none border-[2px] border-[#C5C5D2] rounded-[8px] placeholder:font-primary placeholder:text-[16px] placeholder:leading-[120%] placeholder:text-[#9291A1] font-primary text-[16px] text-black' />
                        <input type="mail" placeholder='Email' className='w-[423px] py-[15px] px-[19px] outline-none border-[2px] border-[#C5C5D2] rounded-[8px] placeholder:font-primary placeholder:text-[16px] placeholder:leading-[120%] placeholder:text-[#9291A1] font-primary text-[16px] text-black' />
                        <textarea type="text" placeholder='Message' className='w-[423px] pt-[13px] pb-[118px] px-5 outline-none border-[2px] border-[#C5C5D2] rounded-[8px] placeholder:font-primary placeholder:text-[16px] placeholder:leading-[120%] placeholder:text-[#9291A1] font-primary text-[16px] text-black resize-none'></textarea>
                        <button className='py-3 px-[131px] bg-primary text-white rounded font-secondary text-2xl font-bold flex items-center gap-x-2 mt-[39px]'>
                            Send Message
                            <RiSendPlaneFill size={25} color='white' />
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Contact