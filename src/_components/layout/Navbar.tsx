import Image from "next/image";
import { Text } from "../ui/Text";

const Navbar = () => {
	return (
		<nav className="">
			<div className="flex items-center justify-between">
				<div className="pt-[2.27rem]">
					<Image src={"/logo.png"} alt="logo" width={173.12} height={74} />
				</div>
				<div className="flex  gap-[46px] pb-[16px] max-md:hidden ">
					<Text variant={"navText"} color={"secondary"} weight={"navText"}>
						About us
					</Text>
					<Text
						variant={"navText"}
						color={"secondary"}
						weight={"navText"}
						className="pr-[4px]"
					>
						Contact
					</Text>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
