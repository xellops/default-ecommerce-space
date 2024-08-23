import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  type?: "full" | "limited";
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className={`w-full mx-auto md:max-w-screen-lg px-2 md:px-4`}>
      {children}
    </div>
  );
};
