import React from "react";
import type { Metadata } from "next";
import NotFoundMainPage from "@/components/NotFound/MainPage";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
};

export default function NotFound() {
  return <NotFoundMainPage />;
}
