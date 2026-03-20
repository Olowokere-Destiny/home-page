"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How does AAVORide work?",
    answer:
      "AAVORide connects travelers and local users with nearby drivers for different travel needs. Users can submit their trip details in the app, and multiple drivers may respond with their offers. You can review the options, discuss details directly with the drivers via call, and choose the best one for your trip. If you want to rent a car, you can also check available vehicles in the 'Rent Car' section of the app. AAVORide supports multiple vehicle purposes such as local travel, hourly bookings, and outstation trips. Payments are made directly to the driver. There is no third-party involvement, which helps both customers and drivers benefit from transparent pricing.",
  },
  {
    question: "Can I see driver details before booking?",
    answer:
      "Yes! You can view the driver's profile, vehicle details, ratings, and reviews before confirming your booking.",
  },
  {
    question: "Are fares fixed or negotiable?",
    answer:
      "Fares depend on the vehicle type and distance (km). The pricing is fully transparent, so you can see the estimated amount in advance before confirming your booking. Whether you rent a car or book a ride, the cost details are shown clearly in the app, helping you choose the option that fits your budget.",
  },
  {
    question: "Do I pay AAVORide or the driver?",
    answer:
      "Payments are made directly to the driver. AAVORide does not act as a payment intermediary. This direct payment system helps maintain transparency and allows both customers and drivers to benefit without third-party charges.",
  },
  {
    question:
      "Can I book special options like pet-friendly or senior-friendly cars?",
    answer:
      "Yes, you can filter for special vehicle options in the app while booking.",
  },
  {
    question: "What if I face an issue during booking or travel?",
    answer:
      "Our support team is available 24/7. You can raise any issues via the app's help section or contact support directly.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8 lg:px-16 max-w-4xl mx-auto">
      <div className="mx-auto">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#FF3E1D] mb-3 text-center">
          Frequently Asked Questions
        </h2>

        <p className="text-sm sm:text-base lg:text-[20px] text-center max-w-md mx-auto mb-10">
          Have questions? We&apos;ve got you covered with clear and helpful
          answers.
        </p>

        <p className="text-sm sm:text-base lg:text-2xl font-semibold text-[#FF3E1D] mb-2">
          AAVORide
        </p>

        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left"
              >
                <span className="text-sm sm:text-base lg:text-[18px]">
                  {faq.question}
                </span>

                {openIndex === i ? (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 11H15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
                      stroke="#FF3E1D"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 7V15M7 11H15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
                      stroke="#FF3E1D"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-56 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-sm leading-relaxed lg:text-[18px] text-[#5E5E5E]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
