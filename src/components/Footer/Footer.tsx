import { Reveal } from "../Reveal";
import { footerSocialNetworks } from "./Footer.data";
import Link from "next/link";

export function Footer() {
  return (
    <div className="max-w-5xl p-6 mx-auto mt-10 md:-mt-20" id="footer">
      <div className="border-[#005046] border-[1px] my-7" />
      <div className="items-center justify-between md:flex">
        <div className="my-3">
          <Reveal>2024 Web Connect. All Rights Reserved.</Reveal>
        </div>
        <div className="flex gap-5">
          {footerSocialNetworks.map(({ id, icon, link }) => (
            <Link key={id} href={link} className="text-2xl">
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
