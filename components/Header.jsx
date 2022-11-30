import React from 'react';
import Logo from '../assets/Logo.svg';
import Image from 'next/image'
import User from '../assets/User.svg'
import Nav from './Nav';

const Header = () => {
    return (
        <header className='flex items-center fixed top-0 w-full h-20  z-10 bg-white shadow-md'>
            <div className='container mx-auto h-full flex items-center justify-between'>
                <a href='#'>
                    <Image src={Logo} alt="VLogo" width={150} height={150} />
                </a>
                <div className='flex justify-between items-center space-x-8'>
                    <div className='block'>
                        <Nav />
                    </div>
                    <div className='block'>
                        <Image src={User} alt="User" width={25} height={25} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header