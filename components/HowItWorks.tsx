import Image, { StaticImageData } from "next/image";
import searchImg from "../assets/images/how-search.png";
import browseImg from "../assets/images/how-browse.png";
import compareImg from "../assets/images/how-compare.png";
import contactImg from "../assets/images/how-contact.png";
import confirmImg from "../assets/images/how-confirm.png";

interface Step {
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
}

const steps: Step[] = [
  {
    title: "Search your destination or city",
    description: "Find rides based on your location.",
    image: searchImg,
    imageAlt: "Search destination illustration",
  },
  {
    title: "Browse verified driver profiles",
    description: "Check trusted drivers and their details.",
    image: browseImg,
    imageAlt: "Browse drivers illustration",
  },
  {
    title: "Compare details and pricing",
    description: "Choose the best option that suits you.",
    image: compareImg,
    imageAlt: "Compare pricing illustration",
  },
  {
    title: "Contact driver directly easily",
    description: "Connect easily for trip details.",
    image: contactImg,
    imageAlt: "Contact driver illustration",
  },
  {
    title: "Confirm booking and travel safely",
    description: "Book your ride and enjoy a safe journey.",
    image: confirmImg,
    imageAlt: "Confirm booking illustration",
  },
];

function StepCard({ title, description, image, imageAlt }: Step) {
  return (
    <div className="relative flex flex-col gap-3 flex-1 min-w-0 bg-white rounded-sm border-t border-l border-b border-[#FF3E1D]/70 border-r border-r-[#FF3E1D]/40 p-4 shadow-sm">
      <div className="relative size-20.75">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-contain"
        />
      </div>
      <p className="font-semibold text-[#FF3E1D] text-sm sm:text-base lg:text-[20px] leading-snug">{title}</p>
      <p className="text-sm leading-relaxed lg:text-[18px] pb-3">{description}</p>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="w-full bg-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#FF3E1D] mb-3">
            How AAVORide Works
          </h2>
          <p className="text-sm sm:text-base lg:text-[20px] max-w-md mx-auto">
            Follow a few easy steps to book your ride quickly and hassle-free.
          </p>
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