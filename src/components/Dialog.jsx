import { forwardRef } from "react";
import { createPortal } from "react-dom";

const Dialog = forwardRef(function Dialog({ children }, ref) {
  return createPortal(
    <dialog
      ref={ref}
      className="p-0 border-0 rounded backdrop:bg-black/50 backdrop:backdrop-blur-sm m-auto"
    >
      <form
        method="dialog"
        className="bg-white p-6 rounded shadow-md flex flex-col items-start space-y-4"
      >
        {children}
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Close
        </button>
      </form>
    </dialog>,
    document.querySelector("#modal")
  );
});

export default Dialog;
