import { Text } from "@/_components/ui/Text";
import { urbanist } from "@/libs/font";

const HeroTitleContent = () => {
	return (
		<Text
			as="p"
			variant={"heroTitle"}
			weight={"heroTitle"}
			className={`${urbanist.className} pl-[2px]`}
		>
			Want to Turn Social Media Into a Profitable Career?
		</Text>
	);
};

export default HeroTitleContent;
