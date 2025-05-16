import React from 'react'

const CommonPara = ({ ParaText, ParaClass }) => {
    return (
        <>
            <p className={`font-poppins text-black text-[16px] font-normal leading-[150%] m-0 ${ParaClass}`}>{ParaText}</p>
        </>
    )
}

export default CommonPara
