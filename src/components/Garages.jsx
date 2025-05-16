import React from 'react'
import { CARD_DATA, IMAGE_DATA } from '../utils/helper'
import CommonButton from './common/CommonButton'
import { Link } from 'react-router-dom'

const Garages = () => {
    return (
        <>
            <div className="py-[100px]">
                <div className="max-w-[1140px] mx-auto">
                    <div className="flex flex-row flex-wrap">
                        {CARD_DATA.map((item, index) => (
                            <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
                                <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-all duration-300">
                                    <img src={item.img} alt={item.title} className="w-full object-cover" />
                                    <div className="p-4">
                                        <h2 className="text-xl font-bold">{item.title}</h2>
                                        <p className="text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='mx-auto flex justify-center mt-10'>
                        <Link className='py-3 px-6 shadow-2xl border-2 rounded-2xl text-lg font-semibold hover:bg-black hover:text-white' to="/product">Back</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Garages
