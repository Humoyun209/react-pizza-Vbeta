import React from 'react'

const PaginationButton = ({children}) => {
  return (
    <button className='text-[12px] leading-[12px] px-[12px] py-[12px] border-[#FE5F1E] border-[2px] rounded-full font-bold text-[#FE5F1E] hover:bg-[#fe5f1e] hover:text-white'> {children} </button>
  )
}

export default PaginationButton