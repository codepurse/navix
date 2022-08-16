import React, {
  createRef,
  forwardRef,
  Fragment,
  useEffect,
  useState,
} from "react";
import { AlertIcon, AlertType } from "./alertIcon";

const AlertComponent = forwardRef(
  (
    {
      type,
      message,
      toastData: {
        index,
        removeToast,
        toastOptions: { autoClose = true, closeDuration = 3000 },
      },
    },
    ref
  ) => {
    const progressDuration = autoClose ? closeDuration : false;
    return (
      <div className={AlertType(type)} ref={ref} type={type}>
        {/* {progressDuration && (
          <div
            className="toastBar"
            style={{ "--duration": progressDuration + "ms" }}
          />
        )} */}
        <div className="toastIcon">{AlertIcon(type)}</div>
        <div className="toastMessage">{message}</div>
        <div className="toastClose" onClick={() => removeToast(index)}>
          {AlertIcon("close")}
        </div>
      </div>
    );
  }
);

const refs = [];

const availablePostions = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
  "top-center",
  "bottom-center",
];
const initialOptions = {
  reverse: false,
  position: "top-center",
};
const AlertContainer = ({ options = initialOptions }) => {
  const [toasts, setToasts] = React.useState([]);
  const [removedToasts, setRemovedToasts] = useState([]);
  const toastPosition = availablePostions.includes(options.position)
    ? options.position
    : initialOptions.position;

  const addToast = (
    type,
    message,
    toastOptions = { autoClose: true, closeDuration: 3000 }
  ) => {
    const ref = createRef();
    const toastData = {
      index: toasts.length,
      removeToast,
      toastOptions,
    };
    const toast = (
      <AlertComponent
        type={type}
        message={message}
        toastData={toastData}
        ref={ref}
      />
    );
    setToasts([...toasts, toast]);
    refs.push(ref);
    queueMicrotask(() => showToast(Math.max(refs.length - 1, 0)));
    if (toastOptions.closeDuration) {
      setTimeout(
        () => removeToast(toastData.index),
        toastOptions.closeDuration
      );
    }
  };

  const showToast = (index) => {
    if (index > -1) {
      refs[index].current.classList.add("show");
    }
  };

  const removeToast = (index) => {
    const ref = refs[index];
    setRemovedToasts([...removedToasts, index]);
    if (ref) {
      ref.current.classList.add("hide");
      refs[index] = null;
    }
  };

  useEffect(() => {
    Alert.add = addToast;
  }, [toasts, refs]);

  return (
    <div
      className={`toastArea${
        options.reverse ? " reverse" : ""
      } area-${toastPosition}`}
    >
      {toasts.map((toast, index) => {
        return <Fragment key={index}>{toast}</Fragment>;
      })}
    </div>
  );
};

export const Alert = {
  add: null,
  info: (message, options) => Alert.add("info", message, options),
  success: (message, options) => Alert.add("success", message, options),
  warning: (message, options) => Alert.add("warning", message, options),
  error: (message, options) => Alert.add("error", message, options),
};

export default AlertContainer;
