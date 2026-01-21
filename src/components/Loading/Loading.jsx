import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <p className="text-gray-500 text-sm">Loading products...</p>
      </div>
    </div>
  );
};

export default Loading;
