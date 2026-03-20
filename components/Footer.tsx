import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";
import instagramIcon from "../assets/icons/instagram.svg";
import facebookIcon from "../assets/icons/facebook.svg";
import githubIcon from "../assets/icons/github.svg";
import twitterIcon from "../assets/icons/twitter.svg";

const companyLinks = [
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
];

const roboto = Roboto({
  weight: ["200", "400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const supportLinks = [
  { label: "Help Center", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Delete Account", href: "#" },
];

const socialIcons = [
  { icon: twitterIcon, alt: "Twitter", href: "#" },
  { icon: facebookIcon, alt: "Facebook", href: "#" },
  { icon: instagramIcon, alt: "Instagram", href: "#" },
  { icon: githubIcon, alt: "GitHub", href: "#" },
];

export default function Footer() {
  return (
    <footer className={`w-full bg-[#FF3E1D] text-white py-16 px-4 sm:px-8 lg:px-20 ${roboto.className} ${roboto.variable}`}>
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-10 lg:justify-items-center">


          <div className="flex flex-col gap-5">
            <span className="text-2xl font-bold">AAVORide</span>

            <p className="text-sm leading-relaxed opacity-90 max-w-xs">
              Your journey, elevated. Enjoy the perfect blend of comfort and flexibility
              with our unmatched car rental services, connecting you to the world
              with full transparency and ease.
            </p>

            <div className="flex items-center gap-3 mt-2">
              {socialIcons.map((s) => (
                <Link key={s.alt} href={s.href} aria-label={s.alt}>
                  <Image src={s.icon} alt={s.alt} width={24} height={24} />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-base font-bold">Company</h4>
            <ul className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:underline opacity-90 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-base font-bold">Help</h4>
            <ul className="flex flex-col gap-2">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:underline opacity-90 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="pt-5 text-center text-xs opacity-80">
          © 2025 <span className="font-semibold">AAVORide</span>. All rights reserved.
        </div>

      </div>
    </footer>
  );
}