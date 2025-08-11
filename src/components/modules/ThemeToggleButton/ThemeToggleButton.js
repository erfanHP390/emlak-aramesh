"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import styles from "./ThemeToggleButton.module.css";

export default function ThemeToggleButton({ isScrollButtonVisible }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className={`${styles.toggle_btn} ${
        isScrollButtonVisible ? styles.with_scroll_button : ""
      }`}
      onClick={toggleTheme}
      aria-label="تغییر تم"
    >
      {theme === "dark" ? <FaSun size={28} /> : <FaMoon size={28} />}
    </button>
  );
}
