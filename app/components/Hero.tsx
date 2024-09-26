import React from 'react'
import Image from 'next/image'
import Header from './Navbar'

const Hero = () => {
    return (
        <div className=" bg-[url('/assests/background.png')] ">
            <div className=" bg-[rgba(92,29,136)]/[0.972]  py-2">
                <div className='flex items-center mb-20 px-6'>
                    <Image src="/assests/logo.png" alt="logo" width={152} height={100} ></Image>
                    <div className='flex justify-center w-full'>

                        <Header />


                    </div>
                </div>
                <div className='flex flex-col items-center'>

                    <div className='flex flex-col w-full items-center'>
                        <h1 className='w-[60%] text-[rgba(255,255,255,1)] font-manrope text-[45px] text-center font-[200]'>Community of Believers who are walking in God's plans and purposes for their lives.</h1>
                    </div>
                     
                     <div className='flex items-center mt-6'>
                        <button className='text-[rgba(255,255,255,1)] border-[1.6px] text-[16px] font-[600] border-[#ffffff] rounded-[8px] py-[12px] px-[16px] mr-4'>Watch Latest Sermon</button>
                        <button className='bg-[rgba(255,255,255,1)] rounded-[8px] py-[12px] px-[16px] text-[rgba(92,29,136,1)]'>About Scripture City</button>
                     </div>
                </div>
            </div>

        </div>
    )
}

export default Hero