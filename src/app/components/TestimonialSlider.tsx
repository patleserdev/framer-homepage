"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/legacy/image.js";

const variants = {
  enter: { opacity: 0, y: 50 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

interface InterfaceTestimonial {
    comment:string,
    author:string,
    picture:string
}

export default function TestimonialsSlider({datas}:{datas: InterfaceTestimonial[]}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % datas.length);
    }, 5000); // Changer toutes les 4 secondes

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[300px] flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6 }}
          className="absolute text-center p-2 flex flex-col-reverse md:flex-row items-center gap-10"
        >
          <div className="flex flex-col h-full">
          <p className="text-xl italic mb-2">"{datas[index].comment}"</p>
          <p className="text-lg font-semibold">|&nbsp;&nbsp;&nbsp;    {datas[index].author}  &nbsp; &nbsp; | </p>
          </div>
          <div className="rounded-full overflow-hidden flex">
            <Image src={`/assets/persons/${datas[index].picture}`} height={200}  width={200} alt="profile" style={{objectFit:"cover"}}/>
          </div>
         
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
