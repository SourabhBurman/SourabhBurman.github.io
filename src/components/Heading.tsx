import React from "react";
import { satoshiLight } from "@/fonts/font";

type HeadingProps = {
  text: string;
  className?: string;
};

function Heading({ text, className }: HeadingProps) {
  return (
    <p
      className={`${satoshiLight.className} ${className ?? ""} text-[12px] sm:text-[13px] 2xl:text-[20px] uppercase tracking-widest text-lightText60 dark:text-darkText60`}
    >
      {text}
    </p>
  );
}

export default Heading;
