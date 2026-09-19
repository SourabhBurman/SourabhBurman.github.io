"use client";
import React from "react";
import Link from "next/link";
import { allProjects } from "@/utils/works";
import { workTitleConverter } from "@/utils/workTitleConverter";
import { spectralBridgeRegular } from "@/fonts/font";

function PrevNext({ currentId }: { currentId: number }) {
  const prev = allProjects.find((p) => p.id === currentId - 1);
  const next = allProjects.find((p) => p.id === currentId + 1);

  return (
    <div className="flex justify-between py-[6vh] border-t-[1px] border-t-lightText20 dark:border-t-darkText20 mt-[6vh]">
      {prev ? (
        <Link href={`/works/${workTitleConverter(prev.title)}`}>
          <div className="group">
            <p className="text-[12px] uppercase tracking-widest text-lightText60 dark:text-darkText60 mb-1">
              ← Previous
            </p>
            <p
              className={`${spectralBridgeRegular.className} text-[4vw] group-hover:opacity-70 transition-opacity duration-300`}
            >
              {prev.title}
            </p>
          </div>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link href={`/works/${workTitleConverter(next.title)}`}>
          <div className="group text-right">
            <p className="text-[12px] uppercase tracking-widest text-lightText60 dark:text-darkText60 mb-1">
              Next →
            </p>
            <p
              className={`${spectralBridgeRegular.className} text-[4vw] group-hover:opacity-70 transition-opacity duration-300`}
            >
              {next.title}
            </p>
          </div>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}

export default PrevNext;
