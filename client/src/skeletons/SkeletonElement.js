import React from "react";

function SkeletonElement({ type }) {
  const classes = `skeleton ${type}`;

  return <div className={`${classes} animate`}></div>;
}

export default SkeletonElement;
