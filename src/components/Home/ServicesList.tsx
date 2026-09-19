"use client";
import React from "react";
import Image from "next/image";
import { Services } from "@/types/type";
import { satoshiLight } from "@/fonts/font";
import { motion } from "framer-motion";

type ServiceListProps = {
  item: Services;
  i: number;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};

function ServicesList({ item, i, index, setIndex }: ServiceListProps) {
  return (
    <div
      onMouseEnter={() => setIndex(i)}
      className={`${
        i === index
          ? "border-b-lightText dark:border-b-darkText"
          : "border-b-lightText20 dark:border-b-darkText20"
      } cursor-default border-b-[1px] py-[4vh] flex flex-col lg:flex-row gap-x-[8vw] gap-y-4 justify-between duration-300`}
    >
      <div className="flex gap-x-4 items-start">
        <p className="text-[13px] text-lightText60 dark:text-darkText60 mt-1">
          {String(i + 1).padStart(2, "0")}
        </p>
        <h6 className="text-[26px] 2xl:text-[48px] mb-[6vh] lg:mb-0">
          {item.title}
        </h6>
      </div>
      <div className={`${i === index ? "opacity-100" : "opacity-0"} duration-300 lg:mt-auto lg:flex-[1.5]`}>
        <p className="text-[15px] sm:text-[16px] 2xl:text-[24px]">
          {item.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[12px] border-[1px] border-lightText40 dark:border-darkText40 px-2 py-[2px] rounded-full text-lightText60 dark:text-darkText60"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesList;
