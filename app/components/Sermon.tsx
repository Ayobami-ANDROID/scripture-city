'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Sermon = () => {
    const imageRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const buttonRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: imageRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        })

        tl.from(imageRef.current, {
            scale: 0.8,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
        .from(titleRef.current, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.5")
        .from(subtitleRef.current, {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out"
        }, "-=0.4")
        .from(buttonRef.current, {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(1.7)"
        }, "-=0.3")

    }, [])

    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 px-20 mt-16'>
            <div className='flex flex-col lg:justify-start justify-center gap-4'>
                <h1 className='font-[600] lg:text-left text-center font-manrope text-[20px] text-[rgba(51,51,51,1)]'>Watch Our Latest Sermon</h1>
                <div ref={imageRef} className='h-full border-[4px] border-[#ffffff] shadow-[2px_2px_9.3px_0px_rgba(0,0,0,0.25)] rounded-[8px]'>
                    <img src="/assests/preaching.jpg" alt="Preaching" className='lg:h-[276px] h-[250px] w-full' />
                </div>
            </div>
            <div className='col-span-2 pt-12 flex flex-col gap-4'>
                <h1 ref={titleRef} className='text-[rgba(92,29,136,1)] font-[500] lg:text-[36px] text-[30px] lg:w-[80%] w-full'>The Greater One: Access to Greater Victory</h1>
                <p ref={subtitleRef} className='font-manrope font-[500] lg:text-[20px] text-[16px] text-[rgba(51,51,51,1)]'>Rev Emeka Iduma</p>
                <div>
                    <button ref={buttonRef} className='flex items-center bg-[rgba(92,29,136,1)] text-[#fff] py-[12px] px-[16px] rounded-[8px] font-manrope text-[16px] font-[600]'>
                        <svg className='mr-4' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 14.5L14.5 10L7.5 5.5V14.5ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="white" />
                        </svg>
                        Watch Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sermon