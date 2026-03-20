import Image, { StaticImageData } from "next/image";
import localOutstanding from "../assets/images/local-outstanding-rides.png";
import carRental from "../assets/images/car-rental.png";
import proDriveNetwork from "../assets/images/pro-drivers-network.png";
import businessGrowth from "../assets/images/business-growth.png";
import { Roboto } from "next/font/google";

interface Step {
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
}

const roboto = Roboto({
  weight: ["200", "400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const steps: Step[] = [
  {
    title: "Local & Outstation Rides",
    description: "Provide city rides and long-distance travel services.",
    image: localOutstanding,
    imageAlt: "Local and outstation rides illustration",
  },
  {
    title: "Car Rental Agency Integration",
    description: "Rental agencies can connect their fleet and receive ride bookings.",
    image: carRental,
    imageAlt: "Car rental agency illustration",
  },
  {
    title: "Professional Drivers Network",
    description: "Join a trusted community of verified drivers.",
    image: proDriveNetwork,
    imageAlt: "Professional drivers network illustration",
  },
  {
    title: "Business Growth for Partners",
    description: "Drivers and agencies can increase earnings with AAVORide.",
    image: businessGrowth,
    imageAlt: "Business growth illustration",
  },
];

function StepCard({ title, description, image, imageAlt }: Step) {
  return (
    <div className="relative flex flex-col gap-3 flex-1 min-w-0 bg-white rounded-sm border border-gray-300 p-4 shadow-md">
      <div className="relative size-32.5 mx-auto">
        <Image src={image} alt={imageAlt} fill className="object-contain" />
      </div>
      <p className="font-semibold text-[#FF3E1D] text-base lg:text-[20px] leading-snug">
        {title}
      </p>
      <p className="text-sm text-[#191D23] leading-relaxed lg:text-[16px] pb-3">
        {description}
      </p>
    </div>
  );
}

export default function WhatWeOffer() {
  return (
    <section className={`w-full bg-white py-10 px-6 ${roboto.className} ${roboto.variable}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#FF3E1D] mb-3">
            What We Offer
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          {steps.map((step) => (
            <StepCard key={step.title} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
