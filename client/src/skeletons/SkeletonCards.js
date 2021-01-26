import React from "react";
import SkeletonElement from "./SkeletonElement";
import "./skeleton.css";

function SkeletonCards() {
  return (
    <div className="skeleton-card">
      <SkeletonElement type="title" />
      <SkeletonElement type="title" />
      <SkeletonElement type="title" />
      <SkeletonElement type="title" />
      <SkeletonElement type="title" />
      <SkeletonElement type="button" />
    </div>
  );
}

export default SkeletonCards;
