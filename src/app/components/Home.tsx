"use client";

import Image from "next/legacy/image";
import { motion } from "framer-motion";
import { useState } from "react";
import AnimateBgSection from "./AnimateBgSection";
import InfiniteScrollImages from "./InfiniteScrollImages";
import ParallaxText from "./ParralaxText";
export default function HomeComponent() {
  const [backgroundColor, setBackgroundColor] = useState("#000000"); // noir par défaut
  const [textColor, setTextColor] = useState("#fff"); // noir par défaut
  const [borderColor, setBorderColor] = useState("#fff"); // noir par défaut

  const pictures = [
    {
      url: "/assets/pictures/pexels-cottonbro-4621567.jpg",
      width: 400,
      height: 150,
    },
    {
      url: "/assets/pictures/pexels-cottonbro-6583373.jpg",
      width: 400,
      height: 200,
    },
    {
      url: "/assets/pictures/pexels-designecologist-1779487.jpg",
      width: 500,
      height: 900,
    },
    {
      url: "/assets/pictures/pexels-leeloothefirst-7598017.jpg",
      width: 600,
      height: 900,
    },
    {
      url: "/assets/pictures/pexels-pixabay-39284.jpg",
      width: 500,
      height: 900,
    },
    {
      url: "/assets/pictures/pexels-ron-lach-9849319.jpg",
      width: 300,
      height: 200,
    },
    {
      url: "/assets/pictures/pexels-thisisengineering-3862365.jpg",
      width: 400,
      height: 400,
    },
    {
      url: "/assets/pictures/pexels-thisisengineering-3862372.jpg",
      width: 300,
      height: 300,
    },
  ];

  return (
    <AnimateBgSection backgroundColor={backgroundColor}>
      <motion.header
        viewport={{ amount: 0.3 }}
        onViewportEnter={() => {
          // setBackgroundColor("#000000");
          // setTextColor("#ffffff");
          // setBorderColor("#ffffff");
        }}
        className="header md:w-[100%] md:h-[90vh] md:px-5 md:pt-5 md:mb-10"
      >
        <div
          style={{
            borderColor: borderColor,
            backgroundImage:
              "url(./Leonardo_Phoenix_09_A_vibrant_multicolored_banner_with_a_bold_2.jpg)",
            backgroundRepeat: "no-repeat",
            //backgroundSize: "cover",
            //backgroundPosition: "center",
          }}
          className="
          md:w-[100%] h-[30vh] md:h-full md:px-5 bg-top md:bg-center bg-contain md:bg-cover
          md:border rounded flex flex-row 
          md:justify-between md:items-center 
          justify-start items-start"
        >
          <h1
            className={`font-kanit md:text-7xl`}
            style={{ color: textColor, opacity: 0 }}
          >
            Bienvenue sur Mon Site
          </h1>

     
        </div>
        <nav className="md:h-[100%] ">
            <ul className="flex flex-col md:flex-row md:w-[100%] md:h-[100%] md:items-end md:justify-start md:py-20 md:gap-10 md:px-10  border">
              <li>
                <a
                  className="text-lg font-bold w-50 text-center hover:bg-slate-800 transition-all p-2 rounded"
                  href="#a-propos"
                  style={{ color: textColor }}
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  className="text-lg font-bold w-50 text-center hover:bg-slate-800 transition-all p-2 rounded"
                  href="#services"
                  style={{ color: textColor }}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="text-lg font-bold w-50 text-center hover:bg-slate-800 transition-all p-2 rounded"
                  href="#contact"
                  style={{ color: textColor }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
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
          <div className="container md:w-[50%] h-[20vh] flex flex-col items-start justify-center px-5 md:px-20 md:gap-10">
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
          className="about md:h-[90vh] flex flex-col items-center justify-center md:mt-5 md:p-5 w-[100%] md:border rounded-lg"
          style={{ borderColor: borderColor }}
        >
          <div className="flex flex-col md:flex-row w-[100%] h-[100%]">
            <div className="container md:w-[50%] h-[100%] flex flex-col align-center justify-center md:gap-10 p-2 px-3 md:px-20">
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

            <div className="md:w-[50%] h-[30vh] md:h-[100%] relative">
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
          <div className="container w-[50%] flex flex-col align-center justify-center md:gap-10 md:px-20 md:mb-5 p-2">
            <h2 className="text-3xl mb-5" style={{ color: textColor }}>
              Nos services
            </h2>
          </div>

          <div className="service-grid flex flex-col md:flex-row align-center justify-around w-[100%] pb-5">
            <div className="service border h-100 m-2 md:w-100 pb-5 p-2 flex flex-col items-center justify-around gap-5 rounded shadow-xl">
              <h3 className="px-5 text-2xl" style={{ color: textColor }}>
                Développement
              </h3>
              <p style={{ color: textColor }}>
                Sites web modernes et performants.
              </p>

              <Image
                src={"/assets/icons/optimisation-des-pages.gif"}
                width={200}
                height={200}
                alt="icon"
                unoptimized
              />
            </div>

            <div className="service border h-100 m-2 md:w-100 pb-5 p-2 flex flex-col items-center justify-around gap-5 rounded shadow-xl">
              <h3 className="px-5 text-2xl" style={{ color: textColor }}>
                Design UX/UI
              </h3>
              <p style={{ color: textColor }}>
                Interfaces intuitives et attractives.
              </p>

              <Image
                src={"/assets/icons/engagement.gif"}
                width={200}
                height={200}
                alt="icon"
                unoptimized
              />
            </div>

            <div className="service border h-100 m-2 md:w-100 pb-5 p-2 flex flex-col items-center justify-around gap-5 rounded shadow-xl">
              <h3 className="px-5 text-2xl" style={{ color: textColor }}>
                SEO
              </h3>
              <p style={{ color: textColor }}>
                Optimisation pour les moteurs de recherche.
              </p>

              <Image
                src={"/assets/icons/referencement.gif"}
                width={200}
                height={200}
                alt="icon"
                unoptimized
              />
            </div>
          </div>
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
          <div className="flex flex-col md:flex-row items-start justify-start md:items-center justify-center md:w-[50%]">
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
             <div className="opacity-0 md:opacity-1"><p>|</p></div> 
              <p className="font-bold self-center text-center" style={{ color: textColor }}>
                &copy; My Animated Website. Tous droits réservés.
              </p>
            </div>
          </footer>
        </motion.section>
      </div>
    </AnimateBgSection>
  );
}
