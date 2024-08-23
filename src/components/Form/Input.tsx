import {
  CheckboxInputProps,
  MultiOptionsInputProps,
  RadioInputProps,
} from "@/interfaces/props.interface";
import {
  InputHTMLAttributes,
  OptionHTMLAttributes,
  SelectHTMLAttributes,
} from "react";

export const Input = (props: InputHTMLAttributes<any>) => {
  return (
    <input
      {...props}
      className={`p-2 border border-slate-300 rounded-md text-stone-700 focus:outline-2 focus:shadow-md shadow-black disabled:opacity-75 ${props.className}`}
    />
  );
};

export const TextArea = (props: InputHTMLAttributes<any>) => {
  return (
    <textarea
      {...props}
      className={`p-2 min-h-64 max-h-64 border border-slate-300 rounded-md text-stone-700 focus:outline-2 focus:shadow-md shadow-black disabled:opacity-75 ${props.className}`}
    />
  );
};

export const SearchInput = (props: InputHTMLAttributes<any>) => {
  return (
    <Input
      {...props}
      type="search"
      className={`w-full max-w-screen-lg p-2 border border-slate-300 rounded-md text-stone-700 focus:outline-2 focus:shadow-md shadow-black disabled:opacity-75 ${props.className}`}
    />
  );
};

export const Select = (props: SelectHTMLAttributes<any>) => {
  return (
    <select
      {...props}
      className={`w-full max-w-screen-lg p-2 border border-slate-300 rounded-md text-stone-700 focus:outline-2 focus:shadow-md shadow-black disabled:opacity-75 ${props.className}`}
    >
      {props.children}
    </select>
  );
};

export const SelectOption = (props: OptionHTMLAttributes<any>) => {
  return (
    <option
      {...props}
      className={`w-full max-w-screen-lg p-2 border border-slate-300 rounded-md text-stone-700 focus:outline-2 focus:shadow-md shadow-black disabled:opacity-75 ${props.className}`}
    >
      {props.children}
    </option>
  );
};

export const MultiOptionsInput = (props: MultiOptionsInputProps) => {
  const options = props.options || [];

  const layoutStyling =
    props.direction === "row" ? "flex gap-4 flex-wrap" : "grid gap-2";

  return (
    <div className={layoutStyling}>
      {options.map((option, i) => {
        const id = `${props.name}-radio-option-${i}`;

        return (
          <div
            className="flex items-center gap-1"
            key={`multi-option-input-${props.name}-${i}`}
          >
            <input
              type="radio"
              {...props}
              key={id}
              id={id}
              value={option.value}
              className={`p-2 border border-slate-300 rounded-md text-stone-700 focus:outline-2 focus:shadow-md shadow-black disabled:opacity-75 ${props.className}`}
            />
            <label className="text-sm" htmlFor={id}>
              {option.name}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export const Radio = (props: RadioInputProps) => {
  return <MultiOptionsInput {...props} type="radio" />;
};

export const Checkbox = (props: CheckboxInputProps) => {
  return <MultiOptionsInput {...props} type="checkbox" />;
};
