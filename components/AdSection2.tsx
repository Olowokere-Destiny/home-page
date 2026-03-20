import Image from "next/image";
import adBg from "../assets/images/adsection2-bg.png";

const points = [
  {
    number: 1,
    title: "Verified drivers",
    description: "Trusted, background-checked professionals.",
  },
  {
    number: 2,
    title: "Clean vehicles",
    description: "Well-maintained and sanitized rides.",
  },
  {
    number: 3,
    title: "24/7 support",
    description: "We're here for you, day and night.",
  },
];

export default function AdSection2() {
  return (
    <section className="relative w-full overflow-hidden py-6 mb-6">
      <Image
        src={adBg}
        alt="People in car"
        fill
        className="object-cover opacity-85 object-left md:object-center"
        priority
      />
      <div className="absolute hidden sm:block inset-0 bg-[linear-gradient(to_right,transparent_0%,transparent_20%,#FFD8D2_50%,#FFD8D2_100%)] md:bg-[linear-gradient(to_right,transparent_0%,transparent_25%,#FFD8D2_55%,#FFD8D2_100%)]" />{" "}
      <div className="absolute inset-0 bg-[#FFD8D2]/80 sm:hidden" />
      <div className="relative z-10 flex justify-end min-h-52 md:min-h-64">
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 px-6 md:px-12 py-10">
          <div>
            <h3 className="text-base sm:text-xl lg:text-2xl font-semibold text-[#FF3E1D] mb-1">
              Budget-Friendly Trips
            </h3>
            <p className="text-sm leading-relaxed lg:text-[20px]">
              Comfortable rides that don&apos;t hurt your pocket.
            </p>
          </div>

          <ul className="flex flex-col gap-3">
            {points.map(({ number, title, description }) => (
              <li key={number} className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-xs bg-black text-white text-xs font-bold shrink-0 mt-0.5">
                  {number}
                </span>
                <div>
                  <p className="text-sm font-semibold lg:text-[21px]">
                    {title}
                  </p>
                  <p className="text-sm lg:text-[20px]">{description}</p>
                </div>
              </li>
            ))}
          </ul>

          <button className="self-start mt-1 bg-[#FF3E1D] text-white text-sm font-medium px-5 py-2 rounded-md hover:opacity-90 transition">
            Ride Safe with AAVORide
          </button>
        </div>
      </div>
    </section>
  );
}
