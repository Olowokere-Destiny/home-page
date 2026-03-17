"use client";

import Image, { StaticImageData } from "next/image";

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
  return (
    <div className="bg-white p-3 rounded-md shadow-md overflow-hidden border border-gray-200">

      <div className="relative w-full h-36">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-lg font-semibold">
          {title}
        </h3>

        <p className="text-sm">
          {description}
        </p>

        <button className="mt-3 bg-[#FF3E1D] text-white py-2 rounded-md font-medium hover:opacity-90 transition text-sm">
          Read More
        </button>
      </div>
    </div>
  );
}