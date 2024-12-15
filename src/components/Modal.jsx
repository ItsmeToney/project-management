import { createPortal } from "react-dom";
import Button from "./Button";
import { useImperativeHandle, useRef } from "react";
export default function Modal({ children, ref }) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-xl "
    >
      {children}
      <form method="dialog" className="text-right mt-4">
        <Button>Close</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
}
