import React, { HTMLAttributes } from "react";

export const Section = ({
  children,
  className,
  ...otherProps
}: HTMLAttributes<any>) => {
  return (
    <section {...otherProps} className={`mb-4 last:mb-0 ${className}`}>
      {children}
    </section>
  );
};
