import React from 'react'

const AboutChurch = () => {
  return (
    <div className='grid lg:grid-cols-2 grid-col-2 mt-24  lg:px-20 px-16 mb-4  gap-8'>
        <div className='flex flex-col justify-center gap-4'>
            <h1 className='text-[rgba(92,29,136,1)] font-manrope font-[600] lg:text-[34px] text-[30px] '>We are a diverse community united by our faith in Christ.</h1>
            <p className='lg:text-[20px] text-[16px] text-[rgba(51,51,51,1)] font-[200] font-monrope'>Our mission is to grow together in love, faith, and service. Our mission is to grow together in love, faith, and service. Our mission is to grow together in love, faith, and service.</p>
            <div className='flex lg:justify-start justify-center'>
            <button className='bg-[rgba(92,29,136,1)] text-[#fff] py-[12px] px-[16px] rounded-[8px] font-manrope text-[16px] font-[600]'>Statement of Faith</button>
            </div>
            
        </div>
        <div className='h-full border-[4px] border-[#ffffff] shadow-[2px_2px_9.3px_0px_rgba(0,0,0,0.25)] rounded-[8px]  '>
            <img src="/assests/revEmeka.jpg" className='w-full lg:h-[464px] h-[300px]'></img>
        </div>
    </div>
  )
}

export default AboutChurch