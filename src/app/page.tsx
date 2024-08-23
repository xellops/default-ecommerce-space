"use client";
import { Home } from "@/components/Home";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <main>
      <Suspense>
        <Home />
      </Suspense>
    </main>
  );
}
