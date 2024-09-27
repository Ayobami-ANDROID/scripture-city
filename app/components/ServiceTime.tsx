'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ServiceTime = () => {
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const tableRef = useRef(null)
  const imageRef = useRef(null)

  useGSAP(() => {
    if (typeof window !== 'undefined') {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })

      tl.from(titleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
      })
      .from(descriptionRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.3")
      .from(tableRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.3")

      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })
    }
  }, [])

  return (
    <div className='lg:grid-cols-2 grid-cols-1 grid px-20 mt-24 gap-8'>
      <div className='flex flex-col gap-6'>
        <h1 ref={titleRef} className='font-manrope lg:text-[20px] text-[16px] font-[600] text-[rgba(51,51,51,1)]'>SERVICE TIMES</h1>
        <p ref={descriptionRef} className='font-manrope lg:text-[24px] text-[14px] font-[500] text-[rgba(0,0,0,1)]'>Join us for our weekly services and experience the love of Christ. We offer multiple services to fit your schedule.</p>
        <table ref={tableRef}>
          <thead className='text-left border-b-[2px] font-manrope font-[500] text-[16px] border-[rgba(172,172,172,1)] text-[rgba(115,115,115,1)]'>
            <tr>
              <th className='p-4'>Service</th>
              <th className='p-4'>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b-[2px] border-[rgba(172,172,172,1)]'>
              <td className='p-4 font-manrope text-[20px] font-[500] text-[rgba(51,51,51,1)]'>Sunday Service</td>
              <td className='p-4 font-onest text-[20px] font-[400] text-[rgba(51,51,51,1)]'>9.00am</td>
            </tr>
            <tr className='border-b-[2px] border-[rgba(172,172,172,1)]'>
              <td className='p-4 font-manrope text-[20px] font-[500] text-[rgba(51,51,51,1)]'>Wednesday Prayer Meeting</td>
              <td className='p-4 font-onest text-[20px] font-[400] text-[rgba(51,51,51,1)]'>6pm</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div ref={imageRef} className='h-full border-[4px] border-[#ffffff] shadow-[2px_2px_9.3px_0px_rgba(0,0,0,0.25)] rounded-[8px]'>
        <img src="/assests/scripture.jpg" alt="Scripture" className='h-[400px] w-full' />
      </div>
    </div>
  )
}

export default ServiceTime