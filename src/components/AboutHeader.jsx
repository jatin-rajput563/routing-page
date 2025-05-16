import React from 'react'
import CommonPara from './common/CommonPara'
import Nav from '../components/Nav'
// import iphone from '../assets/images/svg/iphone.svg'

const AboutHeader = () => {
    return (
        <>
            <div className="min-h-screen bg-[linear-gradient(120deg,_#43e97b_0%,_#38f9d7_50%,_#00c3ff_100%)] bg-cover bg-no-repeat bg-center relative">
                <div className="w-full bg-black ">
                    <div className="max-w-[1140px] items-center flex h-[50px] justify-between w-full mx-auto">
                        <CommonPara ParaClass="!text-white !text-[12px]" ParaText="Leeds junk are a local waste collection/removal business." />
                        <CommonPara ParaClass="!text-white !text-[12px]" ParaText="Eng" />
                    </div>
                </div>
                <Nav />
                <div className="max-w-[1140px] mx-auto mt-[80px]">
                    <div className="flex flex-row flex-wrap justify-center items-center">
                        <div className="min-lg:w-6/12">
                            <h1 className='font-roboto font-[800] text-[64px] max-w-[701px] leading-[100%] max-lg:text-center max-lg:mx-auto'>Professional Waste Removal Crew at Work</h1>
                            <CommonPara ParaClass="max-w-[400px] pt-[16px] pb-[32px] max-lg:text-center max-lg:mx-auto" ParaText=" Team members in uniforms loading waste responsibly into a truck or bins" />
                        </div>
                        <div className="min-lg:w-6/12 ">
                            <div className=' '>
                                {/* <img className='absolute max-lg:static max-lg:right-auto z-10 right-[15%] top-[18%]' src={iphone} alt="" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutHeader
