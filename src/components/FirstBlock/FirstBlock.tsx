"use client";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";
import useGetWindowSize from "../../utils/useGetWindowSize";
import { RiWhatsappFill } from "react-icons/ri";

export function FirstBlock() {
  const { width } = useGetWindowSize();
  const isDesktopOrLaptop = (width ?? 0) >= 768;
  return (
    <div className="relative p-4 md:py-20">
      <BackgroundRadialRight />
      <div className="grid max-w-5xl mx-auto md:grid-cols-2">
        <div>
          <Reveal>
            <h1 className="text-5xl font-semibold">
              Picadas
              <span className="block degradedBlue bg-greenLight">
                El Progreso
              </span>
              ¡a tu alcance!
            </h1>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-10">
              Donde cada tabla es un bocado, una experiencia inolvidable.
            </p>
          </Reveal>

          {!isDesktopOrLaptop && (
            <Reveal>
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
            </Reveal>
          )}
        </div>
        <MotionTransition className="flex items-center justify-center mt-4 md:mt-0">
          <img className="imageBar" src="/assets/inicioImg.png" />
        </MotionTransition>
      </div>
    </div>
  );
}
