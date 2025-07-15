import React from 'react'
import Container from '../../Layout/Container'
import icon1 from '../../assets/Services-Icon1.svg'
import icon2 from '../../assets/Services-Icon2.svg'
import icon3 from '../../assets/Services-Icon3.svg'

const Services = () => {
  const servicesData = [
    {
      img: icon1,
      name: "Business Services",
      title: "We give you complete reliable delivery for your company.  We will take full responsibility of the deliveries.",
      item1: "Corporate goods",
      item2: "Shipment",
      item3: "Accesories",
      button: "Learn more",
    },
    {
      img: icon2,
      name: "Statewide Services",
      title: "Offering home delivery around the city, where your products will be at your doorstep within 48-72 hours.",
      item1: "Personal items",
      item2: "Percels",
      item3: "Documents",
      button: "Learn more",
    },
    {
      img: icon3,
      name: "Personal Services",
      title: "You can trust us to safely deliver your most sensitive documents to the specific area in a short time.",
      item1: "Gifts",
      item2: "Package",
      item3: "Documents",
      button: "Learn more",
    },
  ]
  return (
    <section className='pb-[172px] bg-gradient-to-r from-[#FFF7E7] to-[#FFF1DC]'>
      <Container>
        <div className='text-center mb-[86px]'>
          <p className='font-secondary font-bold text-[31.25px] text-primary'>SERVICES</p>
          <h3 className='font-primary font-extrabold text-[39.06px] text-[#11111D]'>Our services for you</h3>
        </div>
        <div className='flex justify-between'>
          {
            servicesData.map((items) => (
              <div className='pt-[67px] pb-[49px] px-[61px] bg-white rounded-2xl'>
                <div className='flex justify-center'>
                  <img src={items.img} alt="#Services-Icon1" />
                </div>
                <h2 className='font-primary font-extrabold text-[25px] text-[#464558] text-center mt-[29px] mb-8'>{items.name}</h2>
                <p className='max-w-[301.81px] font-primary text-[16px] leading-[145%] text-secondary'>{items.title}</p>
                <ul className='flex flex-col gap-y-3 mt-9 mb-[60px]'>
                  <li>
                    <a className='flex items-center gap-x-[11px]' href="#">
                      <div className='w-[7px] h-[7px] rounded-full bg-primary'></div>
                      <span className='font-primary text-[16px] leading-[120%] text-secondary'>{items.item1}</span>
                    </a>
                  </li>
                  <li>
                    <a className='flex items-center gap-x-[11px]' href="#">
                      <div className='w-[7px] h-[7px] rounded-full bg-primary'></div>
                      <span className='font-primary text-[16px] leading-[120%] text-secondary'>{items.item2}</span>
                    </a>
                  </li>
                  <li>
                    <a className='flex items-center gap-x-[11px]' href="#">
                      <div className='w-[7px] h-[7px] rounded-full bg-primary'></div>
                      <span className='font-primary text-[16px] leading-[120%] text-secondary'>{items.item3}</span>
                    </a>
                  </li>
                </ul>
                <button className='py-3 border border-primary rounded text-primary font-secondary font-bold text-[16px] w-full hover:bg-primary hover:text-white ease-in-out duration-150 cursor-pointer'>{items.button}</button>
              </div>
            ))
          }
        </div>
      </Container>
    </section>
  )
}

export default Services