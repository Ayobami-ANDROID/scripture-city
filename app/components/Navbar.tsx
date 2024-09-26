import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='lg:flex hidden justify-between items-center p-[15px] bg-[#D6A2FF33] rounded-[8px] max-w-[572px] text-[#FFFFFF] shadow-[2px_2px_20.6px_-16px_rgba(0,0,0,0.25)]'>
     <Link href="/" className='mr-4'>About The Church</Link>
     <Link href="/" className='mr-4'> Statement of Faith</Link>
     <Link href="/" className='mr-4'>LiveStream</Link>
     <Link href="/" className='mr-4'>Sermons</Link>
    </div>
  )
}

export default Header