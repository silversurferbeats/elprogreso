"use client";
import Image from "next/image";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";
import { dataHeader } from "./Header.data";
import { useState } from "react";
import { MotionTransition } from "../MotionTransition/";
import useGetWindowSize from "../../utils/useGetWindowSize";

export function Header() {
  const { width } = useGetWindowSize();
  const isDesktopOrLaptop = (width ?? 0) >= 768;
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <MotionTransition>
      <nav className="flex flex-wrap items-center justify-between w-full p-2 mx-auto bg-[#cbe9a2]">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/progresoLogo.png"
            width="100"
            height="100"
            alt="Logo Bank"
          />
        </Link>
        <RiMenu3Line
          className="block w-[5rem] md:hidden cursor-pointer"
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
        />
        <div
          className={`${
            openMobileMenu ? "block" : "hidden"
          } w-full md:block md:w-auto`}
        >
          <div className="flex flex-col p-4 mt-4 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {dataHeader.map(({ id, name, idLink }) => (
              <div
                key={id}
                className="px-10 transition-all duration-500 ease-in-out mt-4"
              >
                <Link href={idLink} className="text-xl hover:text-secondary">
                  {name}
                </Link>
              </div>
            ))}
          </div>
        </div>
        {isDesktopOrLaptop && (
          <a
            href="https://wa.me/+5491159445105"
            target="_blank"
            className="w-[15rem] h-[4rem] flex items-center bg-[#005046] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition gap-4"
          >
            <img
              src="/assets/whatsappIcon.png"
              width={50}
              height={20}
              alt="WhatsApp Icon"
              className="rounded-xl"
            />
            Ordena Online
          </a>
        )}
      </nav>
    </MotionTransition>
  );
}
