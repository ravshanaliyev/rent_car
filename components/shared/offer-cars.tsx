import React from 'react'
import SubIcon from "../../app/assets/images/sub-icon.webp"
import Image from 'next/image'
import Staricon from "../../app/assets/icons/star.png"


const OfferCars = () => {

    const data = [
        {
            id: 1,
            name: 'Hyundai Accent Limited',
            img: 'https://pixydrops.com/remons/assets/img/car/popular-car-1.jpg'
        },
        {
            id: 2,
            name: 'Hyundai Accent Limited',
            img: 'https://pixydrops.com/remons/assets/img/car/popular-car-2.jpg'
        },
        {
            id: 3,
            name: 'Hyundai Accent Limited',
            img: 'https://pixydrops.com/remons/assets/img/car/popular-car-3.jpg'
        },

    ]
    return (
        <section className='w-full mt-[2rem] bg-[#EEF0F4] py-[5.5rem]'>
            <header className='text-center w-full'>
                <Image className='w-[60px] object-contain h-[10px] mx-auto mb-[12px]' src={SubIcon} alt="sub-icon" />
                <h6 className='text-[#ff3726] font-medium'>CHECKOUT OUR NEW CARS</h6>
                <h2 className='mt-[15px] mx-[auto] text-[50px] font-semibold text-[#0C142E] max-w-[580px] leading-[65px]'>Cars We&lsquo;re Offering For Rentals</h2>
            </header>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-[4rem]'>
                {
                    data.map((item) => (
                        <div key={item.id} className="car-card relative w-full  max-w-[400px] rounded-xl bg-white  shadow-lg overflow-hidden  transition duration-500  hover:shadow-2xl " >
                            <div className=' max-w-[400px] w-full '>
                                <Image src={item.img} alt={item.name} className="car-image w-full transition-transform duration-300 transform  object-cover h-[266px] " width={400} height={266} />
                            </div>
                            <div className='py-[35px] px-[25px] relative'>
                                <button className='py-[8px] px-[14px] rounded-[10px] bg-[#005cb5] text-[14px] text-white absolute top-[-20px] right-[25px]'>2024 Model</button>
                                <div className='flex items-center gap-[5px]'>
                                    <Image src={Staricon} alt="star-icon" className='w-[16px] h-[15px]' />
                                    <Image src={Staricon} alt="star-icon" className='w-[16px] h-[15px]' />
                                    <Image src={Staricon} alt="star-icon" className='w-[16px] h-[15px]' />
                                    <Image src={Staricon} alt="star-icon" className='w-[16px] h-[15px]' />
                                    <Image src={Staricon} alt="star-icon" className='w-[16px] h-[15px]' />
                                </div>
                                <h4 className='text-[#0c142e] text-[20px] font-semibold mt-[15px]'>{item.name}</h4>
                                <div className='mt-[5px]'>
                                    <strong className='text-[#005cb5] text-[14px] font-semibold'>$70.00 </strong>
                                    <span className='text-[#77797E] text-[14px] font-semibold'> / Day</span>
                                </div>
                                <div className='my-[18px] py-[18px] border-t border-gray-300'>
                                    <ul className='grid grid-cols-2 gap-x-[20px] '>
                                        <li className='flex items-center gap-[5px] mb-[8px] text-[#77797E]'>
                                            <Image src={"https://pixydrops.com/remons/assets/img/car/seat.svg"} alt="seat-icon" className='w-[16px] h-[15px]' width={16} height={15} />
                                            6 Seats
                                        </li>
                                        <li className='flex items-center gap-[5px] mb-[8px] text-[#77797E]'>
                                            <Image src={"https://pixydrops.com/remons/assets/img/car/seat.svg"} alt="seat-icon" className='w-[16px] h-[15px]' width={16} height={15} />
                                            6 Seats
                                        </li>
                                        <li className='flex items-center gap-[5px] mb-[8px] text-[#77797E]'>
                                            <Image src={"https://pixydrops.com/remons/assets/img/car/seat.svg"} alt="seat-icon" className='w-[16px] h-[15px]' width={16} height={15} />
                                            6 Seats
                                        </li>
                                        <li className='flex items-center gap-[5px] mb-[8px] text-[#77797E]'>
                                            <Image src={"https://pixydrops.com/remons/assets/img/car/seat.svg"} alt="seat-icon" className='w-[16px] h-[15px]' width={16} height={15} />
                                            6 Seats
                                        </li>
                                    </ul>
                                </div>
                                <button className="relative group bg-[#F3F7FB] inline-flex items-center justify-center px-[2px] py-[8px] overflow-hidden text-lg font-medium text-[#77797E] w-full text-center  rounded-lg hover:text-white group hover:bg-gray-50">
                                    <span className="absolute left-0 block w-full h-0 transition-all bg-[#ff3726] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                    <span className="flex items-center justify-between relative transition-all duration-300 group-hover:-translate-x-3">
                                        <span className="text-base font-semibold text-[15px]">Button Text</span>
                                        <span className="flex items-center justify-center w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                            <svg className="w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                            </svg>
                                        </span>
                                    </span>
                                </button>


                            </div>
                        </div>
                    ))}
            </div>
        </section>
    )
}

export default OfferCars

