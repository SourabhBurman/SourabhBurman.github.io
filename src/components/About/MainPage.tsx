"use client";
import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { spectralBridgeRegular, satoshiLight } from "@/fonts/font";
import Image from "next/image";
import AboutIntro1 from "../../../public/images/general/home/about_image3.jpg";
import AboutIntro2 from "../../../public/images/general/home/about_image4.jpg";
import AboutOutro1 from "../../../public/images/general/home/about_image6.jpg";
import AboutOutro2 from "../../../public/images/general/home/hero_image.jpg";
import Paragraph from "../Paragraph";
import MainButton from "../MainButton";
import { items } from "@/utils/resume";
import { person } from "@/config/person";
import { motion } from "framer-motion";

function MainPage() {
  const EASING = [0.83, 0, 0.17, 1];

  const rise = {
    initial: { y: "100%" },
    animate: {
      y: 0,
      transition: { duration: 1, ease: EASING, delay: 0.3 },
    },
  };

  const appear = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1], delay: 0.5 },
    },
  };

  return (
    <div className="px-[6vw]">
      <Navbar />
      <main>
        <section className="mt-[8vh]">
          <div className="w-[75%] sm:w-[70%] lg:w-[65%] mx-auto flex items-center flex-col">
            <motion.h1 variants={rise} initial="initial" animate="animate" className={`${spectralBridgeRegular.className} relative z-10 dark:mix-blend-exclusion text-[10vw] sm:text-[8vw] lg:text-[6.5vw] mb-[-6vh] text-center leading-[.9]`}>
              {person.aboutPageHeading1} {person.aboutPageHeading2}
            </motion.h1>
            <div className="sm:w-[80%] lg:w-[60%]"><Image src={AboutOutro2} alt="A calm workspace" className="w-full h-auto" placeholder="blur" /></div>
            <div className="sm:w-[65%] lg:w-[50%] mt-8"><Paragraph text={person.aboutParagraph1} className="text-center" /></div>
          </div>
        </section>

        {/* ABOUT ME SUMMARY */}
        <section className="mt-[8vh] pt-[6vh] border-t-[1px] border-t-lightText20 dark:border-t-darkText20">
          <div className="flex flex-col md:flex-row gap-x-[8vw] gap-y-6">
            <p className={`${satoshiLight.className} text-[14px] md:text-[18px]`}>
              About me
            </p>
            <div className="flex-1">
              <motion.h3
                variants={appear}
                initial="initial"
                animate="animate"
                className={`${spectralBridgeRegular.className} indent-[10%] text-[4.5vw] leading-[1]`}
              >
                {person.aboutPageBio}
              </motion.h3>
            </div>
          </div>
        </section>

        {/* PORTRAIT IMAGES + HEADING */}
        <section className="mt-[5vh]">
          <div className="flex flex-col md:flex-row items-end gap-6 md:pl-[8vw]">
            <div className="flex-1 object-cover">
              <Image
                src={AboutIntro1}
                alt="workspace"
                className="w-full h-full"
                placeholder="blur"
              />
            </div>
            <div className="flex-[1.5]">
              <div className="w-full object-cover">
                <Image
                  src={AboutIntro2}
                  alt="tech setup"
                  className="w-full h-full"
                  placeholder="blur"
                />
              </div>
              <div className="mt-[4vh]">
                <h2
                  className={`${spectralBridgeRegular.className} text-[8vw] md:text-[6vw] leading-[.9] uppercase`}
                >
                  {person.aboutPageHeading1}
                </h2>
                <h2
                  className={`${spectralBridgeRegular.className} text-[8vw] md:text-[6vw] leading-[.9] uppercase`}
                >
                  {person.aboutPageHeading2}
                </h2>
              </div>
            </div>
          </div>

          {/* PARAGRAPHS */}
          <div className="flex flex-col md:flex-row gap-x-[5vw] mt-8 md:mt-[8vh] pr-0 pl-[8vw] md:pr-[6vw] md:pl-0">
            <div className="flex-1 hidden md:block"></div>
            <div className="flex-1">
              <Paragraph text={person.aboutPageParagraph1} />
              <div className="mt-6">
                <Paragraph text={person.aboutPageParagraph2} />
              </div>
            </div>
            <div className="flex-1 mt-6 md:mt-0">
              <Paragraph text={person.aboutPageParagraph3} />
              <div className="mt-6">
                <Paragraph text={person.aboutPageParagraph4} />
              </div>
            </div>
          </div>
        </section>

        {/* RESUME */}
        <section className="mt-[6vh] border-b-[1px] border-b-lightText20 dark:border-b-darkText20 md:border-none">
          {items.map((item, l) => (
            <div
              className="flex flex-col md:flex-row gap-5 border-t-[1px] border-t-lightText20 dark:border-t-darkText20 md:border-none"
              key={item.category}
            >
              <div className="flex-1 py-5">
                <Paragraph text={item.category} />
              </div>
              <div
                className={`flex-[3] md:border-t-[1px] md:border-t-lightText20 md:dark:border-t-darkText20 ${l === items.length - 1 &&
                  "md:border-b-[1px] md:border-b-lightText20 md:dark:border-b-darkText20"
                  } md:px-3 py-5`}
              >
                {item.list.map((list, i) => (
                  <div
                    key={`${list.institution}-${list.role ?? list.primary_qualification}`}
                    className={`${i !== item.list.length - 1 ? "mb-8" : "mb-0"
                      } flex items-start justify-between gap-8`}
                  >
                    <div>
                      <p className="text-[16px] md:text-[18px]">
                        {list.institution}
                        {list.location && <>, <span className="italic">{list.location}</span></>}
                      </p>
                      <div>
                        <p className="text-[12px] md:text-[13.5px]">
                          {list.role
                            ? list.role
                            : `${list.primary_qualification}, ${list.primary_concentration}`}
                        </p>
                        {list.secondary_concentration ? (
                          <p className="text-[12px] md:text-[13.5px]">{`${list.secondary_qualification}, ${list.secondary_concentration}`}</p>
                        ) : null}
                      </div>
                    </div>
                    <p className="text-[13px] md:text-[16px]">
                      {list.duration}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="flex justify-end mt-8">
            <MainButton text="View Full Resume" link="/resume.pdf" />
          </div>
        </section>

        {/* OUTRO IMAGES */}
        <section className="mt-[8vh]">
          <div className="flex items-start gap-3 pl-[20vw]">
            <div className="flex-1 object-cover mt-16">
              <Image
                src={AboutOutro1}
                alt=""
                className="w-full h-full"
                placeholder="blur"
              />
            </div>
            <div className="flex-1 object-cover">
              <Image
                src={AboutOutro2}
                alt=""
                className="w-full h-full"
                placeholder="blur"
              />
            </div>
          </div>
        </section>

        {/* CLOSING */}
        <section className="my-[4vh] md:my-[8vh]">
          <h3
            className={`${spectralBridgeRegular.className} indent-[10%] text-[4.5vw] leading-[1]`}
          >
            {person.aboutPageClosing}
          </h3>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
