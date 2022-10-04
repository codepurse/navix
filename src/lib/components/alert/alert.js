import { PropTypes } from "prop-types";
import React, {
  createRef,
  forwardRef,
  Fragment,
  useEffect,
  useState,
} from "react";
import { AlertIcon, AlertType } from "./alertIcon";

AlertContainer.propTypes = {
  stackable: PropTypes.bool,
  position: PropTypes.string,
  reverse: PropTypes.bool,
  duration: PropTypes.number,
  autoClose: PropTypes.bool,
  rendered: PropTypes.node,
};

AlertContainer.defaultProps = {
  stackable: true,
  position: "top-center",
  reverse: false,
  duration: 3000,
  autoClose: true,
};

const AlertComponent = forwardRef(
  (
    {
      type,
      message,
      children,
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
      <Fragment>
        {children ? (
          <div ref={ref}>{children}</div>
        ) : (
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
        )}
      </Fragment>
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

export default function AlertContainer({
  position,
  reverse,
  stackable,
  duration,
  rendered,
}) {
  const [toasts, setToasts] = React.useState([]);
  const [removedToasts, setRemovedToasts] = useState([]);
  const toastPosition = availablePostions.includes(position)
    ? position
    : position;

  const addToast = (
    type,
    message,
    toastOptions = { autoClose: true, closeDuration: duration }
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
        children={rendered}
      />
    );

    if (!stackable) {
      if (toasts.length < 1) {
        setToasts([...toasts, toast]);
        refs.push(ref);
      }
    } else {
      setToasts([...toasts, toast]);
      refs.push(ref);
    }
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
    // pag  hindi stackable
    if (!stackable) {
      setToasts([]);
      refs.length = 0;
    }
    if (ref) {
      try {
        ref.current.style.display = "none";
      } catch (error) {}
    }
  };

  useEffect(() => {
    Alert.add = addToast;
  }, [toasts, refs]);

  return (
    <div
      className={`toastArea${reverse ? " reverse" : ""} area-${toastPosition}`}
    >
      {toasts.map((toast, index) => {
        return <Fragment key={index}>{toast}</Fragment>;
      })}
    </div>
  );
}

export const Alert = {
  add: null,
  info: (message, options) => Alert.add("info", message, options),
  success: (message, options) => {
    Alert.add("success", message, options);
  },
  warning: (message, options) => Alert.add("warning", message, options),
  error: (message, options) => Alert.add("error", message, options),
};
