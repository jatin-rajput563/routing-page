import React from 'react'
import CommonPara from './common/CommonPara'
import { FACEBOOK, LINKDIN, TWITER, YOUTUBE } from '../utils/icon'


const Footer = () => {
    return (
        <>
            <div className="min-h-screen bg-[url(../src//assets/images/png/footer-bg.png)] bg-cover bg-no-repeat bg-center pt-[67px]">
                <div className="max-w-[1140px] mx-auto ">
                    <div className="flex flex-row flex-wrap">
                        <div className="w-6/12">
                            <a href="#" className='font-roboto font-medium text-[48px] leading-[150%] text-white'>  Leeds Junk</a>
                            <CommonPara ParaClass="max-w-[425px] !text-white opacity-80" ParaText="We’re here to make waste removal hassle-free with a service that’s flexible, reliable, and tailored to your needs. Whether you need a free site visit" />
                            <p className='font-roboto font-semibold text-[20px] leading-[150%] text-white pt-[60px] m-0'>Follow Us</p>
                            <div className='flex gap-4 mt-[14px]'>
                                <a href="https://www.linkedin.com/feed/" target='black'>
                                    <LINKDIN />
                                </a>
                                <a href="https://www.youtube.com/" target='black'>
                                    <YOUTUBE />
                                </a>
                                <a href="https://www.facebook.com/" target='black'>
                                    <FACEBOOK />
                                </a>
                                <a href="https://x.com/" target='black'>
                                    <TWITER />
                                </a>
                            </div>
                        </div>
                        <div className="w-6/12 flex justify-between max-w-[400px]">
                            <ul className='flex flex-col gap-[12px]'>
                                <li className='text-white font-medium text-[20px] opacity-75  leading-[150%]'>Quick Links</li>
                                <li><a href="#"><CommonPara ParaClass="!text-white opacity-75 hover:opacity-100 transition-all  pt-[16px]" ParaText="About us" /></a></li>
                                <li><a href="#"><CommonPara ParaClass="!text-white opacity-75 hover:opacity-100 transition-all" ParaText="Services" /></a></li>
                                <li><a href="#"><CommonPara ParaClass="!text-white opacity-75 hover:opacity-100 transition-all" ParaText="FAQs" /></a></li>
                                <li><a href="#"><CommonPara ParaClass="!text-white opacity-75 hover:opacity-100 transition-all" ParaText="Contact Us" /></a></li>
                            </ul>
                            <ul className='flex flex-col gap-[12px]'>
                                <li className='text-white font-medium text-[20px] opacity-75  leading-[150%]'>Services</li>
                                <li><a href="#"><CommonPara ParaClass="!text-white opacity-75 hover:opacity-100 transition-all pt-[16px]" ParaText="Privacy Policy" /></a></li>
                                <li><a href="#"><CommonPara ParaClass="!text-white opacity-75 hover:opacity-100 transition-all" ParaText="Terms of Services" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Footer
