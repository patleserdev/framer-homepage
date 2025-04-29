"use client"
import Image from "next/legacy/image.js";
import { motion } from "framer-motion";
import { useMotionContext } from "../context/MotionContext"; // chemin selon ton projet

interface InterfaceEnterCard {
  item: number;
  title: string;
  content: string;
  picture: string;
  color:string;
  backgroundColor:string
}

export default function EnterCard({
  item,
  title,
  content,
  picture,
  color,
  backgroundColor
}: InterfaceEnterCard) {

  const { isMobile } = useMotionContext();



  const gotoX = 50 * item;

  const contentOnly = (
  <article key={item} className="flex flex-col lg:gap-5 mb-5">
    <div className="flex flex-col border gap-2 h-80 ">
      <h4 className="p-2 text-3xl">{title}</h4>
      <p className="p-2 text-lg">{content}</p>


      <Image
        className="mt-2 xl:object-cover"
        src={`/assets/pictures/${picture}`}
        alt="picture"
        height={600}
        width={600}
        
      />
                

    </div>
    <a
    href="#"
              className="transition-all py-2 px-2 lg:mt-5 text-center font-bold text-lg hover:bg-slate-500"

              style={{ color: color, backgroundColor: backgroundColor }}
            >En savoir plus</a>
  </article>)


  if (isMobile) return contentOnly;

  return (
    <motion.div
      initial={{ opacity: 0, x: gotoX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.5 }}
    >
      {contentOnly}
    </motion.div>
  );
}
