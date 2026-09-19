import React from "react";
import TransitionCarousel from "./TransitionCarousel";
import Link from "next/link";

function FooterTransition() {
  const closingTerms = [
    "Let's Talk",
    "Let's Talk",
    "Let's Talk",
    "Let's Talk",
    "Let's Talk",
  ];

  return (
    <section className="my-[4vh]">
      <Link href="/contact">
        <TransitionCarousel
          compact
          classNameRotate="rotate-0"
          array={closingTerms}
          className="py-2 rounded-full flex justify-center hover:bg-lightText hover:text-lightBg dark:hover:bg-darkText dark:hover:text-darkBg duration-300 h-fit"
        />
      </Link>
    </section>
  );
}

export default FooterTransition;
