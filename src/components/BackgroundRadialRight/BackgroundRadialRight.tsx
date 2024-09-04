import Image from "next/image";

export function BackgroundRadialRight() {
  return (
    <div className="right-0 absolute -z-50 top-0">
      <Image
        src="/assets/gradientBackgroundRadial2.png"
        width={850}
        height={650}
        alt="Circle Right"
      />
    </div>
  );
}
