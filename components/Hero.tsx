import Image from "next/image";
import backgroundImage from "../assets/images/hero-bg.png";
import googlePlayBadge from "../assets/images/google-play-badge.png";

export default function Hero() {
  return (
    <section className="relative w-full h-140 md:h-170 lg:h-155 overflow-hidden">
      <Image
        src={backgroundImage}
        alt="Hero background"
        fill
        className="object-cover"
        style={{ objectPosition: "80% top" }}
        priority
      />

      <div className="absolute inset-0 bg-linear-to-t from-white/20 to-transparent" />

      <div className="relative z-10 flex flex-col justify-between sm:justify-center h-full max-w-7xl mx-auto py-4 sm:py-0 px-6 md:px-12 lg:translate-y-20">
        <div className="md:max-w-[60%]">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4 font-medium">
            Choose your <span className="text-[#FF3E1D]">driver.</span>
            <br />
            Book <span className="text-[#FF3E1D]">
              outstation taxis
            </span> &amp; <span className="text-[#FF3E1D]">car rentals</span>{" "}
            easily
          </h1>

          <p className="text-sm sm:text-base text-white/85 leading-relaxed">
            AAVORide is your smart, reliable, and affordable outstation taxi and
            car rental platform across India. Book one-way cabs, round trips,
            local rentals, airport transfers, wedding cars, tempo travellers,
            and corporate travel — all in one app. Unlike traditional taxi
            booking apps, AAVORide lets you choose verified drivers, connect
            directly, compare options, and book with full transparency. Travel
            smarter, safer, and stress-free with AAVORide.
          </p>
        </div>

        <div className="absolute bottom-6 right-6 md:bottom-10 md:right-12 lg:bottom-[25%] bg-white/50 rounded-md px-4 py-3 flex flex-col gap-3 max-w-65 sm:max-w-75">
          <div className="flex-1 min-w-0">
            <p className="text-xs sm:text-sm font-semibold leading-tight">
              Download AAVORide &amp; Ride Smarter
            </p>
            <p className="text-xs sm:text-sm mt-2 leading-tight">
              Experience a smarter way to book taxis — your trip, your driver,
              your way.
            </p>
          </div>

          <Image
            src={googlePlayBadge}
            alt="Get it on Google Play"
            width={90}
            height={28}
            className="shrink-0 w-20 sm:w-22.5 self-end"
          />
        </div>
      </div>
    </section>
  );
}
