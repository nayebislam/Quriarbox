import React from 'react'
import Container from '../../Layout/Container'
import logo from '../../assets/Logo.png'
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <nav className='py-4 bg-gradient-to-r from-[rgba(255,255,255,0.7)] to-[rgba(255,255,255,0.15)]'>
            <Container>
                <div className='flex items-center justify-between'>
                    <a href="#">
                        <img src={logo} alt="#logo" />
                    </a>
                    <div className='flex items-center'>
                        <ul className='flex gap-[25px] mr-[45px]'>
                            <li>
                                <a className='font-primary font-extrabold text-[16px] text-primary' href="#">Home</a>
                            </li>
                            <li>
                                <a className='font-primary font-bold text-[16px] text-[#817382]' href="#">Our services</a>
                            </li>
                            <li>
                                <a className='font-primary font-bold text-[16px] text-[#817382]' href="#">About Us</a>
                            </li>
                            <li>
                                <a className='font-primary font-bold text-[16px] text-[#817382]' href="#">What’s new?</a>
                            </li>
                        </ul>
                        <div className='flex items-center'>
                            <div className='p-3.5 bg-[#FFEDC9] flex items-center justify-center rounded-[6px] mr-[9px] cursor-pointer'>
                                <IoSearchOutline size={22} color='#FFAF0F' />
                            </div>
                            <button className='py-3 px-5 font-secondary font-bold text-[20px] text-primary rounded bg-[#FFE4D9] cursor-pointer'>Contact us</button>
                        </div>
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar