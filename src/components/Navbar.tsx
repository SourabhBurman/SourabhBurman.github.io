"use client";

import React, { useState } from "react";
import DarkLightSwitch from "./DarkLightSwitch";
import Link from "next/link";
import { rigata } from "@/fonts/font";
import Menu from "./Menu";
import { motion } from "framer-motion";
import { person } from "@/config/person";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = {
    initial: {
      y: "-100%",
    },
    animate: {
      y: "0%",
      transition: {
        duration: 0.5,
        ease: [0.64, 0, 0.78, 0],
      },
    },
  };

  return (
    <>
      <motion.header
        variants={nav}
        initial="initial"
        animate="animate"
        className="z-[99] duration-300 sticky top-0 bg-transparent mix-blend-multiply dark:mix-blend-difference"
      >
        <div className="flex justify-between items-center">
          {/* INITIALS LOGO */}
          <Link href={"/"}>
            <p
              className={`${rigata.className} text-[3em] 2xl:text-[5em] tracking-tighter`}
            >
              {person.initials}
            </p>
          </Link>
          {/* DARK/LIGHT MODE TOGGLE */}
          <DarkLightSwitch />
          {/* MENU BUTTON */}
          <button type="button" aria-expanded={menuOpen} aria-controls="navigation-menu" onClick={() => setMenuOpen(true)} className="2xl:text-[26px]">
            Menu
          </button>
        </div>
      </motion.header>
      <Menu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
    </>
  );
}

export default Navbar;
