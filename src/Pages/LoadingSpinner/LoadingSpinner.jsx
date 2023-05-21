import React, { useEffect } from "react";

const LoadingSpinner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex justify-center items-center h-[calc(100vh-68px)]">
      <p className="text-7xl font-thin">PLay G</p>
      <div className="w-14 h-14 border-8 border-dashed rounded-full animate-spin mt-5 border-primary"></div>
      <p className="text-7xl font-thin">....</p>
    </div>
  );
};

export default LoadingSpinner;