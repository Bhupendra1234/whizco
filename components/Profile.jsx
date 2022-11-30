import Image from 'next/image';
import React from 'react';
import Ellipse1 from '../assets/Ellipse1.png';
import Ellipse2 from '../assets/Ellipse2.png';
import Ellipse3 from '../assets/Ellipse3.png'
import BackGroundEffect from '../assets/backgroundEffect.png';
import Instagram from '../assets/Instagram.png';
import Groups from '../assets/groups.png';
import Heart from '../assets/favorite.png';
import Chat from '../assets/chat.png';
import Ractangle from '../assets/Rectangle.svg'
import BgIllustration from '../assets/BGIllustration.png'
import Arrow from '../assets/arrow.png';
import Linkedin from '../assets/LinkedIn.png';
import Twitter from '../assets/Twitter.png';
const Profile = (props) => {
    return (
        <div className='h-[550px] border w-full' >
            <div className="relative">
                <Image src={Ractangle} height={300} alt="Ractangle" />
                <div className={`${props.quality.includes('Good')?'bg-green-300':'bg-[#FFCA7A]'} absolute top-0 right-0 border py-2 px-3 mt-1 rounded-bl-2xl `}>
                    <p className={`${props.quality.includes('Good')?'text-[#128807]':'text-[#D16900]'} flex`}>  <Image src={props.smile} className={`object-contain mr-2 w-3`} alt='Smile'  />{props.quality}</p>
                </div>
                <div className='p-2 absolute top-10 left-14 '>
                    <div className='flex items-center justify-center relative'>
                        <Image src={Ellipse1} height={100} width={100} alt="image" className="absolute" />
                        <Image src={Ellipse2} height={110} width={110} alt="image"  className="absolute" />
                        <Image src={Ellipse3} height={120} width={120} alt="image"  className="absolute" />
                        <Image src={BackGroundEffect} height={130} width={130} alt="image"  />
                    </div>
                    <div className='flex justify-center items-center space-x-2 my-4'>
                        <Image src={Instagram} height={10} width={10} className="object-contain" alt="instagram" />
                        <p className='text-md'>{props.name}</p>
                    </div>
                    <div className='flex justify-between items-center space-x-6'>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='flex justify-between items-center space-x-1'>
                                <Image src={Groups} className="object-contain" alt="image"  />
                                <p className='font-bold text-sm'>1.1 M</p>
                            </div>
                            <p className='text-gray-500 text-xs'>Followers</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='flex justify-between items-center space-x-1'>
                                <Image src={Heart} className="object-contain" alt="image"  />
                                <p className='font-bold text-sm'>1.1 M</p>
                            </div>
                            <p className='text-gray-500 text-xs'>Likes</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='flex justify-between items-center space-x-1'>
                                <Image src={Chat} className="object-contain" alt="image"  />
                                <p className='font-bold text-sm'>1.1 M</p>
                            </div>
                            <p className='text-gray-500 text-xs'>Comments</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center mt-3 relative'>
                <p className='font-bold text-md'>Engagment Rate</p>
                <div className='flex flex-col absolute top-0 right-1 space-y-2 items-center' >
                    <Image src={Twitter} className="object-contain" alt="image"  />
                    <Image src={Linkedin} className="object-contain" alt="image"  />
                </div>
                <div className='relative mt-16'>
                    <Image src={BgIllustration} className="object-contain" alt="image"  />
                    <Image src={props.rateMeter} className=" absolute bottom-[-3px] right-20 " alt="image"  />
                </div>
                <p className='text-3xl font-bold my-2'>{props.speed}</p>
                <p className='flex border py-1 px-3 text-sm border-secondary rounded-full'>to get full report! <span className='flex ml-2 text-secondary' >Login  <Image src={Arrow} color={'secondary'} className="object-contain ml-2" alt='leftArrow' /></span></p>
            </div>
        </div>
    )
}

export default Profile