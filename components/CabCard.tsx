"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: StaticImageData;
}

export default function ServiceCard({
  title,
  description,
  image,
}: ServiceCardProps) {
  const [active, setActive] = useState(false);

  return (
    <div
      className="relative bg-white rounded-md shadow-md overflow-hidden border border-gray-200 cursor-pointer px-4 pt-4"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onTouchStart={() => setActive((v) => !v)}
    >
      <span
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          transform: "translate(50%, 50%)",
          width: active ? "220%" : "4rem",
          height: active ? "220%" : "4rem",
          borderRadius: "9999px",
          background: "#FF3E1D",
          transition:
            "width 0.55s cubic-bezier(0.4,0,0.2,1), height 0.55s cubic-bezier(0.4,0,0.2,1)",
          zIndex: 0,
        }}
      />

      <div className="relative w-full h-44" style={{ zIndex: 10 }}>
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div
        className="relative p-4 flex flex-col gap-2 transition-opacity duration-150"
        style={{ zIndex: 10, opacity: active ? 0 : 1 }}
      >
        <h3 className="sm:text-base lg:text-[20px] font-semibold">{title}</h3>
        <p className="text-sm sm:text-base lg:text-[18px] leading-relaxed">
          {description}
        </p>
      </div>

      <div
        className="absolute inset-0 flex flex-col justify-end p-4 gap-2 pointer-events-none transition-opacity duration-300 mx-4  mt-4"
        style={{
          opacity: active ? 1 : 0,
          transitionDelay: active ? "0.2s" : "0s",
          zIndex: 20,
        }}
      >
        <h3 className="text-base lg:text-[20px] font-semibold text-white">
          {title}
        </h3>
        <p className="text-sm sm:text-base lg:text-[18px] text-white/90 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
