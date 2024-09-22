import React from 'react'
import Logo from '@/assets/black-logo.svg'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'
import { PhoneCall } from 'lucide-react'
const Navbar = () => {
    return (
        <nav className='bg-white border-b-4 border-b-[#ff3726]'>
            <div className='container h-[88px] flex items-center justify-between'>
                <Link href={'/'}>
                    <Image src={Logo} alt="logo" />
                </Link>
                <ul className='flex items-center gap-6 text-base'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cars</li>
                    <li>Contact</li>
                </ul>
                <div className="flex items-center gap-3">
                    <Button size={'icon'} variant={'outline'} className='rounded-full p-2 h-10 w-10'><PhoneCall size={18} /></Button>
                    <div className='flex flex-col'>
                        <p className='text-sm font-medium text-gray-500'>Call anytime</p>
                        <p className='text-lg font-semibold'>+123 456 7890</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <Button size={'lg'} variant={'outline'}>Login</Button>
                    <Button size={'lg'}>Get Started</Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar