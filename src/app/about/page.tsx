import React from "react";
import type { Metadata } from "next";
import AboutMainPage from "@/components/About/MainPage";
import { person } from "@/config/person";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${person.firstName} ${person.lastName}, a ${person.tagline}.`,
};

export default function AboutPage() {
  return <AboutMainPage />;
}
