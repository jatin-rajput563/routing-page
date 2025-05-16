import React from 'react'
import CommonPara from './common/CommonPara'
import CommonButton from './common/CommonButton'

const Waste = () => {
    return (
        <>
            <div className="bg-black py-[100px]">
                <div className="max-w-[1140px] mx-auto">
                    <h2 className='text-white font-semibold text-[48px] leading-[120%] max-w-[730px] text-center mx-auto '>How Can We Help with Your Waste Removal?</h2>
                    <CommonPara ParaClass="!text-white max-w-[622px] text-center mx-auto pt-[16px] opacity-80" ParaText="We’re here to make waste removal hassle-free with a service that’s flexible, reliable, and tailored to your needs. Whether you need a free site visit and quote or just have a quick question, our friendly team is always ready to help – with a smile and a solution!" />
                    {/* <CommonButton /> */}
                </div>
            </div>
        </>
    )
}

export default Waste
