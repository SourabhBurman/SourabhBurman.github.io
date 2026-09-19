"use client";

import React, { useState } from "react";
import { satoshiLight, satoshiLightItalic } from "@/fonts/font";
import Link from "next/link";

type Button = {
  text: string;
  fontSize?: string;
  email?: string;
  link?: string;
  classNameWidth?: string;
  newTab?: boolean;
};

function MainButton({ text, fontSize, link, email, classNameWidth, newTab = false }: Button) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonContent = (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`cursor-pointer duration-500 flex justify-center items-center rounded-full border-[1px] text-[15px] border-lightText dark:border-darkText hover:text-lightBg hover:bg-lightText dark:hover:text-darkBg dark:hover:bg-darkText bg-transparent ${
        classNameWidth ? classNameWidth : "w-[12em]"
      } h-[2.5em]`}
    >
      <div className="overflow-hidden">
        {isHovered ? (
          <div className="flex flex-nowrap gap-8 animate-carousel">
            {[text, text, text, text, text, text, text, text, text].map(
              (word, i) => (
                <p
                  key={`${word}_${i}`}
                  className={`${satoshiLightItalic.className} ${fontSize} whitespace-nowrap`}
                >
                  {word}
                </p>
              )
            )}
          </div>
        ) : (
          <p className={`${satoshiLight.className} ${fontSize}`}>{text}</p>
        )}
      </div>
    </div>
  );

  if (link) {
    return <Link href={link} target={newTab ? "_blank" : undefined} rel={newTab ? "noopener noreferrer" : undefined}>{buttonContent}</Link>;
  }

  return <a href={`mailto:${email}`}>{buttonContent}</a>;
}

export default MainButton;
