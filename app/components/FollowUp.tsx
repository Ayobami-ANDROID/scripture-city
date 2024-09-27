'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Followp = () => {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonRef = useRef(null)
  const lineRef = useRef(null)

  useGSAP(() => {
    if (typeof window !== 'undefined') {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })

      tl.from(containerRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: "power3.out"
      })
      .from(titleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.4")
      .from(descriptionRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.3")
      .from(buttonRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)"
      }, "-=0.3")
      .from(lineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.8,
        ease: "power3.inOut"
      }, "-=0.4")
    }
  }, [])

  return (
    <div className="px-20 mt-24 relative">
      <div ref={containerRef} className="bg-[url('/assests/pattern.png')] rounded-[15px] overflow-hidden">
        <div className='bg-[rgba(92,29,136)]/[0.972] pt-12'>
          <div className='flex flex-col items-center gap-6'>
            <h1 ref={titleRef} className='font-manrope font-[600] lg:text-[36px] text-[28px] text-[#ffffff]'>
              We Would love to hear from you
            </h1>
            <p ref={descriptionRef} className='font-[400] lg:text-[20px] text-[15px] font-manrope text-[#ffffff]'>
              Join us physically or watch our Livestreams online
            </p>
            <div className='mb-[-55px] z-[1]'>
              <button ref={buttonRef} className='bg-[rgba(255,255,255,1)] text-[rgba(92,29,136,1)] py-[12px] px-[24px] rounded-[8px] font-manrope text-[20px] font-[600]'>
                Join Us
              </button>
            </div>
          </div>
          <div className="lg:mt-6 mt-2 lg:mb-0 overflow-hidden">
            <div ref={lineRef} className='h-1/2'>
              <img src="/assests/Line.png" alt="Decorative line" className='w-full h-[90px]' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Followp