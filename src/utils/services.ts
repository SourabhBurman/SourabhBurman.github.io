import { Services } from "@/types/type";
import Image1 from "../../public/images/services/list/serviceList_1.jpg";
import Image2 from "../../public/images/services/list/serviceList_2.jpg";
import Image3 from "../../public/images/services/list/serviceList_3.jpg";
import Image4 from "../../public/images/services/list/serviceList_4.jpg";

const services = [
  {
    title: "Full Stack Development",
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "GraphQL",
      "GSAP",
      "Framer Motion",
      "SEO",
      "git",
    ],
    description:
      "I build full-stack web applications from the ground up — designing the architecture, implementing the frontend, wiring up the backend, and deploying the finished product. I lean into Next.js and TypeScript for a performant, type-safe, and SEO-friendly foundation that scales well as products grow.",
    image: Image2,
  },
  {
    title: "Backend Development",
    technologies: [
      "Node.js",
      "Express",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
      "Supabase",
      "REST API",
      "Docker",
    ],
    description:
      "Solid backends power great products. I design and implement RESTful APIs, database schemas, authentication systems, and cloud infrastructure. I'm comfortable with both SQL and NoSQL databases and prefer managed services like Firebase and Supabase to ship production-ready backends quickly without sacrificing control.",
    image: Image1,
  },
  {
    title: "UI/UX Design",
    technologies: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "Color Theory",
      "Typography",
      "Design Systems",
    ],
    description:
      "Good design is invisible — it just works. I prototype in Figma, drawing inspiration from design systems and visual references to craft interfaces that feel both premium and intuitive. I'm meticulous about typography, spacing, and color, ensuring that every component earns its place on the screen.",
    image: Image3,
  },
  {
    title: "Performance & Optimization",
    technologies: [
      "Core Web Vitals",
      "Lighthouse",
      "Image Optimization",
      "Code Splitting",
      "Caching",
      "SSR/SSG",
    ],
    description:
      "Fast websites convert better and rank higher. I audit, profile, and optimize web applications for performance — reducing bundle sizes, implementing smart caching strategies, optimizing images, and leveraging Next.js rendering modes (SSR, SSG, ISR) to deliver the best possible Core Web Vitals scores.",
    image: Image4,
  },
];

export const allServices: Services[] = [];

services.forEach((item, i) => {
  allServices.push({
    ...item,
    id: i + 1,
  });
});
