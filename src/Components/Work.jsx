import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const Work = () => {
  const [images, setImages] = useState([
    {
      url: "https://i.pinimg.com/736x/5c/c2/10/5cc2102fbf46344f4fbeba901e806769.jpg",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://i.pinimg.com/736x/87/f4/52/87f45217ff34ff18c4a64b49773cc23e.jpg",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://i.pinimg.com/564x/52/c4/01/52c4015ee6e9ffbf7edfd4bced251c57.jpg",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://i.pinimg.com/564x/10/03/26/1003266b74ef63996ff4bc691c13e40d.jpg",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://i.pinimg.com/564x/84/d9/83/84d9838f78022eeced9d409f973ced3d.jpg",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://i.pinimg.com/736x/4a/d1/7f/4ad17f52e3d163d8e24f944d027c7a2b.jpg",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ]);

  const { scrollY, scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imageShow(arr){
      setImages((prev)=> 
        prev.map((item , index)=> 
        arr.indexOf(index) === -1 
        ? {...item, isActive: false}
        : {...item, isActive: true})) 
    }

    switch (Math.floor(data * 100)) {
      case 0:
        imageShow([]);
        break;
      case 1:
        imageShow([0]);
        break;
      case 2:
        imageShow([0,1]);
        break;
      case 3:
        imageShow([0,1,2]);
        break;
      case 4:
        imageShow([0,1,2,3]);
        break;
      case 6:
        imageShow([0,1,2,3,4]);
        break;
      case 8:
        imageShow([0,1,2,3,4,5]);
        break;
    
    }

  });

  return (
    <div className="w-full mt-10 ">
      <div className="relative max-w-screen-xl mx-auto text-center ">
        <h1 className="text-[50vh] leading-none font-medium tracking-tight select-none">
          work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  src={elem.url}
                  style={{ top: elem.top, left: elem.left }}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;

//  useMotionValueEvent(scrollYProgress, "change", (latest) => {
//    console.log("Page scroll: ", latest)
//    ShowNHindeImages(Math.floor(latest*100))
//  })

//  function ShowNHindeImages(scrollVal){
//   if(scrollVal >= 1 ){
//     console.log("show image", scrollVal)

//   }
//  }



//my code
// const { scrollY, scrollYProgress } = useScroll();

// scrollYProgress.on("change", (data) => {
//   switch (Math.floor(data * 100)) {
//     case 0:
//       setImages((prev)=> prev.map((item, index)=>{
//         return {...item, isActive:false}
//       }))
//       break;
//     case 1:
//      setImages((prev)=> prev.map((item, index)=>{
//       return index === 0 ? {...item, isActive: true} : {...item} }))
//       break;
//     case 2:
//       setImages((prev)=> prev.map((item, index)=>{
//         return index === 0 ? {...item, isActive: false} : {...item} && index === 1? {...item, isActive: true} : {...item}  }))
//       break;
//     case 3:
//       setImages((prev)=> prev.map((item, index)=>{
//         return index === 1 ? {...item, isActive: false} : {...item} && index === 2 ? {...item, isActive: true} : {...item}  }))
//       break;
//     case 4:
//       setImages((prev)=> prev.map((item, index)=>{
//         return index === 2 ? {...item, isActive: false} : {...item} && index === 3 ? {...item, isActive: true} : {...item}  }))
//       break;
//     case 5:
//       setImages((prev)=> prev.map((item, index)=>{
//         return index === 3 ? {...item, isActive: false} : {...item} && index === 4 ? {...item, isActive: true} : {...item}  }))
//       break;
//       case 6 :
//         setImages((prev)=> prev.map((item, index)=>{
//           return index ===4 ? {...item, isActive : false} :item
//         }))

//   }
// });

//AI
// const activeIndex = Math.floor(data * 100); // Calculate the active index based on scroll progress
  
//     setImages((prev) => 
//       prev.map((item, index) => ({
//         ...item,
//         isActive: index === activeIndex // Set isActive to true for the active index
//       }))
//     );