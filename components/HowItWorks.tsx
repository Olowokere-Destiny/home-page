interface Step {
  number: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Search your destination or city",
    description:
      "Enter your destination or city to discover a range of available rides tailored to your travel needs, schedule, and preferences.",
  },
  {
    number: 2,
    title: "Browse verified driver profiles",
    description:
      "Explore detailed driver profiles with verified information, ratings, experience, and vehicle details to make a confident choice.",
  },
  {
    number: 3,
    title: "Compare details and pricing",
    description:
      "Easily compare fares, vehicle types, and service options to select the most suitable and cost-effective ride for your journey.",
  },
  {
    number: 4,
    title: "Contact driver directly",
    description:
      "Connect directly with the driver to discuss trip details, pickup points, timing, and any specific requirements for a smoother experience.",
  },
  {
    number: 5,
    title: "Confirm booking and travel safely",
    description:
      "Finalise your booking in just a few steps and enjoy a comfortable, secure, and hassle-free journey with trusted drivers.",
  },
];

function StepCard({ number, title, description }: Step) {
  return (
    <div className="bg-[#FF3E1D]/30 rounded-xl p-4 flex flex-col gap-2 flex-1 min-w-0">
      <span className="w-7 h-7 rounded-md bg-[#FF3E1D] text-white text-sm sm:text-base font-bold flex items-center justify-center shrink-0">
        {number}
      </span>
      <p className="font-semibold text-[#FF3E1D] leading-snug">{title}</p>
      <p className="text-xs leading-relaxed">{description}</p>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="w-full bg-white py-14 md:py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#FF3E1D] mb-8 text-center">
          How AAVORide Works
        </h2>

        <div className="flex flex-col md:flex-row gap-4 md:gap-16 mb-10">
          <h3 className="sm:w-1/2 text-base sm:text-lg font-bold text-[#FF3E1D] leading-snug md:w-1/3">
            Simple Steps to Start Your Ride with AAVORide
          </h3>
          <p className="sm:w-1/2 text-sm leading-relaxed md:w-2/3">
            Book a ride, choose your preferences, and travel comfortably with
            trusted drivers — all in just a few easy steps.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          {steps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}