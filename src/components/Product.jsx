import React from 'react';
import CommonHeading from './common/CommonHeading';
import { IMAGE_DATA } from '../utils/helper';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <>
            <div className="py-[100px]">
                <div className="max-w-[1140px] mx-auto">
                    <CommonHeading HeadingText="Our Waste Removal Products" HeadingClass="" />
                    <div className="flex flex-row flex-wrap">
                        {IMAGE_DATA.map((item, index) => (
                            <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
                                <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-all duration-300">
                                    <div className="relative group">
                                        <img src={item.img} alt={item.title} className="w-full object-cover" />
                                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center"> 
                                            <Link className='text-white' to="/garage">{item.title}</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
