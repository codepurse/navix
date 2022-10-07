import { PropTypes } from "prop-types";
import React from "react";

Box.propTypes = {
  bgColor: PropTypes.string,
  br: PropTypes.number,
  color: PropTypes.string,
  p: PropTypes.any, // padding
  pl: PropTypes.string, // paddingleft
  pr: PropTypes.string, // paddingRight
  pt: PropTypes.any, // paddingTop
  pb: PropTypes.any, //paddingBottom
  w: PropTypes.number, // width
  h: PropTypes.number, // height
  minH: PropTypes.number, // minHeight
  maxH: PropTypes.number, // maxHeight
  m: PropTypes.string, // margin
  ml: PropTypes.any, // marginLeft
  mr: PropTypes.any, // marginRight
  mt: PropTypes.any, // marginTop
  mb: PropTypes.any, // marginBottom
  overflow: PropTypes.any,
  overflowX: PropTypes.any,
  overflowY: PropTypes.any,
  display: PropTypes.any,
  bgGradient: PropTypes.any,
  border: PropTypes.any,
  borderWidth: PropTypes.any,
  borderColor: PropTypes.any,
  borderTop: PropTypes.any,
  borderBottom: PropTypes.any,
  borderLeft: PropTypes.any,
  borderRight: PropTypes.any,
  vAlign: PropTypes.any,
  gap: PropTypes.any,
  rowGap: PropTypes.any,
  flex: PropTypes.any,
  flexGrow: PropTypes.any,
  flexWrap: PropTypes.any,
  justifyItems: PropTypes.any,
  justifyContent: PropTypes.any,
  order: PropTypes.any,
  flexShrink: PropTypes.any,
  visibility: PropTypes.any,
  wordBreak: PropTypes.any,
  cursor: PropTypes.any,
  pointerEvents: PropTypes.any,
  float: PropTypes.any,
  boxSize: PropTypes.any,
  background: PropTypes.any,
  boxShadow: PropTypes.any,
  backdropFilter: PropTypes.any,
  color: PropTypes.any,
  columnCount: PropTypes.number,
  columnGap: PropTypes.string,
};

export default function Box(props) {
  var { style, ...other } = props;
  const propsStyle = {
    width: props?.w + "px",
    height: props?.h + "px",
    padding: props?.p + "px",
    paddingLeft: props?.pl + "px",
    paddingRight: props?.pr + "px",
    paddingTop: props?.pt + "px",
    paddingBottom: props?.pb + "px",
    minHeight: props?.minH + "px",
    maxHeight: props?.maxH + "px",
    margin: props?.margin + "px",
    marginTop: props?.mt + "px",
    background: props?.background ?? null,
    backgroundColor: props?.bgColor ?? null,
    marginBottom: props?.mb + "px" ?? null,
    overflow: props?.overflow ?? null,
    overflowX: props?.overflowX ?? null,
    overflowY: props?.overflowY ?? null,
    dp: props?.display ?? null,
    backgroundImage: props?.bgGradient ?? null,
    borderRadius: props?.br + "px" ?? null,
    border: props?.border ?? null,
    borderWidth: props?.borderWidth + "px" ?? null,
    borderColor: props?.borderColor ?? null,
    borderTop: props?.borderTop + "px" ?? null,
    borderBottom: props?.borderBottom + "px" ?? null,
    borderLeft: props?.borderLeft + "px" ?? null,
    borderRight: props?.borderRight + "px" ?? null,
    verticalAlign: props?.vAlign ?? null,
    flex: props?.flex ?? null,
    gap: props?.gap + "px" ?? null,
    rowGap: props?.rowGap + "px" ?? null,
    flexDirection: props?.flexDirection ?? null,
    flexGrow: props?.flexGrow ?? null,
    flexWrap: props?.flexWrap ?? null,
    order: props?.order ?? null,
    flexShrink: props?.flexShrink ?? null,
    pointerEvents: props?.pointerEvents ?? null,
    visibility: props?.visibility ?? null,
    wordBreak: props?.wordBreak ?? null,
    cursor: props?.cursor ?? null,
    float: props?.float ?? null,
    boxSize: props?.boxSize ?? null,
    boxShadow: props?.boxShadow ?? null,
    backdropFilter: props?.backdropFilter ?? null,
    columnCount: props?.columnCount ?? null,
    columnGap: props?.columnGap ?? null,
    fontSize: props?.fontSize ?? null,
    textAlign: props?.alignText ?? null,
    fontWeight: props?.fontWeight ?? null,
    color: props?.color ?? null,
    ...style,
  };

  return (
    <div className={props.className} style={propsStyle} {...other}>
      {props.children}
    </div>
  );
}
