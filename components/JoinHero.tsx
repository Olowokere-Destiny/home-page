import Image from "next/image";
import heroBg from "../assets/images/join-hero-bg.png";
import googlePlayBadge from "../assets/images/google-play-badge.png";

export default function JoinHero() {
  return (
    <section className="relative w-full h-190 md:h-150 lg:landscape:h-screen xl:landscape:h-[90vh]  lg:landscape:pt-4 overflow-hidden sm:pb-4">
      <div className="absolute -top-16 -left-16 w-52 md:w-72 h-52 md:h-72 rounded-full bg-[#FF3E1D]/10 blur-2xl pointer-events-none z-0" />

      <div className="absolute pointer-events-none z-0 bottom-0 right-0 w-full h-56 sm:w-3/4 sm:h-72 md:w-[55%] md:h-full">
        <Image
          src={heroBg}
          alt="Driver and car illustration"
          fill
          className="object-contain object-bottom-right"
          priority
        />
      </div>

      <div className="relative z-10 -translate-y-20 sm:translate-y-0 lg:landscape:-translate-y-4 xl:-translate-y-8 flex flex-col justify-center h-full max-w-7xl mx-auto px-6 md:px-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[45px] font-semibold leading-tight mb-6">
          <span className="text-[#FF3E1D]">Drive, Rent,</span> and{" "}
          <span className="text-[#FF3E1D]">Grow</span> with AAVORide Partner
        </h1>
        
        <div className="sm:max-w-sm md:max-w-[70%] flex flex-col gap-6">
          <div className="text-sm leading-relaxed lg:text-[14px] xl:text-xl flex flex-col gap-2">
            <p>
              AAVORide Partner is a smart mobility platform designed for
              drivers, car rental agencies, and vehicle owners.
            </p>
            <p>
              Our platform connects passengers with reliable drivers and
              vehicles for local rides, outstation travel, and special bookings.
            </p>
            <p>
              Whether you are an independent driver, a car rental agency, or a
              vehicle owner looking to earn, AAVO provides the technology and
              support to help you grow your business.
            </p>
            <p>
              With a trusted network, transparent earnings, and flexible ride
              opportunities, AAVO aims to build a strong mobility ecosystem for
              partners and riders.
            </p>
          </div>

          <div className="bg-[#76767699]/60 rounded-md shadow-xs px-4 py-3 flex flex-col gap-2 sm:gap-6 w-full sm:w-fit lg:landscape:translate-y-4">
            <p className="text-sm lg:text-lg font-semibold leading-tight">
              Download AAVORide Partner
            </p>
            <p className="text-sm">
              Create Your Partner Account and Start Earning Today
            </p>
            <Image
              src={googlePlayBadge}
              alt="Get it on Google Play"
              width={90}
              height={28}
              className="shrink-0 w-20 sm:w-24 self-end mt-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
