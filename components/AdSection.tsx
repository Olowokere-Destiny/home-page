import Image from "next/image";
import languageImage from "../assets/images/language-matching.svg";
import driverPrefsImage from "../assets/images/driver-preferences.svg";

const driverPreferences = [
  "Event & Wedding Services",
  "Experienced Drivers",
  "Flexible Working Hours",
  "Highly Active Drivers",
  "Married Drivers",
  "Available for Personal Car Use",
  "Pet-Friendly Drivers",
  "Strong Local Network",
  "Wheelchair Accessible Vehicles",
  "Young & Energetic Drivers",
];

export default function AdSection() {
  return (
    <section className="w-full bg-white py-10 md:py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">

        {/* Row 1: Image left, text right */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={languageImage}
              alt="Language based driver matching illustration"
              width={420}
              height={340}
              className="w-64 sm:w-80 md:w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-base sm:text-xl lg:text-2xl font-semibold text-[#FF3E1D] mb-3">
              Language – Based Driver Matching
            </h3>
            <p className="text-sm leading-relaxed lg:text-[20px]">
              Choose your driver based on your native language. We connect you
              with drivers who speak your preferred language to ensure clear
              communication, comfort, and a smooth ride experience.
            </p>
          </div>
        </div>

        {/* Row 2: Text left, image right */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={driverPrefsImage}
              alt="Driver preferences illustration"
              width={420}
              height={340}
              className="w-64 sm:w-80 md:w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-base sm:text-xl lg:text-2xl font-semibold text-[#FF3E1D] mb-3">
              Driver Preferences
            </h3>
            <p className="text-sm leading-relaxed lg:text-[20px] mb-4">
              Choose drivers based on your personal preferences for a safer,
              more comfortable, and customized journey.
            </p>
            <ul className="text-sm leading-relaxed lg:text-[20px] space-y-1 block text-left">
              {driverPreferences.map((pref) => (
                <li key={pref} className="flex items-center gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                  {pref}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}