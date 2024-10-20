import React from 'react'
import Logo from '@/public/black-logo.svg'
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
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/contact" className="">Contact</a></li>
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