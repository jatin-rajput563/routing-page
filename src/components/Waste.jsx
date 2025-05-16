import React from 'react'
import CommonPara from './common/CommonPara'
import CommonButton from './common/CommonButton'
import left from '../assets/images/svg/left-circle.svg'
import right from '../assets/images/svg/right-circle.svg'

const Waste = () => {
    return (
        <>
            <div className="bg-black py-[100px] overflow-hidden relative">
                <img className='absolute left-0 top-0 ' src={left} alt="left" />
                <div className="max-w-[1140px] mx-auto">
                    <h2 className='text-white font-semibold text-[48px] leading-[120%] max-w-[730px] text-center mx-auto '>How Can We Help with Your Waste Removal?</h2>
                    <CommonPara ParaClass="!text-white max-w-[622px] text-center mx-auto pt-[16px] opacity-80" ParaText="We’re here to make waste removal hassle-free with a service that’s flexible, reliable, and tailored to your needs. Whether you need a free site visit and quote or just have a quick question, our friendly team is always ready to help – with a smile and a solution!" />
                    {/* <CommonButton /> */}
                    <img className='absolute right-0 top-0 ' src={right} alt="left" />
                </div>
            </div>
        </>
    )
}

export default Waste
