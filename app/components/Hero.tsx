import React from 'react'
import Image from 'next/image'
import Header from './Navbar'

const Hero = () => {
    return (
        <div className='relative'>
            <div className=" bg-[url('/assests/background.png')] ">
                <div className=" bg-[rgba(92,29,136)]/[0.972]  py-2">
                    <div className='flex items-center lg:mb-24 mb-16 px-6'>
                        <Image src="/assests/logo.png" alt="logo" width={152} height={100} ></Image>
                        <div className='flex justify-center w-full'>

                            <Header />


                        </div>

                        <div className='lg:hidden block '>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.6 19.7H2.40002M21.6 12.5H2.40002M21.6 5.30005H2.40002" stroke="white" stroke-width="2" stroke-linecap="round" />
                            </svg>

                        </div>
                    </div>
                    <div className='flex flex-col items-center'>

                        <div className='flex flex-col  lg:w-[85%] w-[90%] items-center'>
                            <h1 className='lg:w-[70%] w-[80%] text-[rgba(255,255,255,1)] font-manrope lg:text-[40px] text-[28px] text-center font-[600]'>Community of Believers who are walking in God's plans and purposes for their lives.</h1>
                        </div>

                        <div className='flex lg:flex-row flex-col items-center mt-6 gap-4'>
                            <button className='text-[rgba(255,255,255,1)] border-[1.6px] text-[16px] font-[600] border-[#ffffff] rounded-[8px] py-[12px] px-[16px] lg:mr-4 mr-0 lg:w-auto w-[200px]'>Watch Latest Sermon</button>
                            <button className='bg-[rgba(255,255,255,1)] rounded-[8px] py-[12px] px-[16px] text-[rgba(92,29,136,1)] lg:w-auto w-[200px]'>About Scripture City</button>
                        </div>
                    </div>
                    <div className=" mt-6 overflow-hidden">
                        <div className='h-1/2 '>
                            <img src="/assests/Line.png" className='w-full h-[150px]'></img>
                        </div>
                    </div>


                </div>



            </div>

            <div className="h-[180px] w-[220px] border-[4px] border-[#fff] rounded-[8px] absolute top-[80%] left-[10%] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rotate-[5.86deg] lg:block hidden">
                <img src='/assests/pastor.jpg' className='h-full w-full' ></img>
            </div>
            <div className="h-[180px] w-[220px] border-[4px] border-[#fff] rounded-[8px] absolute lg:top-[80%] top-[75%] left-[40%] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rotate-[-4.26deg]" >
                <img src='/assests/pastorTee.jpg' className="h-full w-full"></img>
            </div>
            <div className="h-[180px] w-[220px] border-[4px] border-[#fff] rounded-[8px] absolute top-[80%] right-[10%] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rotate-[4.37deg] lg:block hidden">
                <img src='/assests/broseyi.jpg' className="h-full w-full"></img>
            </div>

           
        </div>
    )
}

export default Hero