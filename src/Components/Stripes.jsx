import React from 'react'
import Stripe from './Stripe'

function Stripes() {
  let data = [
    {url: "https://www.cssdesignawards.com/imgs/logo.svg", number:48},
    {url: "https://assets-global.website-files.com/60d28377885e0106c1158a35/60f994287e430578361f38ab_logo-full-light.svg", number:2},
    {url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Awwards-logotype-2018.svg/512px-Awwards-logotype-2018.svg.png?20180924071618", number:11},
    {url: "https://www.cssdesignawards.com/imgs/logo.svg", number:48},
    {url: "https://assets-global.website-files.com/60d28377885e0106c1158a35/60f994287e430578361f38ab_logo-full-light.svg", number:2},
    {url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Awwards-logotype-2018.svg/512px-Awwards-logotype-2018.svg.png?20180924071618", number:11},
  ]

  return (
    <div className='flex  mt-32'>
      {data.map((elem, index) =>{
        return <Stripe data={elem} index={index} />
      })}
    </div>
  )
}

export default Stripes
