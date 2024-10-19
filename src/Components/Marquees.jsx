import React from 'react'
import Marquee from './Marquee'
const Marquees = () => {
    const images = [
        [
            "https://storage.googleapis.com/brandbird/assets/company-logos/Logotypes/Behance%20Logotype.svg",
            "https://storage.googleapis.com/brandbird/assets/company-logos/Logotypes/GitHub%20Logotype.svg",
            "https://storage.googleapis.com/brandbird/assets/company-logos/Logotypes/Glide%20Logotype.svg",
            "https://storage.googleapis.com/brandbird/assets/company-logos/Logotypes/Dribbble%20Logotype.svg",
            "https://storage.googleapis.com/brandbird/assets/company-logos/Logotypes/CodePen%20Logotype.svg",
            "https://storage.googleapis.com/brandbird/assets/company-logos/Logotypes/BeReal%20Logotype.svg",
            "https://storage.googleapis.com/brandbird/assets/company-logos/Logotypes/AOL%20Search%20Logotype.svg",
            "https://storage.googleapis.com/brandbird/assets/company-logos/Logotypes/Gumroad%20Logotype.svg",
            "https://storage.googleapis.com/brandbird/assets/company-logos/Logotypes/Twitch%20Logotype.svg",
            "https://storage.googleapis.com/brandbird/assets/company-logos/Logotypes/Unbounce%20Logotype.svg",
            "https://storage.googleapis.com/brandbird/assets/company-logos/Logotypes/Voiceflow%20Logotype.svg",
        ],
        [
            "https://storage.googleapis.com/brandbird/assets/company-logos/Logotypes/Klarna%20Logotype.svg",
            "https://storage.googleapis.com/brandbird/assets/company-logos/Logotypes/OneDrive%20Logotype.svg",
            "https://storage.googleapis.com/brandbird/assets/company-logos/Logotypes/Pandora%20Logotype.svg",
            "https://storage.googleapis.com/brandbird/assets/company-logos/Logotypes/Procreate%20Logotype.svg",
            "https://storage.googleapis.com/brandbird/assets/company-logos/Logotypes/Revolut%20Logotype.svg",
            "https://storage.googleapis.com/brandbird/assets/company-logos/Logotypes/Robinhood%20Logotype.svg",
            "https://storage.googleapis.com/brandbird/assets/company-logos/Logotypes/Telegram%20Logotype.svg",
            "https://storage.googleapis.com/brandbird/assets/company-logos/Logotypes/Tumblr%20Logotype.svg",
            "https://storage.googleapis.com/brandbird/assets/company-logos/Logotypes/Wix%20Logotype.svg",
            "https://storage.googleapis.com/brandbird/assets/company-logos/Logotypes/Wordpress%20Logotype.svg",
            "https://storage.googleapis.com/brandbird/assets/company-logos/Logotypes/Bubble%20Logotype.svg"
        ]
    ]


  return (
    
    <div className='py-10 mt-32 w-full relative overflow-hidden'>
      {images.map((item, index)=>{
        return <Marquee direction={index===0 ? "left" : "right"} imagesurl={item} />
      })}
    </div>
  )
}

export default Marquees

