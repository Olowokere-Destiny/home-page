import Image, { StaticImageData } from "next/image";
import rentCar from "../assets/images/rent-my-car.png";
import agencyPartner from "../assets/images/agency-partner.png";
import joinAsDriver from "../assets/images/join-as-driver.png";

interface StepProps {
  index: number;
  number: number;
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
}

const steps = [
  {
    number: 1,
    title: "Rent My Car",
    description:
      "Rent your car on AAVORide and earn money whenever it's not in use. Simple, secure, and profitable.",
    image: rentCar,
    imageAlt: "Rent my car illustration",
  },
  {
    number: 2,
    title: "Agency/ Travel Partner",
    description:
      "Manage bookings, connect with more customers, and grow your travel agency with AAVORide's powerful platform.",
    image: agencyPartner,
    imageAlt: "Agency travel partner illustration",
  },
  {
    number: 3,
    title: "Join As Driver",
    description:
      "Get ride requests, flexible working hours, and steady income by driving with AAVORide.",
    image: joinAsDriver,
    imageAlt: "Join as driver illustration",
  },
];

function Step({
  index,
  number,
  title,
  description,
  image,
  imageAlt,
}: StepProps) {
  const isReversed = index % 2 !== 0;
  const isFirst = index === 0;

  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-4 md:gap-16 ${
        isReversed ? "md:flex-row-reverse" : ""
      } ${!isFirst && "md:-translate-y-10"}`}
    >
      <div
        className={`w-full md:w-[40%] flex justify-center ${isReversed ? "md:justify-end" : "md:justify-start"}`}
      >
        <Image
          src={image}
          alt={imageAlt}
          width={280}
          height={280}
          className="w-36 sm:w-52 md:w-72 h-auto"
        />
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left px-2 md:px-0">
        <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
          <span className="flex items-center justify-center w-7 h-7 lg:size-9 rounded-xs bg-[#FF3E1D] text-white text-sm lg:text-[20px] font-bold shrink-0">
            {number}
          </span>
          <h3 className="text-base sm:text-xl lg:text-2xl font-semibold text-[#FF3E1D]">
            {title}
          </h3>
        </div>
        <p className="text-sm leading-relaxed lg:text-[20px]">{description}</p>
      </div>
    </div>
  );
}

export default function JoinSteps() {
  return (
    <section className="w-full bg-white py-10 px-6">
      <div className="max-w-6xl mx-auto text-center mb-10 md:mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#FF3E1D] mb-3">
          Turn Your Car Into Income
        </h2>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-4 sm:-gap-0">
        {steps.map((step, index) => (
          <Step key={step.number} index={index} {...step} />
        ))}
      </div>
    </section>
  );
}
