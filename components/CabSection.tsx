import CabCard from "@/components/CabCard";
import cabImg1 from "../assets/images/cab-img-1.png";
import cabImg2 from "../assets/images/cab-img-2.png";
import cabImg3 from "../assets/images/cab-img-3.png";
import cabImg4 from "../assets/images/cab-img-4.png";
import cabImg5 from "../assets/images/cab-img-5.png";
import cabImg6 from "../assets/images/cab-img-6.png";

export default function CabSection() {
  const services = [
    {
      title: "City Travel Made Simple",
      description:
        "Convenient local car rentals with fair pricing and dependable pickups.",
      image: cabImg1,
    },
    {
      title: "Smooth Outstation Journeys",
      description:
        "Enjoy long-distance trips with professional drivers and transparent fares.",
      image: cabImg2,
    },
    {
      title: "Hassle-Free Airport Transfers",
      description:
        "Timely airport pickups and drop-offs with fixed, worry-free pricing.",
      image: cabImg3,
    },
    {
      title: "Wedding Travel Made Special",
      description:
        "Elegant wedding car rentals with premium comfort and on-time service.",
      image: cabImg4,
    },
    {
      title: "Round Trip Cabs",
      description:
        "Comfortable rides for your complete journey with flexible arrangements.",
      image: cabImg5,
    },
    {
      title: "Tempo Traveller Booking",
      description: "Spacious tempo travellers for comfortable group journeys.",
      image: cabImg6,
    },
  ];

  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto text-center mb-10 md:mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#FF3E1D] mb-3">
          Cabs for Every Travel Need
        </h2>
        <p className="text-sm sm:text-base lg:text-[20px] max-w-xl mx-auto">
          Flexible, comfortable, and affordable ride options designed for every type of travel.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <CabCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}
