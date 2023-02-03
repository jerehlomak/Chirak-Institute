import React from "react";
import Skeleton from "./Skeleton";

const SkeletonTable = () => {
  return (
    <div className=''>
      <Skeleton type='title' />
      <Skeleton type='text' />
      <Skeleton type='text' />
    </div>
  );
};

export default SkeletonTable;
