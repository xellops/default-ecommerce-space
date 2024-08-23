import { ReactNode } from "react";

export interface ActionDefinition {
  title: string | ReactNode;
  onClick: (data: any) => void | Promise<void>;
}
