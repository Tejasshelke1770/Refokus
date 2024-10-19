import React from 'react'

const Footer = () => {
  return (
    <div className='w-full'>
       <div className='max-w-screen-xl mx-auto py-10 flex gap-10 '>
        <div className='basis-1/2'>
        <h1 className='text-[11.5rem] font-semibold leading-none tracking-tight select-none'>refokus.</h1>
        </div>
        <div className='basis-1/2 flex justify-center gap-4 ml-20'>
        <div className='basis-1/3'>
            <h4 className='mb-10 text-zinc-500 capitalize'>socials</h4>
            {["instagram", "twitter (x?)", "LinkedIn"].map((item, index)=>{
                return <a className='block  mt-3 text-zinc-600 capitalize' href="">{item}</a>
            })}
        </div>
        <div className='basis-1/3'>
            <h4 className='mb-10 text-zinc-500 capitalize'>Sitemap</h4>
            {["home", "work", "careers", "contact"].map((item, index)=>{
                return <a className='block  mt-3 text-zinc-400 capitalize' href="">{item}</a>
            })}
        </div>
        <div className='basis-1/3 flex flex-col justify-end '>
            <p className='text-right text-sm '>Refokus is pioneering digital agency driven by design and imporwered by technology.</p>
            <img className='mt-5' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.png" alt="" />
        </div>
        </div>
       </div>
       <div className='max-w-screen-xl mx-auto py-8'>
        <div>{["Privacy Policy", "Cookie Policy", "Impressun", "Terms"].map(item => <a className='capitalize mr-10 text-zinc-500' href="">{item}</a> )}</div>
       </div>
    </div>
  )
}

export default Footer
