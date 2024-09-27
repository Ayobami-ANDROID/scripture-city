'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AboutChurch = () => {
  const titleRef = useRef(null)
  const paragraphRef = useRef(null)
  const buttonRef = useRef(null)
  const imageRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    })

    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    })
    .from(paragraphRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4")
    .from(buttonRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out"
    }, "-=0.4")

    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      },
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: "elastic.out(1, 0.7)"
    })

  }, [])

  return (
    <div className='grid lg:grid-cols-2 grid-col-2 mt-24 lg:px-20 px-16 mb-4 gap-8'>
      <div className='flex flex-col justify-center gap-4'>
        <h1 ref={titleRef} className='text-[rgba(92,29,136,1)] font-manrope font-[600] lg:text-[34px] text-[30px]'>
          We are a diverse community united by our faith in Christ.
        </h1>
        <p ref={paragraphRef} className='lg:text-[20px] text-[16px] text-[rgba(51,51,51,1)] font-[200] font-monrope'>
          Our mission is to grow together in love, faith, and service. Our mission is to grow together in love, faith, and service. Our mission is to grow together in love, faith, and service.
        </p>
        <div className='flex lg:justify-start justify-center'>
          <button ref={buttonRef} className='bg-[rgba(92,29,136,1)] text-[#fff] py-[12px] px-[16px] rounded-[8px] font-manrope text-[16px] font-[600]'>
            Statement of Faith
          </button>
        </div>
      </div>
      <div ref={imageRef} className='h-full border-[4px] border-[#ffffff] shadow-[2px_2px_9.3px_0px_rgba(0,0,0,0.25)] rounded-[8px]'>
        <img src="/assests/revEmeka.jpg" alt="Rev Emeka" className='w-full lg:h-[464px] h-[300px]' />
      </div>
    </div>
  )
}

export default AboutChurch