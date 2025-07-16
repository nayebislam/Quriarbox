import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosStar } from "react-icons/io";
import SliderImg from '../../assets/SliderImg.png'

const TestimonialSlider = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <section className="w-full max-w-[872px] mx-auto mt-[89px]">
            <Slider {...settings}>
                <div className="pt-[39px] pr-[29px] pb-8.5 pl-[39px] bg-white rounded-2xl">
                    <div>
                        <h2 className="font-primary font-bold text-[25px] leading-[120%] text-primary">Fantastic service!</h2>
                        <p className="font-primary text-[16px] leading-[145%] text-[#464558] mt-3.5 mb-3">I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. They are really quick and dependable. They give me with the option of real-time delivery status, which allows me to track the progress of my goods delivery. I get a lot of questions from call center support and key account managers. They come highly recommended. Confidently say that they are really reliable.</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-x-[7px]">
                            <IoIosStar size={19} color="#F95C19" />
                            <IoIosStar size={19} color="#F95C19" />
                            <IoIosStar size={19} color="#F95C19" />
                            <IoIosStar size={19} color="#F95C19" />
                            <IoIosStar size={19} color="#F95C19" />
                        </div>
                        <div className="flex items-center">
                            <div className="text-right mr-[13px]">
                                <h2 className="font-primary font-bold text-[16px] leading-[120%] text-[#222132]">Yves Tanguy</h2>
                                <p className="font-primary text-[16px] leading-[120%] text-[#464558] mt-1">Chief Executive, DLF</p>
                            </div>
                            <div>
                                <img src={SliderImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-[39px] pr-[29px] pb-8.5 pl-[39px] bg-white rounded-2xl">
                    <div>
                        <h2 className="font-primary font-bold text-[25px] leading-[120%] text-primary">Fantastic service!</h2>
                        <p className="font-primary text-[16px] leading-[145%] text-[#464558] mt-3.5 mb-3">I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. They are really quick and dependable. They give me with the option of real-time delivery status, which allows me to track the progress of my goods delivery. I get a lot of questions from call center support and key account managers. They come highly recommended. Confidently say that they are really reliable.</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-x-[7px]">
                            <IoIosStar size={19} color="#F95C19" />
                            <IoIosStar size={19} color="#F95C19" />
                            <IoIosStar size={19} color="#F95C19" />
                            <IoIosStar size={19} color="#F95C19" />
                            <IoIosStar size={19} color="#F95C19" />
                        </div>
                        <div className="flex items-center">
                            <div className="text-right mr-[13px]">
                                <h2 className="font-primary font-bold text-[16px] leading-[120%] text-[#222132]">Yves Tanguy</h2>
                                <p className="font-primary text-[16px] leading-[120%] text-[#464558] mt-1">Chief Executive, DLF</p>
                            </div>
                            <div>
                                <img src={SliderImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-[39px] pr-[29px] pb-8.5 pl-[39px] bg-white rounded-2xl">
                    <div>
                        <h2 className="font-primary font-bold text-[25px] leading-[120%] text-primary">Fantastic service!</h2>
                        <p className="font-primary text-[16px] leading-[145%] text-[#464558] mt-3.5 mb-3">I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. They are really quick and dependable. They give me with the option of real-time delivery status, which allows me to track the progress of my goods delivery. I get a lot of questions from call center support and key account managers. They come highly recommended. Confidently say that they are really reliable.</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-x-[7px]">
                            <IoIosStar size={19} color="#F95C19" />
                            <IoIosStar size={19} color="#F95C19" />
                            <IoIosStar size={19} color="#F95C19" />
                            <IoIosStar size={19} color="#F95C19" />
                            <IoIosStar size={19} color="#F95C19" />
                        </div>
                        <div className="flex items-center">
                            <div className="text-right mr-[13px]">
                                <h2 className="font-primary font-bold text-[16px] leading-[120%] text-[#222132]">Yves Tanguy</h2>
                                <p className="font-primary text-[16px] leading-[120%] text-[#464558] mt-1">Chief Executive, DLF</p>
                            </div>
                            <div>
                                <img src={SliderImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </section>
    );
}

export default TestimonialSlider