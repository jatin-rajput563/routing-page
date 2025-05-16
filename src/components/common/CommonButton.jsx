import React from 'react'

const CommonButton = ({ BtnClass }) => {
    return (
        <>
            <button className={`font-semibold text-[16px] leading-[150%] px-[35px] py-4 rounded-[16px] border border-black transition-all duration-500 ease-in-out hover:text-white hover:[box-shadow:inset_0_-100px_0_0_black] active:scale-90 ${BtnClass}`}>
                GET QUOTE
            </button>
        </>
    )
}

export default CommonButton
