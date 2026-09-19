import React from "react";
import Header3 from "../Header3";
import { person } from "@/config/person";

function ProcessParagraph() {
  return (
    <section className="my-[15vh]">
      <div className="w-[90%] mx-auto md:ml-auto md:mr-0">
        <div className="flex items-start gap-[8vw]">
          <p className="text-[12.5px] sm:text-[16px]">My mission</p>
          <div>
            <Header3 phrase={person.missionLine1} />
            <Header3 phrase={person.missionLine2} />
          </div>
        </div>
        <div>
          <Header3 phrase={person.missionLine3} />
          <Header3 phrase={person.missionLine4} />
          <Header3 phrase={person.missionLine5} />
        </div>
      </div>
    </section>
  );
}

export default ProcessParagraph;
