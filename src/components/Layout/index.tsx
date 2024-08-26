import React, { HTMLAttributes } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Section } from "../Section";

export const Layout = ({
  children,
  className,
  ...otherProps
}: HTMLAttributes<any>) => {
  return (
    <>
      <Header />
      <Section className="min-h-[90vh]">{children}</Section>
      <Footer />
    </>
  );
};
