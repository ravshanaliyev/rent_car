"use client";
import React, { useEffect, useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { Calendar as CalendarIcon } from "lucide-react";
import { Label } from "../../../components/ui/label";
import { Button } from "../../../components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover";
import Image from "next/image";
import CarDetailImage from "../../assets/images/car-details.webp"
import Star from "../../assets/icons/star.png"
import FeatureIcon from "../../assets/images/feature-icon.webp"
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import PageHero from "@/components/shared/page-hero";


const CarDetail = ({ params }: { params: { id: string } }) => {
    const [date, setDate] = React.useState<Date>();
    const [pickupDate, setPickupDate] = React.useState<any>();
    const [dropoffDate, setDropoffDate] = React.useState<any>();

    const [SingleData, setSingleData] = useState<any>();

    console.log(SingleData);
    

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

    useEffect(() => {
            const SingleDetail = data.filter((item: any) => item.id == params.id);
            setSingleData(SingleDetail[0]);
    }, [params.id])

    useEffect(() => {
        console.log(params.id);
        setPickupDate(new Date());
    }, []);

    

    const KeyFeatures = [
        {
            type: "Body",
            feature: "SEDAN",
        },
        {
            type: "Mileage:",
            feature: "70.000 (MI)",
        },
        {
            type: "Year:",
            feature: "2024",
        },
        {
            type: "Engine:",
            feature: "2500 CC",
        },
        {
            type: "Passengers:",
            feature: "6 SEATS",
        },
        {
            type: "Gear:",
            feature: "AUTOMATIC",
        },

        {
            type: "Gear:",
            feature: "AUTOMATIC",
        },

        {
            type: "Fuel:",
            feature: "PETROL",
        },
    ]

    const days = [
        { day: 'Monday', price: '$70.00' },
        { day: 'Tuesday', price: '$70.00' },
        { day: 'Wednesday', price: '$70.00' },
        { day: 'Thursday', price: '$70.00' },
        { day: 'Friday', price: '$70.00' },
        { day: 'Saturday', price: '$70.00' },
        { day: 'Sunday', price: '$70.00' },
    ];


    return (
        <>
        <Navbar/>
        <PageHero title={"Single Car"}/>
        <div className='py-10  container'>

            <div className='flex items-start justify-start gap-[2rem] mt-[2.5rem]  900px:flex-col 900px:max-w-full '>
                <div className='max-w-[770px] w-full rounded-[10px] border-[#E8E8E8] border-[1px]'>
                    <Image className='w-full  h-[507px] custom-rounded object-cover' src={SingleData?.img ? SingleData?.img : "https://media.naijahouses.com/banner_image/no-preview.jpg"} alt="car detail" width={770} height={507} />
                    <div className='mt-[1.8rem] p-[1rem]'>
                        <div className='flex gap-[15px]'>
                            <div className='flex items-center gap-[4px]'>
                                <Image width={15} height={14} src={Star} alt="star" />
                                <Image width={15} height={14} src={Star} alt="star" />
                                <Image width={15} height={14} src={Star} alt="star" />
                                <Image width={15} height={14} src={Star} alt="star" />
                                <Image width={15} height={14} src={Star} alt="star" />
                            </div>
                            <span className='text-[#0C142E] text-[15px] font-[500]'>2 Reviews</span>
                        </div>
                        <h4 className='font-[600] text-[#0c142e] text-[26px] mt-[1rem]'>Hyundai Accent Limited</h4>
                        <h5 className="text-[#005cb5] text-[17px] font-[700] mt-[1rem] pb-5 border-b border-gray-300">  $70.00 <span className="text-[#77797e] font-[400]">/ day</span> </h5>
                        <p className='text-[#77797e] text-[16px] font-[500] leading-[28px] my-[24px]'>To deliver on the promise of technology and human We help our clients become sions of themselves. Lorem Ipsum is simply dummy text of the printing and typesetting industry. orem ipsum has been the industry’s standard dummy text ever since the 1500s.</p>
                        <div className='pt-5 border-t border-gray-300'>
                            <h4>Key Features</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                                {
                                    KeyFeatures.map((item, index) => (
                                        <div key={index} className="flex items-center gap-[1rem]">
                                            <div className="flex items-center justify-center rounded-[50%] p-[8px] bg-[#ECF0F4] w-[40px] h-[40px]">
                                                <Image className="object-contain w-full h-full" src={FeatureIcon} alt="Key-Feature" />
                                            </div>
                                            <div className="flex flex-col">
                                                <strong className="text-[14px] text-[#0c142e] font-[600]">{item.type}</strong>
                                                <span className="text-[16px] text-[#77797e] font-[500]">{item.feature}</span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>

                        <div className="mt-[2.5rem] pt-5 border-t border-gray-300">
                            <h2 className="text-lg font-bold ">Table Price <span className="text-gray-500">(by day of the week)</span></h2>
                            <div className="flex flex-col mt-[2rem]">
                                {
                                    days.map((item, index) => (
                                        <div key={index} className={`flex justify-between items-center p-4 ${index % 2 === 0 ? 'bg-[#F3F7FB]' : 'bg-white'} rounded-lg mb-2`}
                                        >
                                            <span className="text-gray-700 font-medium">{item.day}</span>
                                            <span className="text-gray-700 font-medium">{item.price}</span>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full max-w-[400px] rounded-[10px] overflow-hidden 900px'>
                    <div className='bg-[#005CB5] p-[1.8rem]'>
                        <h3 className='text-white text-[20px] font-[600]'>Booking Form</h3>
                    </div>
                    <div className='p-[30px] w-full h-full bg-[#EBEFF3]'>
                        <div className="grid w-full  items-center gap-4">
                            <Label htmlFor="location" className="text-[16px] font-[600]">Pick-up Location</Label>
                            <Select>
                                <SelectTrigger className="w-full !h-[55px] p-4 bg-white text-[16px] font-[600] text-[#77797E]">
                                    <SelectValue placeholder="Select a location" />
                                </SelectTrigger>
                                <SelectContent id="location" className="max-h-[200px]">
                                    <SelectGroup>
                                        <SelectItem value="apple">Apple</SelectItem>
                                        <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes">Grapes</SelectItem>
                                        <SelectItem value="pineapple">Pineapple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid w-full  items-center gap-4 mt-[1.4rem]">
                            <Label htmlFor="location" className="text-[16px] font-[600]">Pick-Up Date</Label>
                            <Popover>
                                <PopoverTrigger asChild className="text-[16px] font-[600] text-[#77797E]">
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-full h-[55px] justify-start text-left font-normal bg-white",
                                            !date && "text-muted-foreground"
                                        )}
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="grid w-full  items-center gap-4 mt-[1.4rem]">
                            <Label htmlFor="location" className="text-[16px] font-[600]">Drop-off Date</Label>
                            <Popover>
                                <PopoverTrigger asChild className="text-[16px] font-[600] text-[#77797E]">
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-full h-[55px] justify-start text-left font-normal bg-white",
                                            !date && "text-muted-foreground"
                                        )}
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4 bg-white" />
                                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                                    </Button>
                                </PopoverTrigger >
                                <PopoverContent className="w-auto p-0 bg-white">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        initialFocus
                                        className="bg-white"
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>

                        <div className="w-full mt-[1.4rem]">
                            <h4 className="text-[#0c142e] text-[16px] font-[500] mb-4">Resources</h4>
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <div className="w-[26px] h-[26px] bg-[#005cb5] rounded-full mr-3"></div>
                                    <span className="text-[#77797e] font-medium text-[16px]">Driver</span>
                                </div>
                                <span className="text-[#77797e] font-medium text-[16px]">$10.00 / Day</span>
                            </div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center">
                                    <div className="w-[26px] h-[26px] bg-[#005cb5] rounded-full mr-3"></div>
                                    <span className="text-[#77797e] font-medium text-[16px]">Baby Seat</span>
                                </div>
                                <span className="text-[#77797e] font-medium text-[16px]">$30.00 / Total</span>
                            </div>
                            <button className="bg-[#f53d2d] text-white font-semibold text-[16px] py-[20px] px-[40px] rounded-[10px] hover:bg-[#ff473f] transition-all">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Request FORM */}
            <div className="p-6 mt-[30px] rounded-[10px] max-w-[770px] w-full border-[#E8E8E8] border-[1px]">
                <h2 className="text-[#0c142e] text-[20px] font-bold mb-2">Request For Booking</h2>
                <p className="text-[#77797e] mb-6">Send your requirement to us. We will check email and contact you soon.</p>

                {/* Input Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1 text-[#0c142e]">Your Name</label>
                        <input type="text" className="w-full h-[55px] p-3 rounded-md bg-[#F3F7FB] text-[16px] text-[#77797e] font-semibold" placeholder="Your Name" />
                    </div>
                    <div>
                        <label className="block mb-1 text-[#0c142e]">Email</label>
                        <input type="email" className="w-full h-[55px] p-3 rounded-md bg-[#F3F7FB] text-[16px] text-[#77797e] font-semibold" placeholder="Email" />
                    </div>
                    <div>
                        <label className="block mb-1 text-[#0c142e]">Phone Number</label>
                        <input type="text" className="w-full h-[55px] p-3 rounded-md bg-[#F3F7FB] text-[16px] text-[#77797e] font-semibold" placeholder="Phone Number" />
                    </div>
                    <div>
                        <label className="block mb-1 text-[#0c142e]">Address</label>
                        <input type="text" className="w-full h-[55px] p-3 rounded-md bg-[#F3F7FB] text-[16px] text-[#77797e] font-semibold" placeholder="Address" />
                    </div>
                </div>

                {/* Select and Date Pickers */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    {/* Pick-Up Location */}
                    <div className="grid w-full items-center gap-4">
                        <label className="text-[16px] font-[600]">Pick-up Location</label>
                        <Select>
                            <SelectTrigger className="w-full h-[55px] p-4 bg-[#F3F7FB] text-[16px] font-[600] text-[#77797E]">
                                <SelectValue placeholder="Select a location" />
                            </SelectTrigger>
                            <SelectContent className="max-h-[200px]">
                                <SelectGroup>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">Banana</SelectItem>
                                    <SelectItem value="blueberry">Blueberry</SelectItem>
                                    <SelectItem value="grapes">Grapes</SelectItem>
                                    <SelectItem value="pineapple">Pineapple</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Pick-Up Date */}
                    <div className="grid w-full items-center gap-4">
                        <label className="text-[16px] font-[600]">Pick-Up Date</label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <button className="w-full h-[55px] justify-start text-left font-normal bg-[#F3F7FB] text-[#77797E] p-4 rounded-md flex items-center">
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {pickupDate ? format(pickupDate, "PPP") : <span>Check in</span>}
                                </button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 bg-[#F3F7FB]">
                                <Calendar
                                    mode="single"
                                    
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    {/* Drop-Off Date */}
                    <div className="grid w-full items-center gap-4">
                        <label className="text-[16px] font-[600]">Drop-off Date</label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <button className="w-full h-[55px] justify-start text-left font-normal bg-[#F3F7FB] text-[#77797E] p-4 rounded-md flex items-center">
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {dropoffDate ? format(dropoffDate, "PPP") : <span>Check in</span>}
                                </button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 bg-[#F3F7FB]">
                                <Calendar
                                    mode="single"
                                    selected={dropoffDate}
                                    onSelect={setDropoffDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>

                {/* Resources */}
                <div className="mt-6 flex flex-col space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input type="radio" id="driver" name="resource" className="mr-2" />
                            <label htmlFor="driver" className="text-[#77797E] text-[16px] font-semibold">Driver</label>
                        </div>
                        <span className="text-[#77797E] text-[16px] font-semibold">$10.00 / Day</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input type="radio" id="babySeat" name="resource" className="mr-2" />
                            <label htmlFor="babySeat" className="text-[#77797E] text-[16px] font-semibold">Baby Seat</label>
                        </div>
                        <span className="text-[#77797E] text-[16px] font-semibold">$30.00 / Total</span>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                    <button className="bg-[#f53d2d] text-white font-semibold text-[16px] py-3 px-6 rounded hover:bg-[#ff473f] transition-all">
                        Send Request
                    </button>
                </div>
            </div>
        </div>
        <Footer/>
        </>

    )
}

export default CarDetail
