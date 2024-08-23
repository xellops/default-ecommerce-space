"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Section } from "../Section";
import { Header } from "../Header";

export const Home = () => {
  return (
    <div className="grid">
      <Section>
        <Header />
      </Section>
    </div>
  );
};
