import React, { useState } from "react";
import styles from "../styles/Backtotop.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowUp,
  faCircleArrowDown,
} from "@fortawesome/free-solid-svg-icons";


const ScrollButton = ({ direction  } : {direction:string}) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scroll = () => {
    const scrollTo = direction === "top" ? 0 : document.documentElement.scrollHeight;
    window.scrollTo({
      top: scrollTo,
      behavior: "smooth",
    });
  };

  if (typeof window !== "undefined") {
    // Code qui utilise `window`
    window.addEventListener("scroll", toggleVisible);
  }

  return (
    <div className={direction === "top" ? styles.backtotop : styles.backtobottom}>
      <FontAwesomeIcon
        icon={direction === "top" ? faCircleArrowUp : faCircleArrowDown}
        onClick={() => scroll()}
        size={"2xl"}
        style={{ display: visible ? "inline" : "none" }}
        className={direction === "top" ?  styles.backtotopButton : styles.backtobottomButton }
      />
    </div>
  );
};

export default ScrollButton;
