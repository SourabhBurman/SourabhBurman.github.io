import React from "react";
import { satoshiLight } from "@/fonts/font";

type Header = {
  text: string;
};

function Header5({ text }: Header) {
  return (
    <h5
      className={`${satoshiLight.className} text-[1.2rem] leading-[1]`}
    >
      {text}
    </h5>
  );
}

export default Header5;
