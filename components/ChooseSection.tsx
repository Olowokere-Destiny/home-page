"use client";

import Image, { StaticImageData } from "next/image";
import suv from "../assets/images/suv.png";
import sedan from "../assets/images/sedan.png";
import hatchback from "../assets/images/hatchback.png";
import van from "../assets/images/comfort.png";
import seaterIcon from "../assets/icons/seater-icon.svg";
import bagIcon from "../assets/icons/bag-icon.svg";

interface Feature {
  icon: StaticImageData;
  label: string;
}

interface Ride {
  name: string;
  type: string;
  description: string;
  image: StaticImageData;
  features: Feature[];
}

const rides: Ride[] = [
  {
    name: "Hatchback",
    type: "Budget Friendly",
    description: "Perfect for quick city rides and short road trips.",
    image: hatchback,
    features: [
      { icon: seaterIcon, label: "AC & 4 Seater" },
      { icon: bagIcon, label: "2 Bags" },
    ],
  },
  {
    name: "Sedan",
    type: "Comfort Ride",
    description: "Ideal for business trips and comfortable long drives.",
    image: sedan,
    features: [
      { icon: seaterIcon, label: "AC & 4 Seater" },
      { icon: bagIcon, label: "3 Bags" },
    ],
  },
  {
    name: "SUV",
    type: "Family Trips",
    description: "Spacious and powerful – perfect for family outstation trips.",
    image: suv,
    features: [
      { icon: seaterIcon, label: "AC & 6 Seater" },
      { icon: bagIcon, label: "5-6 Bags" },
    ],
  },
  {
    name: "Comfort Van",
    type: "Group Travel",
    description: "Best choice for group tours and special events.",
    image: van,
    features: [
      { icon: seaterIcon, label: "8-10 Seater" },
      { icon: bagIcon, label: "Large Storage" },
    ],
  },
];

export default function ChooseSection() {
  return (
    <>
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <section className="bg-gray-100 py-12">
        <h2 className="text-center text-xl sm:text-2xl font-semibold text-[#FF3E1D] mb-8">
          Choose Your Ride
        </h2>

        <div className="overflow-x-auto no-scrollbar sm:ml-8 sm:pr-8 xl:ml-16 xl:pr-16">
          <div className="flex gap-6 px-6 sm:px-0 w-max">
            {[...rides, ...rides].map((ride, index) => (
              <div
                key={index}
                className="min-w-65 max-w-65 bg-white rounded-lg border border-gray-200 shadow-sm p-4 hover:shadow-md transition shrink-0"
              >
                <div className="relative w-full h-28 mb-4">
                  <Image
                    src={ride.image}
                    alt={ride.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-800">{ride.name}</h3>

                  <p className="text-xs text-[#FF3E1D] font-medium">
                    {ride.type}
                  </p>

                  <p className="text-sm text-[#191D23] leading-snug">
                    {ride.description}
                  </p>

                  <div className="flex gap-2 pt-2 flex-wrap">
                    {ride.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1 text-xs bg-gray-100 p-2 rounded-md"
                      >
                        <Image
                          src={feature.icon}
                          alt={feature.label}
                          width={14}
                          height={14}
                        />
                        <span className="text-[#4B5768] font-semibold">
                          {feature.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
