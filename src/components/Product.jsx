import React from 'react'
import CommonHeading from './common/CommonHeading'
import { IMAGE_DATA } from '../utils/helper'

const Product = () => {
    return (
        <>
            <div className="min-h-screen py-[100px]">
                <div className="max-w-[1140px] mx-auto">
                    <CommonHeading HeadingText="Our Waste Removal Products" HeadingClass="" />
                    <div className="flex flex-row flex-wrap">
                       {IMAGE_DATA.map((item, index) => (
                            <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
                                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                                    <img src={item.img} alt={item.title} className="w-full object-cover" />
                                    <div className="p-4">
                                        <h2 className="text-xl font-bold">{item.title}</h2>
                                        <p className="text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
