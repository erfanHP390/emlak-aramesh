"use client";
import React, { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import styles from "./ScrollTopBtn.module.css";
import ThemeToggleButton from "../ThemeToggleButton/ThemeToggleButton";
import Providers from "@/app/providers";

export default function ScrollTopBtn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const toggleVisibility = () => {
        if (window.pageYOffset > 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
    }
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Providers>
        <ThemeToggleButton isScrollButtonVisible={isVisible} />
        <button
          className={`${styles.scroll_to_top} ${
            isVisible ? `${styles.visible}` : ""
          }`}
          onClick={scrollToTop}
          aria-label="بازگشت به بالای صفحه"
        >
          <FaAngleDoubleUp size={28} />
        </button>
      </Providers>
    </>
  );
}
