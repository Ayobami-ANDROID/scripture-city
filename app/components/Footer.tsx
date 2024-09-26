import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='bg-[rgba(75,24,112,1)] mt-24 '>
      <div className='px-20 py-8 flex flex-col'>
        <div className='grid lg:grid-cols-4 grid-cols-1 gap-6'>
          <div>
            <Image src="/assests/logo.png" alt="logo" width={152} height={100} ></Image>
          </div>
          <div className='flex flex-col lg:gap-6 gap-3 font-manrope font-[500] text-[16px] text-[#ffffff]'>
            <Link href="/">About Scripture City</Link>
            <Link href="/">Statement of Faith</Link>
            <Link href="/">LiveStream</Link>
            <Link href="/">Sermons</Link>
          </div>

          <div className='flex flex-col lg:gap-6 gap-3'>
            <div className='flex flex-col lg:gap-3 gap-2'>
              <h4 className='font-manrope font-[600] text-[16px] text-[#ffffff]'>Address</h4>
              <p className='font-[400] text-[#ffffff] text-[14px] font-manrope'>Hatlab Place 36 Sokode Cres Wuse Zone 5, beside johnwood Hotel, Abuja</p>
            </div>
            <div className='flex flex-col lg:gap-3 gap-2'>
              <h4 className='font-manrope font-[600] text-[16px] text-[#ffffff]'>Contact</h4>
              <p className='font-[400] text-[#ffffff] text-[14px] font-manrope'>+2349056842408</p>
            </div>
            <div className='flex flex-col lg:gap-3 gap-2'>
              <h4 className='font-manrope font-[600] text-[16px] text-[#ffffff]'>Email</h4>
              <p className='font-[400] text-[#ffffff] text-[14px] font-manrope'>scripturecitychurch@gmail.com</p>
            </div>

            <div className='flex'>
              <a href="https://web.facebook.com/scripturecitychurch" className='text-white mr-4 cursor-pointer' > <FaFacebook size={26}/></a>
              <a href="https://www.instagram.com/scripturecitychurch/" className='text-white'> <FaInstagram size={26}/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer