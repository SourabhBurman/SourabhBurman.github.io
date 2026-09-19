"use client";
import React, { useRef } from "react";
import { spectralBridgeRegular } from "@/fonts/font";
import Image1 from "../../../public/images/general/home/about_image4.jpg";
import Image2 from "../../../public/images/general/home/about_image3.jpg";
import Image3 from "../../../public/images/general/home/about_image6.jpg";
import Image from "next/image";
import Paragraph from "../Paragraph";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { easeInOut, motion } from "framer-motion";
import Header3 from "../Header3";
import { person } from "@/config/person";

function About() {
  const image1 = useRef(null);
  const image2Div = useRef(null);

  useGSAP(() => {
    gsap.to(image1.current, {
      y: "10%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: image1.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    const tl = gsap.timeline({
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: image2Div.current,
        start: "top bottom",
        end: "+=3000px",
        scrub: true,
      },
    });

    tl.from(image2Div.current, { yPercent: 10 }).to(image2Div.current, {
      yPercent: -5,
    });
  });

  const appear = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.6, ease: easeInOut, delay: 0.4 },
    },
  };

  return (
    <section className="py-[15vh]">
      <div>
        <div>
          <Header3 phrase={person.aboutLine1} className="pr-[15vw]" />
          <Header3 phrase={person.aboutLine2} className="pr-[15vw]" />
        </div>
        <div>
          <Header3 phrase={person.aboutLine3} className="pl-[15vw]" />
          <Header3 phrase={person.aboutLine4} className="pl-[15vw]" />
        </div>
      </div>
      <div className="mt-10 flex flex-col-reverse md:flex-row md:items-center gap-y-4 md:gap-y-0">
        <div className="md:flex-1 object-cover object-center overflow-hidden">
          <Image
            src={Image3}
            alt="workspace"
            className="w-full h-full scale-110"
            ref={image1}
            placeholder="blur"
          />
        </div>
        <div className="md:flex-1 flex justify-center items-center">
          <div
            className="w-full h-full md:w-[70%] object-cover object-left-top overflow-hidden"
            ref={image2Div}
          >
            <Image
              src={Image2}
              alt="mobile app mockup"
              className="w-full h-full"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      <motion.div
        className="flex mt-8"
        variants={appear}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="xs:flex-[1] hidden xs:block"></div>
        <div className="xs:flex-[2.5] md:flex-[1.2] flex flex-col sm:flex-row gap-8">
          <div className="flex-1">
            <Paragraph text={person.aboutParagraph1} />
          </div>
          <div className="flex-1">
            <Paragraph text={person.aboutParagraph2} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
