"use client";
import React from "react";
import Link from "next/link";
import { spectralBridgeRegular } from "@/fonts/font";
import { motion } from "framer-motion";
import MainButton from "../MainButton";

function MainPage() {
  const EASING = [0.83, 0, 0.17, 1];

  return (
    <div className="px-[6vw] min-h-screen flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: EASING }}
      >
        <h1
          className={`${spectralBridgeRegular.className} text-[25vw] leading-[1] tracking-tight text-lightText20 dark:text-darkText20`}
        >
          404
        </h1>
        <p className="text-[18px] sm:text-[22px] mb-8">
          This page doesn&apos;t exist.
        </p>
        <div className="flex justify-center">
          <MainButton text="Go Home" link="/" />
        </div>
      </motion.div>
    </div>
  );
}

export default MainPage;
