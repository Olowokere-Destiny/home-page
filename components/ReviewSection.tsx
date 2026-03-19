"use client";
import Image, { StaticImageData } from "next/image";
import ananya from "../assets/images/ananya.png";
import rahul from "../assets/images/rahul.png";
import stars from "../assets/icons/reviews-stars.svg";
interface ReviewCardProps {
  image: StaticImageData;
  review: string;
  name: string;
  role: string;
}

const reviews: ReviewCardProps[] = [
  {
    image: ananya,
    review:
      "AavoRide made my airport transfer completely stress-free. The driver arrived on time, the car was clean, and the ride was very comfortable. I highly recommend their service for anyone looking for reliable travel.",
    name: "Ananya Verma",
    role: "Marketing Manager",
  },
  {
    image: rahul,
    review:
      "I booked an outstation trip with AavoRide and the experience was excellent. The driver was professional and the pricing was transparent. It’s one of the most convenient cab services I’ve used.",
    name: "Rahul Mehta",
    role: "Business Consultant",
  },
];

function ReviewCard({ image, review, name, role }: ReviewCardProps) {
  return (
    <div className="flex gap-4 bg-white rounded-md p-5 shadow-sm shrink-0 w-112.5 items-center">
      <div className="relative w-44 h-full shrink-0 rounded-lg overflow-hidden">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      <div className="flex flex-col justify-between gap-3">
        <div className="flex flex-col gap-2">
          <Image src={stars} alt="stars" />
          <p className="text-xs sm:text-sm leading-relaxed">
            &ldquo;{review}&rdquo;
          </p>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-sm font-semibold text-gray-900">{name}</p>
          <p className="text-xs text-[#64748B] font-medium">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function ReviewSection() {
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
      <section className="w-full bg-gray-200 py-14 md:py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-[#FF3E1D] text-center mb-10">
            What Our Customers Say
          </h2>

          <div className="flex gap-6 overflow-x-auto no-scrollbar max-w-7xl mx-auto">
            {[...reviews, ...reviews].map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
