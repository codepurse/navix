import { PropTypes } from "prop-types";
import React, {
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { AccordionContext } from "../../context/accordionContext";

const ACCORDION_ICON_ALIGN = ["left", "right"];

AccordionItem.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node,
  alignIcon: PropTypes.oneOf(ACCORDION_ICON_ALIGN),
  onclick: PropTypes.node,
  active: PropTypes.bool,
  _TYPE: PropTypes.string,
};

AccordionItem.defaultProps = {
  __TYPE: "AccordionItem",
};

export default function AccordionItem(props) {
  const value = useContext(AccordionContext);
  const itemsRef = useRef();
  const [spaces, setSpaces] = useState("intact");
  const [open, setOpen] = useState(false);

  useEffect(
    (e) => {
      setSpaces(value.space);
      if (props.active) {
        setOpen(true);
      }
    },
    [props]
  );

  useEffect(
    (e) => {
      if (!open) {
        itemsRef.current.style.height = "auto";
      } else {
        itemsRef.current.style.height = itemsRef.current.scrollHeight + "px";
      }
    },
    [open]
  );

  return (
    <div
      className={
        spaces === "separeted"
          ? "nvxAccordionItem nvxAccordionSeparated"
          : "nvxAccordionItem "
      }
      ref={itemsRef}
      onClick={(e) => {
        setOpen((value) => !value);
      }}
    >
      <div className="flex-container">
        <div
          className="flex-items"
          style={{ order: props.alignIcon === "left" ? 1 : 0 }}
        >
          <p style={{ marginBottom: "0px" }}>{props.title}</p>
        </div>
        <div className="flex-items">
          <i
            className={
              open ? "nvxAccordionArrow nvxAccordionShow" : "nvxAccordionArrow"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </i>
        </div>
      </div>
      {((e) => {
        if (open) {
          return <Fragment>{props.children}</Fragment>;
        } else {
          return null;
        }
      })()}
    </div>
  );
}
