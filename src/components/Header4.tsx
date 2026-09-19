import React from "react";
import { spectralBridgeRegular } from "@/fonts/font";

type Header = {
  text: string;
};

function Header4({ text }: Header) {
  return (
    <h4
      className={`${spectralBridgeRegular.className} text-[3.5vw] leading-[1]`}
    >
      {text}
    </h4>
  );
}

export default Header4;
