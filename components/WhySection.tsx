import Image, { StaticImageData } from "next/image";
import verifiedDrivers from "../assets/images/verified-drivers.png";
import transparentPricing from "../assets/images/transparent-pricing.png";
import support from "../assets/images/247-support.png";
import safeCars from "../assets/images/sanitized-cars.png";
import noMiddlemen from "../assets/images/no-middlemen.png";
import easyBooking from "../assets/images/easy-booking.png";

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
    title: "Verified Drivers",
    description:
      "All drivers are background verified to ensure a safe and reliable ride experience for every journey.",
    image: verifiedDrivers,
    imageAlt: "Verified Drivers illustration",
  },
  {
    number: 2,
    title: "Transparent Pricing",
    description:
      "No hidden charges—view clear and upfront pricing before booking, so you always know exactly what you're paying.",
    image: transparentPricing,
    imageAlt: "Transparent Pricing illustration",
  },
  {
    number: 3,
    title: "24/7 Support",
    description:
      "Our support team is available round the clock to assist you anytime, ensuring a smooth and worry-free travel experience.",
    image: support,
    imageAlt: "24/7 Support illustration",
  },
  {
    number: 4,
    title: "Safe & Sanitized Cars",
    description:
      "Travel in well-maintained, regularly sanitized vehicles designed to keep your journey safe, clean, and comfortable.",
    image: safeCars,
    imageAlt: "Safe & Sanitized Cars illustration",
  },
  {
    number: 5,
    title: "No Middlemen",
    description:
      "Connect directly with drivers without any intermediaries for a faster, more transparent, and reliable booking process.",
    image: noMiddlemen,
    imageAlt: "No Middlemen illustration",
  },
  {
    number: 6,
    title: "Easy Booking Process",
    description:
      "Book your ride in just a few simple steps with an intuitive and hassle-free experience from start to finish.",
    image: easyBooking,
    imageAlt: "Easy Booking Process illustration",
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
        <p className="text-sm leading-relaxed lg:text-[20px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function WhySection() {
  return (
    <section className="w-full bg-white py-10  px-6">
      <div className="max-w-6xl mx-auto text-center mb-10 md:mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#FF3E1D] mb-3">
          Why Ride with AAVORide?
        </h2>
        <p className="text-sm sm:text-base lg:text-[20px] max-w-lg mx-auto">
          With AAVORide, you are not just booking a cab — you are choosing your
          travel partner.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-4 sm:-gap-0">
        {steps.map((step, index) => (
          <Step key={step.number} index={index} {...step} />
        ))}
      </div>
    </section>
  );
}
