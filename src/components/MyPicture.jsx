"use client";

import Image from "next/image";
import React from 'react';

const MyPicture = () => {
  return (
    <div className="flex items-center justify-center w-[8rem] h-[8rem] md:w-[20rem] md:h-[20rem]">
      <div className="relative w-full h-full rounded-full overflow-hidden border border-gray-200 dark:border-gray-700 group/card hover:shadow-2xl hover:shadow-purple-500/[0.4] transition-shadow duration-300">
        <div
          className="w-full h-full"
        >
          <Image
            src="/logo.jpg"
            width={100}
            height={100}
            className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover/card:scale-105"
            alt="Profile picture"
          />
        </div>
      </div>
    </div>
  );
};

export default MyPicture;