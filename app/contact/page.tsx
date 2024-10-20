"use client";
import PageHero from '@/components/shared/page-hero';
import Image from 'next/image';
import React from "react";
import LogoIcon from "../assets/images/sub-icon.webp"
import EmailIcon from "../assets/icons/email.webp"
import LocationIcon from "../assets/icons/location.webp"
import QuestionIcon from "../assets/icons/question.webp"
import Navbar from '@/components/shared/navbar';
import Iframe from 'react-iframe'
import ContactAside from "../assets/images/contactAside.webp"
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, } from "react-icons/fa";
import Footer from '@/components/shared/footer';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <PageHero title="Contact" />

            {/* Main Section */}
            <div className='relative'>

                <section style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }} className="container  py-[30px] rounded-[10px] mt-[50px] max-w-[1170px] w-full flex flex-col md:flex-row gap-8 ">
                    {/* Form Section */}
                    <div className="p-6 rounded-[10px] max-w-[780px] w-full  ">
                        <div className='flex items-start flex-col w-full  justify-start text-left'>
                            <Image src={LogoIcon} alt="logo" className="w-full h-auto object-contain max-w-[60px] mb-[12px]" />
                            <p className='text-[#ff3726] font-[600] text-[18px] mt-[5px]'>CONTACT US</p>
                        </div>

                        <h2 className='text-[43px] tracking-[2px] mt-[.8rem] mb-[1.2rem] font-[700] text-[#0C142E]'>Drop Us a Message</h2>

                        {/* Input Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <input type="text" className="w-full h-[55px] p-3 rounded-md bg-[#F3F7FB] text-[16px] text-[#77797e] font-semibold" placeholder="Your Name" />
                            </div>
                            <div>
                                <input type="email" className="w-full h-[55px] p-3 rounded-md bg-[#F3F7FB] text-[16px] text-[#77797e] font-semibold" placeholder="Your Email" />
                            </div>
                            <div> <input type="text" className="w-full h-[55px] p-3 rounded-md bg-[#F3F7FB] text-[16px] text-[#77797e] font-semibold" placeholder="Subject" />
                            </div>
                            <div><input type="text" className="w-full h-[55px] p-3 rounded-md bg-[#F3F7FB] text-[16px] text-[#77797e] font-semibold" placeholder="Phone Number" />
                            </div>
                        </div>

                        {/* Text Area */}
                        <div className="mt-4">
                            <textarea rows={5} className="w-full p-3 rounded-md bg-[#F3F7FB] text-[16px] text-[#77797e] font-semibold" placeholder="Write a Comment" />
                        </div>

                        {/* Submit Button */}
                        <div className="mt-6">
                            <button className="bg-[#f53d2d] text-white font-semibold text-[16px] py-3 px-6 rounded hover:bg-[#ff473f] transition-all">
                                Send A Message
                            </button>
                        </div>
                    </div>

                    {/* Sidebar Section */}
                    <div className="p-6 w-full max-w-[300px] ">
                        <Image src={ContactAside} alt="contact aside" className="w-full max-w-[235px] h-[98px] object-contain" />
                        <div className="flex flex-col gap-4 mt-[2rem]">
                            <div className="flex items-center gap-4 border-b border-[#E8E8E8] pb-4">
                                <Image src={QuestionIcon} alt="phone icon" />
                                <p className="text-[#77797e] text-[16px] font-[500]">
                                    Have Question? <br />
                                    <span className="text-[#0c142e] text-[17px] font-semibold">+92 (307) 68 - 06860</span>
                                </p>
                            </div>

                            <div className="flex items-center gap-4 border-b border-[#E8E8E8] pb-4">
                                <Image src={EmailIcon} alt="mail icon" />
                                <p className="text-[#77797e] text-[16px] font-[500]">
                                    Write Email <br />
                                    <span className="text-[#0c142e] text-[17px] font-semibold">Info@Example.Com</span>
                                </p>
                            </div>

                            <div className="flex items-center gap-4 border-b border-[#E8E8E8] pb-4">
                                <Image src={LocationIcon} alt="location icon" />
                                <p className="text-[#77797e] text-[16px] font-[500]">
                                    Visit Office <br />
                                    <span className="text-[#0c142e] text-[17px] font-semibold">24 Valentin, Street Road, New York</span>
                                </p>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4 justify-center mt-[2rem] ">
                            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube].map(
                                (Icon, index) => (
                                    <button
                                        key={index}
                                        className="text-[18px]  p-[12px] bg-[#F3F7FB] rounded-[50%] text-blue-950 hover:bg-red-600 hover:text-white transition-all"
                                    >
                                        <Icon />
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                </section>
                <Iframe
                    url="https://maps.google.com/maps?q=Tashkent%20Dates%10Products&amp;t=&amp;z=12&amp;output=embed"
                    allowFullScreen
                    frameBorder={"0"}
                    id='location'
                    className='w-full h-[420px] mt-[2rem] mb-[.6rem]'
                />
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
