import React from 'react'
import Profile from './Profile'
import Search from '../assets/Search.png';
import DownArrow from '../assets/DownArrow.png';
import Image from 'next/image';
import { profileData } from '../data';

const Main = () => {
    return (
        <section
            className=' flex items-center justify-center mt-[120px]'
        >
            <div className='container mx-auto h-full'>
                <div className='flex items-center justify-center h-full '>
                    <div className='flex flex-col items-center justify-center '>
                        <p className='text-3xl text-black font-bold  '>
                            <span className='text-secondary'>Free</span> Instagram Engagement Rate Calculator
                        </p>
                        <p className='text-md text-gray-300 mb-[22px]'>
                            Try our free engagement Rate Calculator to find out the engagement of any instagram account
                        </p>
                        <div className='flex items-center'>
                            <div className=" flex justify-end items-center relative">
                                <Image src={Search}   className="pointer-events-none  w-6 object-contain absolute top-1/2 transform -translate-y-1/2 left-8" alt="Search Icon" />
                                <input type='text' className='input' />
                                <Image src={DownArrow}   className="pointer-events-none  w-5 object-contain absolute top-1/2 transform -translate-y-1/2 right-6" alt="Arrow" />
                            </div>
                            <button className='btn btn-md  hover:bg-secondary-hover md:btn-lg transition-all'>
                                Check
                            </button>
                        </div>
                        <div className='flex flex-row  justify-center items-center my-5 space-x-5'>
                            {/* <Profile />
                            <Profile /> */}
                            {profileData.map((data,index)=>{
                                return <Profile {...data} key={index}  />
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Main