import { useSpaceConfiguration } from "@/contexts";
import React, { HTMLAttributes } from "react";

export const SectionHeading = ({
  children,
  className,
  ...otherProps
}: HTMLAttributes<any>) => {
  const { spaceConfiguration } = useSpaceConfiguration();
  return (
    <h2
      {...otherProps}
      style={{ color: spaceConfiguration.brandColor }}
      className={`pb-2 mb-2 font-medium text-md sm:text-lg border-b ${className}`}
    >
      {children}
    </h2>
  );
};
