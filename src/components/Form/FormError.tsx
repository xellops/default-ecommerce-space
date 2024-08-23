import { FormErrorProps } from "@/interfaces/props.interface";

export const FormError = (props: FormErrorProps) => {
  return (
    <>
      {props.message && (
        <div {...props} className={`text-red-600 text-sm ${props.className}`}>
          {props.message}
        </div>
      )}
    </>
  );
};
