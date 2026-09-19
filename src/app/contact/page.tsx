import React from "react";
import type { Metadata } from "next";
import ContactMainPage from "@/components/Contact/MainPage";
import { person } from "@/config/person";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${person.firstName} ${person.lastName}.`,
};

export default function ContactPage() {
  return <ContactMainPage />;
}
