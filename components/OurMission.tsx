import Image, { StaticImageData } from "next/image";
import driverIcon from "../assets/icons/driver.svg";
import vehicleOwnerIcon from "../assets/icons/vehicle-owner.svg";
import rentalAgencyIcon from "../assets/icons/rental-agency.svg";

interface RoleCardProps {
  icon: StaticImageData;
  label: string;
}

const roles: RoleCardProps[] = [
  { icon: driverIcon, label: "Driver" },
  { icon: vehicleOwnerIcon, label: "Vehicle Owner" },
  { icon: rentalAgencyIcon, label: "Rental Agency" },
];

function RoleCard({ icon, label }: RoleCardProps) {
  return (
    <div className="relative z-10 bg-white rounded-xl shadow-md flex flex-col items-center justify-center gap-3 px-6 py-6 w-32 sm:w-36 md:w-40">
      <Image src={icon} alt={label} className="size-full" />
    </div>
  );
}

export default function OurMission() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-14 px-6">

      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#FF3E1D]/10 blur-3xl pointer-events-none" />

      <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-[#FF3E1D]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">

        <div className="w-full md:w-2/5 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#FF3E1D] mb-4">
            Our Mission
          </h2>
          <p className="text-sm leading-relaxed lg:text-[18px]">
            To empower drivers, vehicle owners, and rental agencies with
            better earning opportunities while delivering reliable
            transportation services.
          </p>
        </div>

        <div className="relative w-full md:w-3/5 flex items-center justify-center">

          <div className="absolute top-0 left-0 right-0 h-16 sm:h-20 bg-[#FF3E1D]" />

          <div className="relative z-10 flex overflow-auto gap-4 sm:gap-6 pt-6 pb-2 px-4">
            {roles.map((role) => (
              <RoleCard key={role.label} {...role} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}