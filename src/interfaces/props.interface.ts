import {
  ChangeEvent,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from "react";
import { ActionDefinition } from "./action";
import { FilePondProps } from "react-filepond";

export interface PaginationProps {
  current: number;
  total: number;
  itemsPerPage?: number;
  onPageChange: (page: number) => any | null;
}

export interface ModalProps {
  title?: string | ReactNode;
  children: any;
  isOpen?: boolean;
  onClose?: (isOpen: boolean) => void;
  disabled?: boolean;
}

export interface ActionsProps {
  actions: ActionDefinition[];
}

export interface FormErrorProps extends HTMLAttributes<any> {
  message?: any;
}

export interface RadioCheckboxOption {
  name: string;
  value: string | number;
}

export interface MultiOptionsInputProps extends InputHTMLAttributes<any> {
  options: RadioCheckboxOption[];
  direction?: "row" | "column";
}

export interface RadioInputProps extends MultiOptionsInputProps {}
export interface CheckboxInputProps extends MultiOptionsInputProps {}

export interface FileUploaderProps extends FilePondProps {
  onChange?: (e: { name: string; files: any[] }) => void;
  name: string;
}
