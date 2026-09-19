"use client";
import React, { useState } from "react";
import { allServices } from "@/utils/services";
import ServicesList from "./ServicesList";

function Services() {
  const [index, setIndex] = useState(0);

  return (
    <section className="py-[10vh]" id="services">
      <div className="flex flex-col lg:flex-row gap-x-[10vw]">
        <div className="lg:flex-1">
          {allServices.map((service, i) => (
            <ServicesList
              key={service.id}
              item={service}
              i={i}
              index={index}
              setIndex={setIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
