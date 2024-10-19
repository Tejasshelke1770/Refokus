import React from 'react'

function Stripe({data, index}) {
  return (
    <div className='flex justify-between items-center w-[16.66%] px-10 py-5 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-600'>
      <img style={{width:"130px"}} src={data.url} className={(index != 1 && index != 4 ? "invert" : "") }   />
      <span className='font-semibold'>{data.number}</span>
    </div>
  )
}

export default Stripe
