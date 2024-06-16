import React from "react";

export default function SkeletonCard() {
  return (
    <div className="w-full border rounded-md p-5 mb-6 animate-pulse">
      <div className="flex justify-between">
        <div className="h-6 bg-gray-300 rounded w-1/3" />
        <div className="h-6 bg-gray-300 rounded w-1/6" />
      </div>
      <div className="py-8">
        <div className="h-24 bg-gray-300 rounded w-full" />
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full" />
          <div className="h-4 bg-gray-300 rounded w-6" />
        </div>
        <div className="h-4 bg-gray-300 rounded w-1/4" />
      </div>
    </div>
  );
}
