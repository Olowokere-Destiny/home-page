"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is AAVO Ride Partner?",
    answer:
      "AAVO Ride Partner is an app for drivers and rental agencies to receive ride bookings and earn money by providing ride services to passengers.",
  },
  {
    question: "How can I register as a driver?",
    answer:
      "Download the AAVO Ride Partner app, complete the registration process, upload your documents, and wait for approval.",
  },
  {
    question: "How can a rental agency join AAVO Ride?",
    answer:
      "Rental agencies can register multiple vehicles and drivers through the Partner app by submitting business and vehicle documents.",
  },
  {
    question: "What documents are required for driver registration?",
    answer:
      "You need a valid driving license, vehicle RC, insurance, PUC certificate, and Aadhaar or other identity proof.",
  },
  {
    question:
      "How do I receive ride requests?",
    answer:
      "Once your account is approved and you go online in the Partner app, nearby ride requests will appear on your screen.",
  },
  {
    question: "How do I get paid for rides?",
    answer:
      "Drivers receive 100% of the ride fare directly from the rider. AAVO Ride does not take any commission. Partners only need an active membership to access ride bookings.",
  },
  {
    question: "Can I add multiple vehicles in one account?",
    answer:
      "Yes, rental agencies can add and manage multiple vehicles and drivers under a single account.",
  },
  {
    question: "Is there any commission on rides?",
    answer:
      "No. AAVO Ride follows a 0% commission model. Drivers receive 100% of the ride fare and only need an active membership to access ride bookings.",
  },
  {
    question: "Why should I join AAVO Ride Partner?",
    answer:
      "AAVO Ride offers a 0% commission model, allowing drivers and rental agencies to keep 100% of their ride earnings with only a simple membership subscription.",
  },
];

export default function JoinFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="w-full bg-white pt-10 px-4 sm:px-8 lg:px-16 max-w-4xl mx-auto">
      <div className="mx-auto">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#FF3E1D] mb-3 text-center">
          Frequently Asked Questions
        </h2>

        <p className="text-sm sm:text-base lg:text-[20px] text-center max-w-md mx-auto mb-10">
          Have questions? We&apos;ve got you covered with clear and helpful
          answers.
        </p>

        <p className="text-sm sm:text-base lg:text-2xl font-semibold text-[#FF3E1D] mb-2">
          AAVORide Partner
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
                  openIndex === i ? "max-h-100 pb-5" : "max-h-0"
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
