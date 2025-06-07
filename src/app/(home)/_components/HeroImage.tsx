import Image, { StaticImageData } from "next/image";

const HeroImage = ({
  className = "",
  imgSrc,
}: {
  className: string;
  imgSrc: string | StaticImageData;
}) => {
  return (
    <div className={className}>
      <Image
        src={imgSrc}
        alt="hero-image"
        className="md:object-cover pointer-events-none select-none md:w-[666px] md:h-[679px] w-[400px] h-[456px]"
        priority
        placeholder="blur"
        sizes="(max-width: 768px) 400px, 666px"
        quality={85}
      />
    </div>
  );
};

export default HeroImage;
