import { Text } from "@/_components/ui/Text";

const HeroTitleContent = () => {
  return (
    <Text
      as="p"
      variant={"heroTitle"}
      weight={"heroTitle"}
      className={`font-urbanist md:pl-[4px] text-center md:text-start max-sm:px-1  pt-[4px] pl-[5px] md:pt-0`}
    >
      Want to Turn Social Media Into a Profitable Career?
    </Text>
  );
};

export default HeroTitleContent;
