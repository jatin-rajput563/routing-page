import React from 'react'
import Nav from './Nav'

const Header = () => {
    return (
        <>
            <div className="min-h-screen bg-[url(../src/assets/images/png/bg-image.png)] bg-cover bg-no-repeat bg-center">
                <div className="w-full bg-black ">
                    <div className="max-w-[1140px] items-center flex h-[50px] justify-between w-full mx-auto">
                        <p className='text-white '>Leeds junk are a local waste collection/removal business.</p>
                        <p className='text-white'>Eng</p>
                    </div>
                </div>
                <Nav />
            </div>
        </>
    )
}

export default Header
