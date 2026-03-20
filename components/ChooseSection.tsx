"use client";

import Image, { StaticImageData } from "next/image";
import suv from "../assets/images/suv.png";
import sedan from "../assets/images/sedan.png";
import hatchback from "../assets/images/hatchback.png";
import van from "../assets/images/comfort.png";
import seaterIcon from "../assets/icons/seater-icon.svg";
import bagIcon from "../assets/icons/bag-icon.svg";
import { Roboto } from "next/font/google";
import { useDragScroll } from "../lib/hooks/useDragScroll";

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

const roboto = Roboto({
  weight: ["200", "400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

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
  const scrollRef = useDragScroll();

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
      <section className="py-12">
        <div className="max-w-6xl mx-auto text-center mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#FF3E1D] mb-3">
            Choose Your Ride
          </h2>
          <p className="text-sm sm:text-base lg:text-[20px] max-w-lg mx-auto">
            Browse a range of vehicles and pick the one that suits your journey.
          </p>
        </div>

        <div
          ref={scrollRef}
          className="overflow-x-auto no-scrollbar sm:ml-8 sm:pr-8 xl:ml-[6vw] xl:pr-[6vw]"
        >
          <div className="flex gap-6 px-6 sm:px-0 w-max pb-4">
            {[...rides, ...rides].map((ride, index) => (
              <div
                key={index}
                className={`min-w-65 max-w-65 lg:max-w-72 bg-white rounded-lg border border-gray-200 shrink-0 shadow-md ${roboto.variable} ${roboto.className}`}
              >
                <div className="relative w-full h-48 mb-4 pt-4">
                  <Image
                    src={ride.image}
                    alt={ride.name}
                    fill
                    className="object-contain"
                    draggable={false}
                  />
                </div>

                <div className="space-y-2 px-4 pb-4">
                  <h3 className="font-semibold text-[#191D23] lg:text-[18px]">
                    {ride.name}
                  </h3>
                  <p className="text-xs text-[#FF3E1D] font-medium lg:text-[14px]">
                    {ride.type}
                  </p>
                  <p className="text-sm text-[#191D23] leading-snug lg:text-[16px]">
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
                          draggable={false}
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