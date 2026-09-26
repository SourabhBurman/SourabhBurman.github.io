"use client";

import React, { useState, useEffect } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import PreLoading from "./PreLoading";
import Hero from "./Hero";
import Services from "./Services";
import Works from "./Works";
import About from "./About";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Process from "./Process";
import FooterTransition from "./FooterTransition";
import ProcessParagraph from "./ProcessParagraph";

function MainPage() {
  const [count, setCount] = useState(7);
  const lenis = useLenis();

  useEffect(() => {
    if (count !== 0) return;
    let frame = 0;
    let cancelled = false;
    function scrollToSection() {
      const id = window.location.hash.slice(1);
      if (id !== "works" && id !== "services") return;
      window.cancelAnimationFrame(frame);
      void document.fonts.ready.then(() => {
        if (cancelled) return;
        frame = window.requestAnimationFrame(() => {
          frame = window.requestAnimationFrame(() => {
            if (cancelled || window.location.hash !== `#${id}`) return;
            const target = document.getElementById(id);
            if (!target) return;
            if (lenis) {
              lenis.resize();
              const top = target.getBoundingClientRect().top + window.scrollY;
              lenis.scrollTo(top, { immediate: true, force: true });
            } else {
              target.scrollIntoView({ block: "start", behavior: "instant" });
            }
          });
        });
      });
    }
    scrollToSection();
    window.addEventListener("hashchange", scrollToSection);
    window.addEventListener("popstate", scrollToSection);
    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", scrollToSection);
      window.removeEventListener("popstate", scrollToSection);
    };
  }, [count, lenis]);

  useEffect(() => {
    if (["#works", "#services"].includes(window.location.hash)) {
      setCount(0);
      return;
    }
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev === 0) {
          clearInterval(timer);
          return 0;
        } else return prev - 1;
      });
    }, 1000);
  }, []);

  return (
    <>
      {count > 0 ? (
        <PreLoading count={count} />
      ) : (
        <div className="px-[6vw]">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Works />
            <Services />
            <ProcessParagraph />
            <Process />
            <FooterTransition />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default MainPage;
