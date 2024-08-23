import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";

type LoaderSize = "sm" | "md" | "lg";

export const LoaderSizeValueMap = {
  sm: "25",
  md: "35",
  lg: "45",
};

export interface LoaderProps {
  size?: LoaderSize;
  loaderText?: string | null;
  className?: string;
  color?: string;
}

export const Loader = (props: LoaderProps) => {
  const [loaderText, setLoaderText] = useState<string>("Up in a second..");

  useEffect(() => {
    setTimeout(() => {
      setLoaderText("Okay, maybe two seconds?..");
    }, 3000);

    setTimeout(() => {
      setLoaderText("Uhhh..probably a network issue. Please wait..");
    }, 8000);
  }, []);

  return (
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center gap-4">
      <TailSpin
        visible={true}
        height={LoaderSizeValueMap[props.size || "lg"]}
        width={LoaderSizeValueMap[props.size || "lg"]}
        color={props.color || "blue"}
        ariaLabel="revolving-tailspin-loading"
        wrapperClass={props.className || ""}
      />
      <p className="font-bold">{props.loaderText ?? null}</p>
    </div>
  );
};
