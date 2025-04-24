"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";
import { useEffect } from "react";
type MyComponentProps = {
    children: ReactNode;
    getTextColor:any
  };



export default function animateBackground({ children,getTextColor }: MyComponentProps) {
  const { scrollYProgress } = useScroll(); // scrollYProgress va de 0 à 1

  // On transforme la valeur du scroll en une couleur CSS
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#ffffff", "#000000"] // du blanc au noir (change comme tu veux)
  );

  useEffect(() => {
    // Fonction qui calcule la couleur en fonction du scroll
    const handleScroll = () => {
        const scrollPosition = window.scrollY; // Position du scroll
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  
        // Calcul de la fraction de scroll entre 0 et 1
        const scrollFraction = Math.min(Math.max(scrollPosition / maxScroll, 0), 1);
  
        // Calcul d'une couleur basée sur la fraction de scroll (interpolation linéaire)
        const r = Math.round(255 * scrollFraction); // Varie de 0 à 255 pour rouge
        const g = Math.round(255 * scrollFraction); // Varie de 0 à 255 pour vert
        const b = Math.round(255 * scrollFraction); // Varie de 0 à 255 pour bleu
  
        // Convertir la couleur en rgb (progressivement de noir à blanc)
        const color = `rgb(${r}, ${g}, ${b})`;
  
        // Passe la couleur au composant parent
        getTextColor(color);
      };
  

    // Attacher l'événement de scroll
    window.addEventListener("scroll", handleScroll);

    // Nettoyer l'événement lors du démontage
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [getTextColor]);

  return (
    <motion.div
      className=""
      style={{ backgroundColor }}
    >
      {children}
    </motion.div>
  );
}
