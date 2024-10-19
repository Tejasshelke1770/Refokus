import React from 'react'
import Button from './Button'

function Product({Product, mover, count}) {
  return (
    <div className='w-full py-20 h-[23rem] text-white'>
    <div onMouseEnter={()=>{mover(count)}} className='max-w-screen-xl mx-auto flex items-center justify-between'>
      <h1 className='text-6xl  font-medium'>{Product.title}</h1>
      <div className='dets w-1/3'>
      <p className='mb-10'>{Product.desc}</p>
      <div className='flex gap-5'>
        {Product.live && <Button />}
        {Product.case && <Button title={"Case Study"} />}
      </div>
      </div>
    </div>
  </div>
  )
}

export default Product
