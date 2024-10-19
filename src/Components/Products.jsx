import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  const Products = [
    {
      title: "Arqitel",
      desc: "Discover our award-winning website, recognized globally for its innovative design and user experience, setting new standards in web excellence.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      desc: "Our website has garnered prestigious global awards, showcasing creativity and functionality that captivates users and enhances engagement.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2024",
      desc: "Experience our award-winning website, celebrated for its exceptional design and seamless navigation, earning accolades on the global stage.",
      live: true,
      case: false,
    },
    {
      title: "Yahoo!",
      desc: "Join us in exploring our globally recognized website, a testament to outstanding design and user-centric features, winning multiple prestigious awards.",
      live: true,
      case: true,
    },
    {
      title: "Rainfall",
      desc: "Our website shines with global awards, reflecting our commitment to excellence in design and user experience, making it a standout in the industry.",
      live: true,
      case: true,
    },
  ];

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="mt-32 relative">
      {Products.map((elem, index) => (
        <Product count={index} Product={elem} mover={mover} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none ">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className=" window absolute left-[44%]  w-[32rem] h-[23rem] overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-100"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-200"
          ></motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className="w-full h-full bg-sky-300"
          ></motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className="w-full h-full bg-sky-400"
          ></motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className="w-full h-full bg-sky-500"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
