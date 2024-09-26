import React from 'react'

const ServiceTime = () => {
  return (
    <div className='lg:grid-cols-2 grid-cols-1 grid px-20 mt-24  gap-8'>
      <div className='flex flex-col gap-6'>
        <h1 className='font-manrope lg:text-[20px] text-[16px] font-[600] text-[rgba(51,51,51,1)]'>SERVICE TIMES</h1>
        <p className='font-manrope lg:text-[24px] text-[14px] font-[500] text-[rgba(0,0,0,1)]'>Join us for our weekly services and experience the love of Christ. We offer multiple services to fit your schedule.</p>
        <table>
          <thead className='text-left border-b-[2px] font-manrope font-[500] text-[16px]  border-[rgba(172,172,172,1)] text-[rgba(115,115,115,1)]'>
            <tr>
              <th className='p-4'>Service</th>
              <th className='p-4'>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b-[2px] border-[rgba(172,172,172,1)]'>
              <td className='p-4 font-manrope text-[20px] font-[500] text-[rgba(51,51,51,1)]'>Sunday Serice</td>
              <td className='p-4 font-onest text-[20px] font-[400] text-[rgba(51,51,51,1)]'>9.00am</td>
            </tr>
            <tr className='border-b-[2px] border-[rgba(172,172,172,1)]'>
              <td className='p-4 font-manrope text-[20px] font-[500] text-[rgba(51,51,51,1)]'>Wednesday Prayer Meeting</td>
              <td className='p-4 font-onest text-[20px] font-[400] text-[rgba(51,51,51,1)]'>6pm</td>
            </tr>
          </tbody>


        </table>
      </div>
      <div className='h-full border-[4px] border-[#ffffff] shadow-[2px_2px_9.3px_0px_rgba(0,0,0,0.25)] rounded-[8px]  '>
        <img src="/assests/scripture.jpg" className='h-[400px] w-full'></img>
      </div>
    </div>
  )
}

export default ServiceTime