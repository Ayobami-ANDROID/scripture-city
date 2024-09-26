import React from 'react'
import Image from 'next/image'
import Header from './Navbar'

const Hero = () => {
    return (
        <div className='relative'>
            <div className=" bg-[url('/assests/background.png')] ">
                <div className=" bg-[rgba(92,29,136)]/[0.972]  py-2">
                    <div className='flex items-center mb-24 px-6'>
                        <Image src="/assests/logo.png" alt="logo" width={152} height={100} ></Image>
                        <div className='flex justify-center w-full'>

                            <Header />


                        </div>
                    </div>
                    <div className='flex flex-col items-center'>

                        <div className='flex flex-col  w-[85%] items-center'>
                            <h1 className='w-[70%] text-[rgba(255,255,255,1)] font-manrope text-[40px] text-center font-[600]'>Community of Believers who are walking in God's plans and purposes for their lives.</h1>
                        </div>

                        <div className='flex items-center mt-6'>
                            <button className='text-[rgba(255,255,255,1)] border-[1.6px] text-[16px] font-[600] border-[#ffffff] rounded-[8px] py-[12px] px-[16px] mr-4'>Watch Latest Sermon</button>
                            <button className='bg-[rgba(255,255,255,1)] rounded-[8px] py-[12px] px-[16px] text-[rgba(92,29,136,1)]'>About Scripture City</button>
                        </div>
                    </div>
                    <div className=" mt-6 overflow-hidden">
                        <div className='h-1/2 '>
                            <img src="/assests/Line.png" className='w-full h-[150px]'></img>
                        </div>
                    </div>


                </div>



            </div>

            <div className="h-[180px] w-[220px] border-[4px] border-[#fff] rounded-[8px] absolute top-[80%] left-[10%] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rotate-[5.86deg]">
                <img src='/assests/pastor.jpg' className='h-full w-full' ></img>
            </div>
            <div className="h-[180px] w-[220px] border-[4px] border-[#fff] rounded-[8px] absolute top-[80%] left-[40%] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rotate-[-4.26deg]" >
                <img src='/assests/pastorTee.jpg' className="h-full w-full"></img>
            </div>
            <div className="h-[180px] w-[220px] border-[4px] border-[#fff] rounded-[8px] absolute top-[80%] right-[10%] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rotate-[4.37deg]">
                <img src='/assests/broseyi.jpg' className="h-full w-full"></img>
            </div>
        </div>
    )
}

export default Hero