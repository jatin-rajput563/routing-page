import React from 'react'
import CommonHeading from '../common/CommonHeading'
import CommonPara from '../common/CommonPara'
import CommonButton from '../common/CommonButton'
import aboutImg from '../../assets/images/png/about-main-img.png'

const About = () => {
    return (
        <>
            <div className="py-[100px]">
                <div className="max-w-[1140px] mx-auto ">
                    <div className="flex flex-row flex-wrap -mx-3">
                        <div className="min-lg:w-6/12">
                            <CommonHeading HeadingText="About Us" HeadingClass="max-lg:text-center max-lg:mx-auto" />
                            <CommonPara ParaClass="max-w-[558px] !opacity-80 pt-[16px] pb-[32px] " ParaText="At Leeds Junk, we believe waste removal should be simple, affordable, and eco-friendly. Whether you're clearing out your home, office, or construction site, we provide a hassle-free solution tailored to your needs. With a dedicated team and a commitment to responsible disposal, we ensure that as much waste as possible is recycled or repurposed, reducing landfill impact." />
                            <CommonButton BtnClass="flex justify-center" />
                        </div>
                        <div className="min-lg:w-6/12">
                            <img className='pl-[50px] max-w-[546px] w-full' src={aboutImg} alt="about-img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
