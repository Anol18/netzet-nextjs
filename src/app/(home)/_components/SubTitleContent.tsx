import { Text } from "@/_components/ui/Text";
import { urbanist } from "@/libs/font";

const SubTitleContent = () => {
	return (
		<Text
			as="p"
			variant={"heroTitle"}
			weight={"heroTitle"}
			className={`${urbanist.className} text-secondary [text-shadow:0px_3px_3px_#fc004e] pl-[2px]`}
		>
			Discover your way to success with Fametonic:
		</Text>
	);
};

export default SubTitleContent;
