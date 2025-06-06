import Image from "next/image";
import heroImg from "@/assets/img/hero-image.webp";
const HeroImage = () => {
  return (
    <div className="absolute right-[32px] top-[22px] -z-10 h-full w-[51%]">
      <Image
        src={heroImg}
        alt="hero-image"
        className=" object-cover pointer-events-none select-none w-[666px] h-[679px]"
      />
    </div>
  );
};

export default HeroImage;
