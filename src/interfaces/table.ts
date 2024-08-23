import { ReactNode } from "react";

export interface TableRowAction<T = any> {
  title: string | ReactNode;
  onClick: (row: T) => void | Promise<void>;
}
