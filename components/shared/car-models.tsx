import React from 'react'
import { Button } from '../ui/button'

const data = [
    {
        id: 1,
        name: 'Sedan',
        img: 'https://pixydrops.com/remons/assets/img/car/popular-car-1.jpg'
    },
    {
        id: 2,
        name: 'Sedan',
        img: 'https://pixydrops.com/remons/assets/img/car/popular-car-2.jpg'
    },
    {
        id: 3,
        name: 'Sedan',
        img: 'https://pixydrops.com/remons/assets/img/car/popular-car-3.jpg'
    },
    {
        id: 4,
        name: 'Sedan',
        img: 'https://pixydrops.com/remons/assets/img/car/popular-car-4.jpg'
    },
    {
        id: 5,
        name: 'Sedan',
        img: 'https://pixydrops.com/remons/assets/img/car/popular-car-5.jpg'
    },
    {
        id: 6,
        name: 'Sedan',
        img: 'https://pixydrops.com/remons/assets/img/car/popular-car-6.jpg'
    },
]
const CarModels = () => {
    return (
        <div className='container py-10'>
            <div className='flex flex-col items-center gap-3'>
                <img src="https://pixydrops.com/remons/assets/img/sub-icon.png" alt="" />
                <h3 className='text-xl uppercase'>select car types</h3>
                <h1 className='text-4xl mb-4'>We’re Offering Popular
                    Cars Models
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500  hover:shadow-2xl flex items-center"
                    >
                        <div className="p-4 w-[140px] drop-shadow-lg">
                            <h3 className="text-xl font-bold">{item.name}</h3>
                            <p className="text-gray-600">Available for Rent</p>
                        </div>
                        <img
                            src={item.img}
                            alt={item.name}
                            className="!w-[290px] h-48 object-cover"
                        />
                        {/* Overlay effect when hovering */}
                        {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-30 transition duration-500"></div> */}
                    </div>
                ))}
            </div>
            <div className="w-[630px] mx-auto flex items-center justify-between gap-4 bg-red-500 text-center mt-10 text-white px-6 py-3 rounded-md">
                <p className="font-bold">
                    Car Rental Services Specifically For Our Customers
                </p>
                <Button variant={'secondary'}>Find A Car</Button>
            </div>
        </div>
    )
}

export default CarModels