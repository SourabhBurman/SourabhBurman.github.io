import React from "react";
import type { Metadata } from "next";
import { allProjects } from "@/utils/works";
import { workTitleConverter, workTitleReverter } from "@/utils/workTitleConverter";
import WorkDetailMainPage from "@/components/WorkDetail/MainPage";

type Params = {
  params: { title: string };
};

export function generateStaticParams() {
  return allProjects.map((project) => ({ title: workTitleConverter(project.title) }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const title = allProjects.find((p) => workTitleConverter(p.title) === params.title)?.title ?? workTitleReverter(params.title);
  return {
    title: `${title} — Project`,
  };
}

export default function WorkPage({ params }: Params) {
  const title = allProjects.find((p) => workTitleConverter(p.title) === params.title)?.title ?? workTitleReverter(params.title);
  const project = allProjects.find((p) => p.title === title);

  if (!project) {
    return (
      <div className="px-[6vw] flex items-center justify-center h-screen">
        <p>Project not found.</p>
      </div>
    );
  }

  return <WorkDetailMainPage project={project} />;
}
