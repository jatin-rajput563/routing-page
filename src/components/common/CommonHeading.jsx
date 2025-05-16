import React from 'react'

const CommonHeading = ({ HeadingText, HeadingClass }) => {
    return (
        <>
            <h2 className={`font-roboto text-semibold text-[48px] leading-[120%] ${HeadingClass}`}>{HeadingText}</h2>
        </>
    )
}

export default CommonHeading
