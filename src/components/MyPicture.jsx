"use client";

import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import React from 'react';

const MyPicture = () => {
  return (
    <CardContainer className="flex items-center justify-center w-[8rem] h-[8rem] md:w-[20rem] md:h-[20rem]">
      <CardBody className="relative w-full h-full rounded-full overflow-hidden border border-gray-200 dark:border-gray-700 group/card hover:shadow-2xl hover:shadow-purple-500/[0.4] transition-shadow duration-300">
        <CardItem
          translateZ="80"
          rotateX={6}
          rotateY={6}
          className="w-full h-full"
        >
          <img
            src="./logo.jpg"
            className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover/card:scale-105"
            alt="Profile picture"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default MyPicture;