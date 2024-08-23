"use client";
import { Adverts } from "@/components/Adverts/Adverts";
import { Header } from "@/components/Header";
import { Section } from "@/components/Section";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <main>
      <Suspense>
        <div className="grid">
          <Section>
            <Header />
          </Section>
          <Section>
            <Adverts />
          </Section>
        </div>
      </Suspense>
    </main>
  );
}