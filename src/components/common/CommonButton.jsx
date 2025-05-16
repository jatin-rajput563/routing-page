import React from 'react'

const CommonButton = ({BtnClass}) => {
    return (
        <>
            <button className={`font-semibold text-[16px] leading-[150%] text-white bg-[#00243C] rounded-[8px] py-[12px] px-[24px] hover:bg-[#00243C]/80 transition-all duration-300 ${BtnClass}`}>
                GET QUOTE
            </button>
        </>
    )
}

export default CommonButton
