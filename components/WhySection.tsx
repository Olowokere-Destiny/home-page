import Image, { StaticImageData } from "next/image";
import verifiedDrivers from "../assets/icons/verified-driver.svg"
import transparentPricing from "../assets/icons/transparent-pricing.svg"
import support from "../assets/icons/247support.svg"
import safeCars from "../assets/icons/safe-cars.svg"
import noMiddlemen from "../assets/icons/middlemen.svg"
import easyBooking from "../assets/icons/ease-booking.svg"
import { Lato } from "next/font/google";

interface WhyCardProps {
  icon: StaticImageData;
  title: string;
  description: string;
}

const lato = Lato({
  weight: ["400",],
  subsets: ["latin"],
  variable: "--font-lato",
});

const features: WhyCardProps[] = [
  {
    icon: verifiedDrivers,
    title: "Verified Drivers",
    description: "Trusted, verified drivers.",
  },
  {
    icon: transparentPricing,
    title: "Transparent Pricing",
    description: "No hidden charges.",
  },
  {
    icon: support,
    title: "24/7 Support",
    description: "Help whenever you need it.",
  },
  {
    icon: safeCars,
    title: "Safe & Sanitized Cars",
    description: "Clean & comfy rides.",
  },
  {
    icon: noMiddlemen,
    title: "No Middlemen",
    description: "No middlemen involved.",
  },
  {
    icon: easyBooking,
    title: "Easy booking process",
    description: "Smooth booking experience.",
  },
];

function WhyCard({ icon, title, description }: WhyCardProps) {
  return (
    <div className="flex flex-col items-center text-center gap-3 py-4 bg-[#FAFAFA]">
      <Image
        src={icon}
        alt={title}
        width={48}
        height={48}
        className="w-10 h-10 sm:w-12 sm:h-12"
      />
      <div>
        <p className="text-sm sm:text-base font-semibold text-[#FF3E1D] mb-1">{title}</p>
        <p className={`text-xs sm:text-sm ${lato.className}`}>{description}</p>
      </div>
    </div>
  );
}

export default function WhySection() {
  return (
    <section className="w-full bg-white py-14 md:py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#FF3E1D] mb-3">
          Why Ride with AAVORide?
        </h2>
        <p className="text-sm sm:text-base">
          With AAVORide, you are not just booking a cab — you are choosing your
          travel partner.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-12">
        {features.map((feature) => (
          <WhyCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}