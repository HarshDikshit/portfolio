"use client"

import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { GridBackground } from "./ui/GridBackground";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { CloudDownload } from "lucide-react";
import MyPicture from "./MyPicture";

const HeroSection = () => {
  const handleDownload = () => {
    // Replace with your public Google Drive file URL
    const fileUrl = 'https://drive.google.com/file/d/1QJNG6qEb-w4mqk0jRqgJI8aYwEAVldv1/view';

    // Extract file ID from the URL
    const fileIdMatch = fileUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (!fileIdMatch) {
      alert('Invalid Google Drive URL');
      return;
    }
    const fileId = fileIdMatch[1];

    // Construct direct download link
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = ''; // Browser will use the file's original name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className=" pt-3 min-h-screen justify-center items-center flex flex-col">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <GridBackground />
      <div className="flex flex-col-reverse h-full  md:flex-row justify-center items-center mx-auto my-auto  gap-x-10  relative  z-10 ">
        <div className="max-w-[89vw] md:max-w-[2xl] lg:max-w-[50vw] flex flex-col items-center justify-center  md:items-start">
          <h2 className="uppercase tracking-widest text-xs text-center md:text-left text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl md:text-left"
            words="Transforming Concepts into Seamless Experiences"
          />

          <p className="text-center md:text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Harsh, a Software Developer based in India.
          </p>

          <MagicButton
            title="Download My CV"
            position="left"
            icon={<CloudDownload />}
            handleClick={handleDownload}
            
          />
        </div>
        <MyPicture />
      </div>
    </div>
  );
};

export default HeroSection;
