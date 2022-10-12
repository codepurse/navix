import { PropTypes } from "prop-types";
import React, { useEffect, useState } from "react";

Box.propTypes = {
  bgColor: PropTypes.string,
  br: PropTypes.number,
  color: PropTypes.string,
  p: PropTypes.any, // padding
  pl: PropTypes.string, // paddingleft
  pr: PropTypes.string, // paddingRight
  pt: PropTypes.any, // paddingTop
  pb: PropTypes.any, //paddingBottom
  w: PropTypes.any, // width
  h: PropTypes.any, // height
  minH: PropTypes.any, // minHeight
  maxH: PropTypes.any, // maxHeight
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
  const [filterStyle, setFilterStyle] = useState([]);
  var { style, ...other } = props;
  const propsStyle = {
    width: props?.w,
    height: props?.h,
    padding: props?.p,
    paddingLeft: props?.pl,
    paddingRight: props?.pr,
    paddingTop: props?.pt,
    paddingBottom: props?.pb,
    minHeight: props?.minH,
    maxHeight: props?.maxH,
    margin: props?.margin,
    marginTop: props?.mt,
    background: props?.background,
    backgroundColor: props?.bgColor,
    marginBottom: props?.mb,
    overflow: props?.overflow,
    overflowX: props?.overflowX,
    overflowY: props?.overflowY,
    dp: props?.display,
    backgroundImage: props?.bgGradient,
    borderRadius: props?.br,
    border: props?.border,
    borderWidth: props?.borderWidth,
    borderColor: props?.borderColor,
    borderTop: props?.borderTop,
    borderBottom: props?.borderBottom,
    borderLeft: props?.borderLeft,
    borderRight: props?.borderRight,
    verticalAlign: props?.vAlign,
    flex: props?.flex,
    gap: props?.gap,
    rowGap: props?.rowGap,
    flexDirection: props?.flexDirection,
    flexGrow: props?.flexGrow,
    flexWrap: props?.flexWrap,
    order: props?.order,
    flexShrink: props?.flexShrink,
    pointerEvents: props?.pointerEvents,
    visibility: props?.visibility,
    wordBreak: props?.wordBreak,
    cursor: props?.cursor,
    float: props?.float,
    boxSize: props?.boxSize,
    boxShadow: props?.boxShadow,
    backdropFilter: props?.backdropFilter,
    columnCount: props?.columnCount,
    columnGap: props?.columnGap,
    fontSize: props?.fontSize,
    textAlign: props?.alignText,
    fontWeight: props?.fontWeight,
    color: props?.color,
    ...style,
  };

  useEffect(
    (e) => {
      Object.keys(propsStyle).forEach((key) => {
        if (propsStyle[key] === undefined) {
          delete propsStyle[key];
        }
      });
      setFilterStyle(propsStyle);
    },
    [props]
  );

  return (
    <div className={props.className} style={filterStyle} {...other}>
      {props.children}
    </div>
  );
}
