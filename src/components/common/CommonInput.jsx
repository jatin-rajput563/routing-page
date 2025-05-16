import React from 'react'

const CommonInput = ({ type, placeholder, InputClass }) => {
    return (
        <>
            <input type={type} placeholder={placeholder} className={`bg-white rounded-[20px] h-[36px] w-full border-0 outline-0 pl-3 ${InputClass}`} />
        </>
    )
}

export default CommonInput
