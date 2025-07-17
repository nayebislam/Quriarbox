import React from 'react'
import Container from '../../Layout/Container'
import { LuMapPin } from "react-icons/lu";
import { IoTimeOutline } from "react-icons/io5";
import { LuMail } from "react-icons/lu";

const FindUs = () => {
  return (
    <section className='pb-[138px] bg-gradient-to-r from-[#FFF7E7] to-[#FFF1DC]'>
      <Container>
        <div className='text-center mb-[85px]'>
          <p className='font-secondary font-bold text-[31.25px] text-primary'>FIND US</p>
          <h3 className='font-primary font-extrabold text-[39px] leading-[110%] text-[#222132] mt-[13px]'>Access us easily</h3>
        </div>
        <div className='grid grid-cols-12 space-x-[23px]'>
          <div className='col-span-7 h-[428px] outline-none'>
            <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.mapsdirections.info/fr/calculer-la-population-sur-une-carte">Estimer la population sur la carte</a></iframe>
          </div>
          <div className='col-span-5 h-[428px] pt-[81px] pr-[126px] pb-[88px] pl-[85px] bg-[#FEFCFA]'>
            <h4 className='font-primary font-bold text-[20px] leading-[120%] text-[#464558]'>Contact with us</h4>
            <div className='mt-[37px] flex flex-col gap-y-[15px]'>
              <div className='flex items-center gap-x-[13px]'>
                <LuMapPin size={22} color='#FFAF0F' />
                <p className='font-primary text-[16px] leading-[120%] text-[#5C5B6C]'>2277 Lorem Ave, San Diego, CA 22553</p>
              </div>
              <div className='flex items-center gap-x-[13px]'>
                <IoTimeOutline size={22} color='#FFAF0F' />
                <p className='max-w-[230px] font-primary text-[16px] leading-[120%] text-[#5C5B6C]'>Monday - Friday: 10 am - 10pm Sunday: 11 am - 9pm</p>
              </div>
              <div className='flex items-center gap-x-[13px]'>
                <LuMail size={22} color='#FFAF0F' />
                <p className='font-primary text-[16px] leading-[120%] text-[#5C5B6C]'>2277 Lorem Ave, San Diego, CA 22553</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FindUs