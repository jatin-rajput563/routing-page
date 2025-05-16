import React from 'react'
import CommonHeading from '../common/CommonHeading'
import CommonInput from '../common/CommonInput'
import CommonPara from '../common/CommonPara'

const Contact = () => {
    return (
        <>
            <div className="py-[100px]">
                <div className="max-w-[1140px] mx-auto">
                    <CommonHeading HeadingText="Ways to Get in Touch" HeadingClass="text-center" />
                    <div className='max-w-[662px] p-[16px] mt-[40px] bg-[linear-gradient(94.55deg,_rgba(199,255,81,0.2)_-14.37%,_rgba(0,201,52,0.2)_49.67%,_rgba(81,255,192,0.2)_111.65%)] border border-solid [border-image-source:linear-gradient(94.55deg,_rgba(199,255,81,0.4)_-14.37%,_rgba(0,201,52,0.4)_49.67%,_rgba(81,255,192,0.4)_111.65%)] [border-image-slice:1] mx-auto flex flex-col'>
                        <div className='flex gap-[16px]'>
                            <CommonInput placeholder="First name" InputClass="" />
                            <CommonInput placeholder="Last name" InputClass="" />
                        </div>
                        <div className='flex gap-[16px] mt-[16px]'>
                            <CommonInput placeholder="Email" InputClass="" />
                            <CommonInput placeholder="Phone no." InputClass="" />
                        </div>
                        <textarea className='w-full bg-white mt-6 rounded-[20px] min-h-[100px] outline-0 p-[13px]'placeholder='Message' >Message</textarea>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
