"use client";
import React, { useRef, Fragment } from "react";
import { Projects } from "@/types/type";
import { spectralBridgeRegular } from "@/fonts/font";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Paragraph from "../Paragraph";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";
import PrevNext from "./PrevNext";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Heading from "../Heading";
import Banner from "../Banner";

function MainPage({
  project,
}: {
  readonly project: Projects;
}) {
  const introImageDiv = useRef(null);
  const introImage = useRef(null);
  useGSAP(() => {
    if (!introImage.current) return;
    gsap.to(introImage.current, {
      y: "10%", ease: "none",
      scrollTrigger: { trigger: introImageDiv.current, start: "top bottom", end: "bottom top", scrub: true },
    });
  });

  const headerVariant = {
    initial: {
      y: "100%",
      rotateZ: 5,
    },
    animate: {
      y: "0%",
      rotateZ: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  const introImageVariant = {
    initial: {
      opacity: 0,
      scale: 0.9,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  const textVariant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const textDelayVariant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <div className="px-[6vw]">
      <Navbar />
      <main>
      {/* CAROUSEL WITH TOP IMAGE */}
      <section className="mt-[8vh]">
        <div className="overflow-hidden">
          <div className="flex flex-nowrap gap-[15vw] animate-carousel-slow">
            {[
              project?.title,
              project?.title,
              project?.title,
              project?.title,
              project?.title,
              project?.title,
              project?.title,
            ].map((proj, i) => {
              return (
                <motion.h1
                  key={`${proj}_${i}`}
                  aria-hidden={i > 0 ? true : undefined}
                  variants={headerVariant}
                  initial="initial"
                  animate="animate"
                  className={`${spectralBridgeRegular.className} leading-[1] mb-[-.25em] text-[23vw] uppercase whitespace-nowrap`}
                >
                  {proj}
                </motion.h1>
              );
            })}
          </div>
        </div>
        <motion.div
          variants={introImageVariant}
          initial="initial"
          animate="animate"
          className="w-full object-cover overflow-hidden mt-[4vh]"
          ref={introImageDiv}
        >
          {project && project?.introImage && project?.title && (
            <Image
              src={project?.introImage}
              alt={`${project?.title} opening`}
              className="w-full h-full scale-110 origin-center"
              placeholder="blur"
              ref={introImage}
            />
          )}
        </motion.div>
      </section>
      {/* INFO ABOUT WEBSITE, GITHUB, TOOLS, YEAR, DURATION, ROLES, AND DESC */}
      <section className="my-[9vh] flex flex-col sm:flex-row gap-8">
        <motion.div
          variants={textVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex-1"
        >
          {/* VISIT WEBSITE AND GITHUB */}
          <div className="flex items-center justify-normal sm:justify-between md:justify-normal gap-[8em] sm:gap-0 md:gap-[8em]">
            <div className="group flex items-center gap-2">
              <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                <a href={project?.website} target="_blank" rel="noopener noreferrer">
                  Visit Website
                </a>
              </p>
              <div className="group-hover:translate-x-1 duration-300">
                <ArrowUpRightIcon className="w-4" strokeWidth={1} />
              </div>
            </div>
            {project.github && (
            <div className="group flex items-center gap-2">
              <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                <a
                  href={`https://github.com/${project.github}`}
                  target="_blank" rel="noopener noreferrer"
                >
                  Visit Github
                </a>
              </p>
              <div className="group-hover:translate-x-1 duration-300">
                <ArrowUpRightIcon className="w-4" strokeWidth={1} />
              </div>
            </div>
            )}
          </div>
          {/* TOOLS AND TECHNOLOGIES */}
          <div className="mt-6">
            <Heading text="tools" />
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 w-full lg:w-[70%]">
              {project?.technologies?.map((proj) => {
                return (
                  <Fragment key={proj}>
                    <Banner text={proj} />
                  </Fragment>
                );
              })}
            </div>
          </div>
          <div className="flex gap-20 mt-6">
            {/* YEAR & DURATION */}
            <div>
              <div>
                {project.year && <Heading text="Year" />}
                {project.year && <Paragraph text={project?.year} />}
              </div>
              <div className="mt-3">
                {project.duration && <Heading text="Duration" />}
                {project.duration && <Paragraph text={project?.duration} />}
              </div>
            </div>
            {/* ROLES */}
            <div>
              <Heading text="Roles" />
              <div className="">
                {project?.roles?.map((role) => {
                  return (
                    <Fragment key={role}>
                      <Paragraph text={role} className="capitalize" />
                    </Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
        {/* INTRO PARAGRAPH SECTION */}
        <motion.div
          variants={textDelayVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex-1 lg:flex-[1.5] flex flex-col gap-y-6 overflow-hidden"
        >
          {project?.description1?.map((desc) => {
            return (
              <div key={desc}>
                <Paragraph text={desc} className="text-[18px]" />
              </div>
            );
          })}
        </motion.div>
      </section>
      {/* PROJECT IMAGES DISPLAY */}
      <section>
        {project?.imagesLandscape
          ? project.imagesLandscape.map((img, i) => {
              return (
                <div key={img.alt} className="w-full object-cover mb-8">
                  <Image
                    src={img.image}
                    alt={img.alt}
                    className="w-full"
                    placeholder={
                      img.image.src.split("/").pop()?.split(".").pop() === "gif"
                        ? "empty"
                        : "blur"
                    }
                    unoptimized={
                      img.image.src.split("/").pop()?.split(".").pop() ===
                        "gif"
                    }
                  />
                </div>
              );
            })
          : null}
      </section>
      <section className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {project?.imagesPortrait
            ? project.imagesPortrait.map((img, i) => {
                return (
                  <div key={img.alt} className="w-full sm:max-h-[105vh] object-cover">
                    <Image
                      src={img.image}
                      alt={img.alt}
                      className="w-full h-full"
                      placeholder={
                        img.image.src.split("/").pop()?.split(".").pop() ===
                        "gif"
                          ? "empty"
                          : "blur"
                      }
                      unoptimized={
                        img.image.src.split("/").pop()?.split(".").pop() ===
                          "gif"
                      }
                    />
                  </div>
                );
              })
            : null}
        </div>
      </section>
      {project.description2?.map((text) => <div key={text} className="my-[8vh] md:w-[65%] ml-auto"><Paragraph text={text} /></div>)}
      <PrevNext currentId={project.id} />
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
