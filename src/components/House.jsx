import React from 'react'
import CommonHeading from './common/CommonHeading'
import CommonPara from './common/CommonPara'
import houseImg from '../assets/images/png/product-img-1.png'

const House = () => {
    return (
        <>
            <div className="min-h-screen py-[100px]">
                <div className="max-w-[1140px] mx-auto">
                    <div className="flex flex-wrap-flex-row">
                        <div className="w-6/12 ">
                            <CommonHeading HeadingText="House Clearance" HeadingClass="mt-[100px]"/>
                            <CommonPara ParaClass="pt-6 opacity-70" ParaText="Our House Clearance service is designed to help you clear out unwanted items quickly and efficiently. Whether you're preparing for a move, dealing with a bereavement, or simply decluttering your home, our professional team handles everything with care and respect. From old furniture and appliances to general household waste, we take care of the heavy lifting, loading, and responsible disposal. We aim to make the entire process stress-free, leaving your space clean, empty, and ready for whatever comes next." />
                        </div>
                        <div className="w-6/12">
                        <img className='ml-[100px] rounded-[15px]' src={houseImg} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default House
