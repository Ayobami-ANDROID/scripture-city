import React from 'react'

const Followp = () => {
  return (
    <div className="px-20 mt-24 relative ">
        <div className="bg-[url('/assests/pattern.png')] rounded-[15px] overflow-hidden">
            <div className='bg-[rgba(92,29,136)]/[0.972] pt-12  '>
              <div className='flex flex-col items-center gap-6'>
              <h1 className='font-manrope font-[600] lg:text-[36px] text-[28px] text-[#ffffff]' >We Would love to hear from you</h1>
                <p className='font-[400] lg:text-[20px] text-[15px] font-manrope text-[#ffffff]'>Join us physically or watch our Livestreams online</p>
                <div className='mb-[-55px] z-[1]'>
                  <button className='bg-[rgba(255,255,255,1)]    text-[rgba(92,29,136,1)] py-[12px] px-[24px] rounded-[8px] font-manrope text-[20px] font-[600]'>Join Us</button>
                </div>
              </div>

              <div className=" lg:mt-6 mt-2 lg:mb-0  overflow-hidden">
                        <div className='h-1/2 '>
                            <img src="/assests/Line.png" className='w-full h-[90px]'></img>
                        </div>
                    </div>
              
                
            </div>
        </div>
    </div>
  )
}

export default Followp