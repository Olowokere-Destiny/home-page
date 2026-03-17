import Image from "next/image";
import backgroundImage from "../assets/images/hero-bg.png";
import googlePlayBadge from "../assets/images/google-play-badge.png";

export default function Hero() {
  return (
    <section className="relative w-full h-130 md:h-155 overflow-hidden">
      <Image
        src={backgroundImage}
        alt="Hero background"
        fill
        className="object-cover object-center"
        priority
      />

      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-transparent" />

      <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-sm md:max-w-md">
          <h1 className="text-3xl sm:text-4xl text-white leading-tight mb-4">
            Your trip. Your <span className="text-[#FF3E1D]">driver.</span>
            <br />
            Your way.
          </h1>

          <p className="text-sm sm:text-base text-white/85 leading-relaxed">
            Looking for a taxi? AAVORide provides reliable rides with
            transparent pricing and trusted drivers. Book your ride quickly and
            travel stress-free.
          </p>
        </div>

        <div className="absolute bottom-6 right-6 md:bottom-10 md:right-12 bg-white/50 rounded-md px-4 py-3 flex flex-col gap-3 max-w-65 sm:max-w-75">
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
