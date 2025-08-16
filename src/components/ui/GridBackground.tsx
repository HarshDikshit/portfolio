import { cn } from "@/lib/utils";
import React from "react";

export function GridBackground() {
  return (
    <div className="absolute top-0 left-0 flex  md:h-[50rem] w-full items-center justify-center bg-white dark:bg-black/[0.2] ">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          // Light mode grid with adjustable opacity using rgba
          "[background-image:linear-gradient(to_right,rgba(228,228,231,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.5)_1px,transparent_1px)]",
          // Dark mode grid with adjustable opacity using rgba
          "dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,38,38,0.03)_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
    </div>
  );
}