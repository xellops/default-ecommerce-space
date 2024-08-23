import { ModalProps } from "@/interfaces/props.interface";

export const Modal = (props: ModalProps) => {
  const handleClose = () => {
    if (props.disabled) return;
    if (typeof props.onClose === "function") {
      props.onClose(false);
    }
  };

  return props.isOpen ? (
    <div className="fixed top-0 left-0 h-svh w-full z-50">
      <div className="relative h-svh px-16">
        <div
          className="absolute blur-2xls backdrop-blur-xl backdrop-brightness-50 w-full top-0 left-0 h-svh bg-stone-900 opacity-70 z-50"
          onClick={handleClose}
        ></div>
        <div className="absolute z-50 top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 w-full max-w-xl px-4">
          <div className="bg-white px-4 py-6 rounded-lg">
            {props.title ? (
              <div className="pb-4 mb-4 border-b border-solid">
                <h2 className="font-medium">{props.title}</h2>
              </div>
            ) : null}

            <div>{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
