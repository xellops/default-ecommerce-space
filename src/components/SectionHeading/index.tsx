import React, { HTMLAttributes } from "react";

export const SectionHeading = ({
  children,
  className,
  ...otherProps
}: HTMLAttributes<any>) => {
  return (
    <h2
      {...otherProps}
      className={`pb-2 mb-2 font-medium text-lg border-b ${className}`}
    >
      {children}
    </h2>
  );
};
