"use client";

import Image from "next/legacy/image";
import { motion } from "framer-motion";
import { useState } from "react";
import AnimateBgSection from "./AnimateBgSection";
import InfiniteScrollImages from "./InfiniteScrollImages";
import ParallaxText from "./ParralaxText";
import ScrollButton from "./Scrollbutton";
import SplitText from "./SplitText";
import EnterCard from "./EnterCard";
import TestimonialsSlider from "./TestimonialSlider";
import Navbar from "./Navbar";

import testimonialDatas from "../datas/testimonialdatas";
import pictures from "../datas/carouselpictures";
import realisations from "../datas/realisations";
import services from "../datas/services";
export default function HomeComponent() {
  const [backgroundColor, setBackgroundColor] = useState("#000000"); // noir par défaut
  const [textColor, setTextColor] = useState("#fff"); // noir par défaut
  const [borderColor, setBorderColor] = useState("#fff"); // noir par défaut

  return (
    <AnimateBgSection backgroundColor={backgroundColor}>
      <ScrollButton direction="top" />
      <motion.header
        viewport={{ amount: 0.3 }}
        onViewportEnter={() => {
          // setBackgroundColor("#000000");
          // setTextColor("#ffffff");
          // setBorderColor("#ffffff");
        }}
        className="header md:w-[100%]  md:px-5 md:pt-5 "
      >
        <div
          style={{
            borderColor: borderColor,
            // backgroundImage:
            //   "url(./Leonardo_Phoenix_09_A_vibrant_multicolored_banner_with_a_bold_2.jpg)",
            // backgroundRepeat: "no-repeat",
            //backgroundSize: "cover",
            //backgroundPosition: "center",
          }}
          className="
          md:w-[100%] p-4 md:h-full md:px-5 bg-top md:bg-center bg-contain md:bg-cover
          flex flex-row 
          md:justify-between md:items-center 
          justify-start items-start"
        >
          <h1
            className={`font-kanit text-4xl md:text-7xl text-center relative text-shadow-xs`}
            style={{ color: textColor, opacity: 1 }}
          >
           Framer Design

          </h1>
        </div>
        <Navbar textColor={textColor} />
      </motion.header>

      <div className=" flex flex-col gap-10 px-5">
        <motion.section
          viewport={{ amount: 0.3 }}
          onViewportEnter={() => {
            setBackgroundColor("#97CC04");
            setTextColor("#ffffff");
            setBorderColor("#ffffff");
          }}
          className="hero md:h-[90vh] flex flex-col items-center md:items-start md:justify-center md:mt-2 md:mt-5 md:p-5 w-[100%] md:border rounded-lg"
          style={{ borderColor: borderColor }}
        >
          <div className="container md:w-[50%] flex flex-col items-start justify-center md:px-20 md:gap-10">
            <h2 className="text-3xl md:mb-3" style={{ color: textColor }}>
              Votre solution web sur-mesure
            </h2>
            <p style={{ color: textColor }}>
              Créons ensemble votre présence en ligne.
            </p>
          </div>

          <InfiniteScrollImages images={pictures} bgcolor={backgroundColor} />
        </motion.section>

        <motion.section
          onViewportEnter={() => {
            //  setBackgroundColor("#EEB902");
            // setTextColor("#ffffff");
            // setBorderColor("#ffffff");
          }}
          viewport={{ amount: 0.3 }}
          id="a-propos"
          className="about  flex flex-col items-center justify-center md:mt-5 md:p-5 w-[100%] md:border rounded-lg"
          style={{ borderColor: borderColor }}
        >
          <div className="flex flex-col md:flex-row w-[100%] h-[100vh]">
            <div className="container md:w-[50%] h-[100%] flex flex-col align-center justify-center md:gap-10 p-2 px-2 md:px-10">
              <h2 className="text-3xl mb-3" style={{ color: textColor }}>
                À propos de nous
              </h2>
              <p style={{ color: textColor }}>
                Nous sommes une agence créative spécialisée dans le
                développement web sur mesure et l’UX design centré utilisateur.
                Passionnés par <b>l’innovation</b>, nous concevons des
                expériences digitales fluides, esthétiques et performantes.
                Notre équipe est composée de développeurs, designers et
                stratèges unis par une vision commune : créer des solutions web
                qui ont du sens. Nous accompagnons les marques, startups et
                entreprises dans la conception de sites web, d’applications et
                d’interfaces intuitives. Chaque projet est pour nous une
                collaboration étroite, basée sur l’écoute, l’agilité et
                l’exigence. Grâce à une approche alliant{" "}
                <b>technologie et design</b>, nous donnons vie à des produits
                digitaux élégants et efficaces. De la réflexion stratégique à la
                mise en ligne, nous maîtrisons chaque étape du processus. Notre
                ambition est simple : faire du digital un levier de croissance
                durable pour nos clients. Bien plus qu’une agence, nous sommes
                un partenaire créatif engagé à vos côtés.
              </p>

              <a
                className="font-bold w-50 md:border text-center hover:bg-slate-800 transition-all m-2 md:m-0 p-2 rounded self-center mt-5"
                href="#"
                style={{ borderColor: borderColor, color: textColor }}
              >
                En savoir plus
              </a>
            </div>

            <div className="md:w-[50%] h-[40vh] md:h-[100%] flex flex-col align-center justify-center  relative">
              <Image
                src={"/assets/pictures/pexels-fauxels-3183150.jpg"}
                layout={"fill"}
                alt="picture"
                className="md:object-cover"
              />
            </div>
          </div>
        </motion.section>

        <section className="w-full relative md:mb-2 mt-2">
          <ParallaxText baseVelocity={5}>COMMUNICATION </ParallaxText>
        </section>
        <section className="w-full relative mb-2">
          <ParallaxText baseVelocity={-5}>DEVELOPPEMENT </ParallaxText>
        </section>

        <motion.section
          onViewportEnter={() => {
            setBackgroundColor("#F45D01");
            setTextColor("#ffffff");
            setBorderColor("#ffffff");
          }}
          viewport={{ amount: 0.3 }}
          style={{ borderColor: borderColor }}
          id="services"
          className="services md:mt-5 md:h-[90vh] flex flex-col items-start justify-start md:justify-center md:p-5 w-[100%] md:border rounded-lg"
        >
          <div className="container w-[50%] flex flex-col align-center justify-center md:gap-10 md:px-10 md:mb-5 p-2">
            <h2 className="text-3xl mb-5" style={{ color: textColor }}>
              Nos services
            </h2>
          </div>

          <div className="service-grid flex flex-col md:flex-row align-center justify-around w-[100%] pb-5">
            {services.map((service,i) => {
              return (
                <div key={i} className="service border h-100 m-2 md:w-100 pb-5 p-2 flex flex-col items-center justify-around gap-5 rounded shadow-xl">
                  <h3 className="px-5 text-2xl" style={{ color: textColor }}>
                    {service.title}
                  </h3>
                  <p style={{ color: textColor }}>
                  {service.content}
                  </p>

                  <Image
                    src={`/assets/icons/${service.picture}`}
                    width={200}
                    height={200}
                    alt="icon"
                    unoptimized
                  />
                </div>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          onViewportEnter={() => {
            setBackgroundColor("#F45D01");
            setTextColor("#ffffff");
            setBorderColor("#ffffff");
          }}
          viewport={{ amount: 0.3 }}
          style={{ borderColor: borderColor }}
          id="realisations"
          className="realisations md:mt-5 md:h-[90vh] flex flex-col items-start justify-start md:justify-center md:p-5 w-[100%] md:border rounded-lg"
        >
          <div className="container w-[50%] flex flex-col align-center justify-center md:gap-10 md:px-10 md:mb-5 p-2">
            <h2 className="text-3xl mb-5" style={{ color: textColor }}>
              Nos réalisations
            </h2>
          </div>

          <div
            className="flex flex-col 
          md:flex-row md:justify-around md:self-center 
          lg:flex-row lg:gap-10
          lg:w-[80%]
          overflow-hidden"
          >
            {realisations.map((realisation, i) => {
              return (
                <EnterCard
                  key={realisation.item}
                  item={realisation.item}
                  title={realisation.title}
                  content={realisation.content}
                  picture={realisation.picture}
                  color={backgroundColor}
                  backgroundColor={textColor}
                />
              );
            })}
          </div>
        </motion.section>

        <motion.section
          onViewportEnter={() => {
            setBackgroundColor("#F45D01");
            setTextColor("#ffffff");
            setBorderColor("#ffffff");
          }}
          viewport={{ amount: 0.3 }}
          style={{ borderColor: borderColor }}
          id="realisations"
          className="realisations md:mt-5 flex flex-col items-start justify-start md:justify-center md:p-5 w-[100%] md:border rounded-lg"
        >
          <div className="container w-[100%] h-[20%] flex flex-col align-center justify-center md:gap-10 md:px-20 md:mb-5 p-2">
            <h2 className="text-3xl mb-5" style={{ color: textColor }}>
              Témoignages
            </h2>
          </div>

          <TestimonialsSlider datas={testimonialDatas} />
        </motion.section>

        {/**<motion.section
          onViewportEnter={() => {
            setBackgroundColor("#F45D01");
            setTextColor("#ffffff");
            setBorderColor("#ffffff");
          }}
          viewport={{ amount: 0.3 }}
          style={{ borderColor: borderColor }}
          id="competences"
          className="competences mt-5 h-[90vh] flex flex-col items-start justify-center p-5 w-[100%] md:border rounded-lg"
        >
          <div className="container w-[50%] flex flex-col align-center justify-center gap-10 px-20 mb-5">
            <h2 className="text-3xl mb-5" style={{ color: textColor }}>
              Nos Compétences
            </h2>
          </div>

          <div className="service-grid flex flex-row align-center justify-around w-[100%] "></div>
        </motion.section>**/}

        <motion.section
          onViewportEnter={() => {
            // setBackgroundColor("#601060");
            // setTextColor("#ffffff");
            // setBorderColor("#ffffff");
          }}
          viewport={{ amount: 0.3 }}
          style={{ borderColor: borderColor }}
          id="contact"
          className="contact md:h-[90vh] flex flex-col md:flex-row items-start md:items-center md:justify-between md:mt-5 md:p-5 w-[100%] md:border rounded-lg"
        >
          <div className="flex flex-col  items-start justify-start md:items-center justify-center md:w-[50%]">
            <div className="container flex flex-col md:align-center align-start md:justify-center justify-start md:gap-10 md:px-20 md:mb-5 p-2 mb-2">
              <div>
                <h2 className="text-3xl" style={{ color: textColor }}>
                  Contactez-nous
                </h2>
              </div>
              <div>
                <p className="text-wrap pr-2">
                  N'hésitez pas à nous laisser un commentaire ou nous proposer
                  vos projets de branding, développement web, campagnes de
                  communication ...
                </p>
              </div>
            </div>

            <div className="container w-[100%] flex flex-col align-center justify-center md:mb-5 md:px-20 ">
              <form className="flex flex-col align-center  justify-center md:gap-5 p-2 gap-2 pb-5 md:w-[100%]">
                <input
                  style={{ borderColor: borderColor }}
                  className="border border-gray-600 py-2 px-2 transition-all"
                  type="text"
                  placeholder="Votre nom"
                />
                <input
                  style={{ borderColor: borderColor }}
                  className="border border-gray-600 py-2 px-2 transition-all"
                  type="email"
                  placeholder="Votre email"
                />
                <textarea
                  style={{ borderColor: borderColor }}
                  className="border border-gray-600 py-2 px-2 transition-all"
                  placeholder="Votre message"
                ></textarea>
                <button
                  className="transition-all py-2 px-2 mt-5 font-bold text-lg"
                  type="submit"
                  style={{ color: backgroundColor, backgroundColor: textColor }}
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-col align-center justify-center self-center w-50 md:w-[50%] h-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              fill={textColor}
            >
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0l57.4-43c23.9-59.8 79.7-103.3 146.3-109.8l13.9-10.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176 0 384c0 35.3 28.7 64 64 64l296.2 0C335.1 417.6 320 378.5 320 336c0-5.6 .3-11.1 .8-16.6l-26.4 19.8zM640 336a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 353.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z" />
            </svg>
          </div>
        </motion.section>

        <motion.section
        /**
          onViewportEnter={() => {
            setBackgroundColor("#785459");
            setTextColor("#ffffff");
            setBorderColor("#ffffff");
          }}
          viewport={{ amount: 0.6 }}
          **/
        >
          <footer
            className="footer w-[100%] md:h-[10vh] flex flex-col items-center justify-center  mt-10 flex flex-row align-center justify-center"
            style={{ borderColor: borderColor }}
          >
            <div className="container flex flex-col md:flex-row items-center justify-center md:gap-10 mb-5">
              <a
                className="font-bold self-center text-center opacity-0 md:opacity-1"
                style={{ color: textColor }}
                href="mailto:leserpat@hotmail.com"
              >
                Me contacter
              </a>
              <div className="opacity-0 md:opacity-1">
                <p>|</p>
              </div>
              <p
                className="font-bold self-center text-center"
                style={{ color: textColor }}
              >
                &copy; My Animated Website. Tous droits réservés. | Site de test
                !
              </p>
            </div>
          </footer>
        </motion.section>
      </div>
    </AnimateBgSection>
  );
}
